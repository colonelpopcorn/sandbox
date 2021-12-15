#! /usr/bin/env node
const https = require("https");
const cheerio = require("cheerio");

function generateInsertStatements() {
  fetchSteamGames().then((json) => {
    console.log(
      `INSERT INTO steamapps (appid, appname, percentofpositivereviews) VALUES`
    );
    json.response.games.forEach((game) =>
      console.log(`(${game.appid}, ${game.name}, NULL),`)
    );
    console.log(`;`);
  });
}

function fetchSteamGames() {
  const steamApiKey = "97B51DF6CCB943AB836D0444348769D5";
  const steamId = "76561198003008735";
  const hostname = `api.steampowered.com`;
  const path = `/IPlayerService/GetOwnedGames/v0001/?key=${steamApiKey}&steamid=${steamId}&include_appinfo=true&format=json`;
  const options = {
    hostname,
    port: 443,
    method: "GET",
    path,
  };
  return new Promise((resolve, reject) => {
    https
      .get(options, (res) => {
        let body = "";
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          try {
            resolve(JSON.parse(body));
          } catch (error) {
            console.error(error.message);
            reject(error);
          }
        });
      })
      .on("error", (error) => {
        console.error(error.message);
      });
  });
}
