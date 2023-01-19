export type Message = {
  messageID: string;
  messageContent: string;
  durable: boolean;
  consumerID: string;
};
