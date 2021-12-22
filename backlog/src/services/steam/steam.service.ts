import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { SteamGame } from './steam-game.interface';

@Injectable()
export class SteamService {
  private readonly STEAM_API_KEY: string;
  constructor(private httpService: HttpService) {
    this.STEAM_API_KEY = process.env.STEAM_API_KEY || '';
  }
  fetchSteamGames(steamId: string): Observable<SteamGame[]> {
    const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${this.STEAM_API_KEY}&steamid=${steamId}&include_appinfo=true&format=json`;
    return this.httpService.get(url)
    .pipe(
        map(response => response.data.response.games)
    );
  }
}
