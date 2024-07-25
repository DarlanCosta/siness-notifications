import { PrismaService } from "./prisma.service";
import { CreateNotificationBody } from "./create-notification-body";
export declare class AppController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        recipientId: string;
        content: string;
        category: string;
        readAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    create(body: CreateNotificationBody): Promise<void>;
}
