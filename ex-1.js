class Notification {
    constructor(notificationId, createdTime, content, receiver) {
      this.notificationId = notificationId;
      this.createdTime = createdTime;
      this.content = content;
      this.receiver = receiver;
    }
    send() {
      console.log(`Notification has been sent to ${this.receiver}`);
    }
}
  
class EmailNotification extends Notification {
    constructor(notificationId, createdTime, content, receiver) {
      super(notificationId, createdTime, content, receiver);
    }
}
  
class SMSNotification extends Notification {
    constructor(notificationId, createdTime, content, receiver) {
      super(notificationId, createdTime, content, receiver);
    }
}

const johnEmail = new EmailNotification("123", "10.00", "ABC", "john123@gmail.com")
const johnNumber = new SMSNotification("456", "12.00", "DEF", "0987654321")

johnEmail.send()
johnNumber.send()
