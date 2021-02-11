import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card mt-4';
  @Input() email: Email
  expanded: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  espandi() {
    this.expanded = !this.expanded;
  }
}
