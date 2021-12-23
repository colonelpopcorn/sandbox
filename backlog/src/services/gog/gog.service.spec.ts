import { Test, TestingModule } from '@nestjs/testing';
import { GogService } from './gog.service';
import { firstValueFrom } from 'rxjs';
import { ConsoleLogger } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

const logger = new ConsoleLogger('GogServiceSpec');


describe('GogService', () => {
  let service: GogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [GogService],
    }).compile();

    service = module.get<GogService>(GogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get a token', async () => {
    const token = await firstValueFrom(service.getAccessToken());
    logger.debug(token);
    expect(token).toBeTruthy();
  });
});
