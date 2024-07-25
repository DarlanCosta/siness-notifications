import { Notification } from "../entities/notification";

export abstract class NotificationsRepository {
  abstract save(notification: Notification): Promise<void>;
}
