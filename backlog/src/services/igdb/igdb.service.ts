import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IgdbService {

    private readonly TWITCH_CLIENT_ID;
    private readonly TWITCH_CLIENT_SECRET;

    constructor(private httpService: HttpService) {
      this.TWITCH_CLIENT_ID = process.env.TWITCH_CLIENT_ID || '';
      this.TWITCH_CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET || '';
    }
}
