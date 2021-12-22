import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SteamService } from './services/steam/steam.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, SteamService],
})
export class AppModule {}
