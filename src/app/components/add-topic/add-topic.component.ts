import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/Message';
import { UiService } from 'src/app/services/ui.service';
import { Topic } from 'src/app/Topic';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css'],
})
export class AddTopicComponent implements OnInit {
  @Output() onAddTopic: EventEmitter<Topic> = new EventEmitter();

  id!: number;
  title!: string;
  description!: string;
  messages!: Message[];
  showAddTopic!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => {
      this.showAddTopic = value;
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.title) {
      alert('Please add a title.');
      return;
    }

    const newTopic = {
      id: this.id,
      title: this.title,
      description: this.description,
      messages: this.messages,
    };

    this.onAddTopic.emit(newTopic);

    this.id = 0;
    this.title = '';
    this.description = '';
  }
}
