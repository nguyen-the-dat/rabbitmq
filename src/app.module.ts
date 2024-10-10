import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';
import { MailModule } from './mail/mail.module';
import { RabbitMQService } from './rabbitmq/rabbitmq.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [MailModule],
  controllers: [AppController],
  providers: [AppService, RabbitMQService],
})
export class AppModule { }
