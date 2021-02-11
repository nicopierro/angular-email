import { Component} from '@angular/core';
import { Email } from './email.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-pierro';
  emails:Email[];   // <-- component property
  constructor(){
    this.emails = [];
  }

  addEmail(recipient: HTMLInputElement, object: HTMLInputElement, text: HTMLInputElement): boolean {
    console.log(`Adding email recipient: ${recipient.value}, object: ${object.value} and text: ${text.value}`);
    this.emails.push(new Email(recipient.value, object.value, text.value));
    recipient.value = '';
    object.value = '';
    text.value = '';
    return false
  }

}
