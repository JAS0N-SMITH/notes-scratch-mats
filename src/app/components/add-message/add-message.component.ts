import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/Message';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {
  
  id!: number;
  topic!: number;
  title!: string;
  author!: string;
  text!: string;
  showAddMessage!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddMessage = value;
    });
  }

  ngOnInit(): void {
  }

  // toggleAddMessage() {
  //   this.uiService.toggleAddMessage();
  //   console.log(`ToggleAddMessage clicked! ${this.showAddMessage}`);
  // }

  
}
