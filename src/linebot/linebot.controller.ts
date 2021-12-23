import { WebhookEvent, WebhookRequestBody } from '@line/bot-sdk';
import { Body, Controller, Post } from '@nestjs/common';
import { ConfigService as NestConfigService } from './config/config.service';

@Controller('linebot')
export class LinebotController {
  constructor(private configService: NestConfigService) {}

  @Post()
  async handler(@Body() req: WebhookRequestBody) {
    const events: WebhookEvent[] = req.events;
    events.map((event) => {
      if (event.type === 'message') {
        const returnMessage =
          event.message.type === 'text'
            ? event.message.text
            : 'テキストではありませんでした。';
        return this.configService
          .createLinebotClient()
          .replyMessage(event.replyToken, {
            type: 'text',
            text: returnMessage,
          });
      }
    });
  }
}
