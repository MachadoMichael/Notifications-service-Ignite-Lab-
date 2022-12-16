import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';
import { Module } from '@nestjs/common';
import { NotificationsRepository } from 'src/application/repositories/notification-repository';
import { PrismaService } from './prisma/prima.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
