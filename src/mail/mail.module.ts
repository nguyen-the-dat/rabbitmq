// src/mail/mail.module.ts
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from './mail.service';

@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false,
                auth: {
                    user: 'claudia.padberg@ethereal.email',
                    pass: 'E7q767DSQCT1u3kFnW'
                },
            },
        }),
    ],
    providers: [MailService],
    exports: [MailService],
})
export class MailModule { }