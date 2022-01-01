import { HttpService } from '@nestjs/axios';
import { ConsoleLogger, Injectable } from '@nestjs/common';
import { map, Observable, switchMap, tap } from 'rxjs';
import { IgdbGame } from './igdb-game.interface';

const logger = new ConsoleLogger('IgdbService');

@Injectable()
export class IgdbService {
  private readonly TWITCH_CLIENT_ID;
  private readonly TWITCH_CLIENT_SECRET;

  constructor(private httpService: HttpService) {
    this.TWITCH_CLIENT_ID = process.env.TWITCH_CLIENT_ID || '';
    this.TWITCH_CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET || '';
  }

  authorize(): Observable<string> {
    const twitchTokenUrl = `https://id.twitch.tv/oauth2/token?client_id=${this.TWITCH_CLIENT_ID}&client_secret=${this.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`;
    return this.httpService
      .post(twitchTokenUrl)
      .pipe(map((res) => res.data.access_token));
  }

  searchByGameName(gameName: string): Observable<any> {
    return this.authorize().pipe(
      switchMap((accessToken) => {
        logger.debug(`token is: ${accessToken}`);
        const twitchApiUrl = 'https://api.igdb.com/v4/games';
        const headers = {
          'Client-ID': this.TWITCH_CLIENT_ID,
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        };
        return this.httpService
          .post(twitchApiUrl, `fields *; where name = "${gameName}"*;`, {
            headers,
          })
          .pipe(
            tap((res) => logger.debug(`Response is: ${JSON.stringify(res.data, null, 2)}`)),
            map((res) => res.data),
          );
      }),
    );
  }
}
