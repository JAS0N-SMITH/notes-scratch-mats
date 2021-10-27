import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TopicService } from 'src/app/services/topic.service';
import { UiService } from 'src/app/services/ui.service';
import { Topic } from 'src/app/Topic';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
})
export class TopicsComponent implements OnInit {
  topics: Topic[] = [];
  addTopic: boolean = false;
  showAddTopic!: boolean;
  // showAddMessage!: boolean;
  subscription: Subscription;

  constructor(
    private topicService: TopicService,
    private uiService: UiService
  ) {
    this.subscription = this.uiService.onToggle().subscribe((value: boolean) => {
      this.showAddTopic = value;
    });
    // this.subscription = this.uiService.onToggle().subscribe((bool: boolean) => {
    //   this.showAddMessage = bool;
    // });
  }

  ngOnInit(): void {
    this.topicService.getTopics().subscribe((topics: Topic[]) => {
      this.topics = topics;
      // console.log(this.topics[0].messages);
    });
  }

  addNewTopic(topic: Topic) {
    this.topicService.addNewTopic(topic).subscribe((topic: Topic) => {
      this.topics.push(topic);
    });
  }

  // toggleAddMessage() {
  //   this.uiService.toggleAddMessage();
  //   console.log(`ToggleAddMessage clicked! ${this.showAddMessage}`);    
  // }
}
