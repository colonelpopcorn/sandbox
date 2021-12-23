#! /usr/bin/env node
const https = require('https');
const { HowLongToBeatService, HowLongToBeatEntry } = require('howlongtobeat');
const readline = require('readline');


function fetchTwitchData(gameName) {
  const twitchClientId = process.env.TWITCH_CLIENT_ID || '';
  const twitchClientSecret = process.env.TWITCH_CLIENT_SECRET || '';
  const twitchTokenUrl = 'id.twitch.tv';
  const twitchTokenPath = `/oauth2/token?client_id=${twitchClientId}&client_secret=${twitchClientSecret}&grant_type=client_credentials`;
  const twitchApiUrl = 'api.igdb.com';
  const twitchApiPath = `/v4/games`;
  return httpsGet({
    hostname: twitchTokenUrl,
    port: 443,
    method: 'POST',
    path: twitchTokenPath,
  }).then(({ access_token }) =>
    httpsRequest({
      hostname: twitchApiUrl,
      port: 443,
      method: 'POST',
      path: `${twitchApiPath}`,
      headers: {
        'Client-ID': twitchClientId,
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'text/plain',
      },
      body: `fields *; where name = "${gameName}"*;`,
    }),
  );
}

function getGameInfo(game) {
  const gameName = game.name;
  const play_time = game.playtime_forever;
  const service = new HowLongToBeatService();
  return Promise.all([
    service.search(gameName),
    fetchTwitchData(gameName),
  ]).then(
    ([hltbData, igdbData]) =>
      new Promise((resolve, reject) => {
        const findGamePredicate = (game) => game.name === gameName;
        const hltbGame = hltbData.find(findGamePredicate) || {
          gameplayMain: null,
          gameplayCompletionist: null,
        };
        const igdbGame = igdbData.find(findGamePredicate) || {
          aggregated_rating: null,
          rating: null,
          first_release_date: null,
        };
        resolve({
          game_name: gameName,
          play_time,
          time_to_beat: `${hltbGame.gameplayMain} - ${hltbGame.gameplayCompletionist}`,
          score_critic: igdbGame.aggregated_rating,
          score_community: Math.round(igdbGame.rating),
          release_date: igdbGame.first_release_date,
        });
      }),
  );
}

function generateBacklogTableInsertStatementsAvoidingAPIRateLimits() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const recursiveAsyncReadLine = function (iterables, query, callback) {
    rl.question(`${query} Type exit to close`, function (answer) {
      if (answer == 'exit') {
        //we need some base case, for recursion
        return rl.close(); //closing RL and returning from function.
      }
      callback(iterables[0], answer);
      recursiveAsyncReadLine(
        iterables.slice(1, iterables.length),
        query,
        callback,
      ); //Calling this function again to ask new question
    });
  };
  fetchSteamGames().then(({ response: { games } }) => {
    recursiveAsyncReadLine(
      games,
      'Ready to fetch data, continue?',
      (game, str) => {
        const strGame = game.name;
        if (['y', 'yes', 'Y', 'Yes'].includes(str)) {
          try {
            getGameInfo(game)
              .then(console.log)
              .catch((err) => {
                console.error(err);
                console.error(`Failed to get info for ${strGame}!`);
              });
          } catch (_) {
            console.error(err);
            console.error(`Failed to get info for ${strGame}!`);
          }
        }
      },
    );
  });
}

function generateBacklogTableInsertStatements() {
  fetchSteamGames().then(({ response: { games } }) => {
    const promises = [];
    for (const game of games) {
      promises.push(getGameInfo(game));
    }
    Promise.all(promises).then(console.log);
  });
}

generateBacklogTableInsertStatements();
