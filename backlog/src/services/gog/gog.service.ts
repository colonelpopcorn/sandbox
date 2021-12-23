import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, Observable, of, map } from 'rxjs';
import { GOGGame } from './gog-game.interface';

@Injectable()
export class GogService {
  private readonly COOKIE;

  constructor(private httpService: HttpService) {
    console.log(process.env);
    this.COOKIE = process.env.GOG_COOKIE || '';
  }

  getAccessToken(): Observable<string> {
    const authUrl = `https://api.gog.com/user/accessToken.json`;
    return this.httpService
      .post(authUrl, null, {headers: {'Cookie': this.COOKIE}})
      .pipe(map((res) => res.data.accessToken));
  }

  getOwnedGames(): Observable<GOGGame[]> {
    return of([{}]);
  }

  private getOwnedGameIds(): Observable<number[]> {
    return of([]);
  }
}
