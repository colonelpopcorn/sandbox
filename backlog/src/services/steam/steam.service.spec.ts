import { HttpModule } from '@nestjs/axios';
import { ConsoleLogger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { firstValueFrom } from 'rxjs';
import { SteamService } from './steam.service';

const logger = new ConsoleLogger('SteamServiceSpec');

describe('SteamService', () => {
  let service: SteamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [SteamService],
    }).compile();

    service = module.get<SteamService>(SteamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be able to fetch games', async () => {
    const data = await firstValueFrom(service.fetchSteamGames('76561198003008735'));
    
    logger.debug(data[0]);

    expect(data).toBeTruthy();
    expect(data.length).toBeGreaterThan(0);
  })
});
