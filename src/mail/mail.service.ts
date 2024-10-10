//src/mail/mail.service.ts
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { NotificationDto } from 'src/notification/notification.dto';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) { }

    async sendMail(notification: NotificationDto) {
        const { message } = notification;

        await this.mailerService.sendMail({
            to: "datloan1408@gmail.com",
            subject: 'New Notification',
            text: message,
        });

    }
}
