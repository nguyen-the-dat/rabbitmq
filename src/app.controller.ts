import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitMQService } from './rabbitmq/rabbitmq.service';
import { NotificationDto } from './notification/notification.dto';

@Controller()
export class AppController {
  constructor(private readonly rabbitMQService: RabbitMQService) { }

  @Post('send-notification')
  async sendNotification(@Body() notification: NotificationDto) {
    await this.rabbitMQService.sendNotification(notification);

    return 'Notification sent to RabbitMQ';
  }
}
