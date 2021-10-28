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
  showAddTopic!: boolean;
  showAddMessage!: boolean;
  subscription: Subscription;

  constructor(private topicService: TopicService, private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value: boolean) => {
        this.showAddTopic = value;
      });

    this.subscription = this.uiService
      .onToggle()
      .subscribe((bool: boolean) => {
        this.showAddMessage = bool;
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

  toggleNewMessageComp(topic: Topic) {
    this.uiService.toggleAddMsg();
    console.log(JSON.stringify(topic))
  }

  addNewTopic(topic: Topic) {
    this.topicService.addTopic(topic).subscribe((topic: Topic) => {
      this.topics.push(topic);
    });
  }

}
