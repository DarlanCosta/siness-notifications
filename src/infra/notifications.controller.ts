import { Body, Controller, Get, Post } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { CreateNotificationBody } from "./http/dtos/create-notification-body";

import { randomUUID } from "node:crypto";

@Controller("notifications")
export class NotificationsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: content,
        category: category,
        recipientId: recipientId,
      },
    });
  }
}
