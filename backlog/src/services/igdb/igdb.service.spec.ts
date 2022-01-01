import { HttpModule } from '@nestjs/axios';
import { ConsoleLogger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { firstValueFrom } from 'rxjs';
import { IgdbService } from './igdb.service';

const logger = new ConsoleLogger('IgdbServiceSpec');

describe('IgdbService', () => {
  let service: IgdbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [IgdbService],
    }).compile();

    service = module.get<IgdbService>(IgdbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get a token', async () => {
    const token = await firstValueFrom(service.authorize());

    logger.debug(token);

    expect(token).toBeTruthy();
  })

  it('should get games', async () => {
    const games = await firstValueFrom(service.searchByGameName("Mario"));

    const gamesStr = JSON.stringify(games, null, 2);
    
    logger.debug(gamesStr);

    expect(games).toBeTruthy();
  })


});
