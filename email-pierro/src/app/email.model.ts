export class Email {
  recipient: string;
  object: string;
  text: string;

  constructor(recipient: string, object: string, text: string) {
    this.recipient = recipient;
    this.object = object;
    this.text = text;
  }
}
