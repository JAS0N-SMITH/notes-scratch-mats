import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/services/topic.service';
import { Topic } from 'src/app/Topic';
import { Message } from 'src/app/Message';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  topics: Topic[] = [];
  adding: boolean = true;
  showAdd!: boolean;
  subscription: Subscription;

  constructor(private topicService: TopicService, private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value: boolean) => {
        this.showAdd = value;
      })
   }

  ngOnInit(): void {
    this.topicService.getTopics().subscribe((topics: Topic[]) => {
      this.topics = topics;
      this.topics.forEach(topic => {
        this.topicService.getMessages(topic.id).subscribe((msgs: Message[]) => {
          topic.messages = msgs;
        })
      });
    })
  }

}
