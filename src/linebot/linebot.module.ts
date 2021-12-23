import { Module } from '@nestjs/common';
import { LinebotController } from './linebot.controller';
import { LinebotService } from './linebot.service';
import { ConfigService } from './config/config.service';

@Module({
  controllers: [LinebotController],
  providers: [LinebotService, ConfigService],
})
export class LinebotModule {}
