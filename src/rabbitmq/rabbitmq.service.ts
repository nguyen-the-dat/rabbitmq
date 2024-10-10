// src/rabbitmq.service.ts
import { Injectable } from '@nestjs/common';
import {
    ClientProxy,
    ClientProxyFactory,
    EventPattern,
    MessagePattern,
    Transport,
} from '@nestjs/microservices';
import { NotificationDto } from 'src/notification/notification.dto';
// import { NotificationDto } from 'src/notification/notification.dto';

@Injectable()
export class RabbitMQService {
    private client: ClientProxy;

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://localhost:5672'],
                queue: 'notification',
                queueOptions: {
                    durable: true,
                },
            },


        });
    }

    sendNotification(notification: NotificationDto) {
        console.log('come to producer')
        return this.client
            .emit('notification', notification)

    }

}