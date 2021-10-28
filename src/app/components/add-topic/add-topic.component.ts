import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Topic } from 'src/app/Topic';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css'],
})
export class AddTopicComponent implements OnInit {
  @Output() onAddNewTopic: EventEmitter<Topic> = new EventEmitter()
  id!: number;
  title!: string;
  description!: string;  

  constructor() { }

  ngOnInit(): void {}
  
  onSubmit() {
    console.log("OnSubmit called");
    if(!this.id) {
      alert('Please add a id!');
      return;
    } else if(!this.title) {
      alert('Please add a title!');
      return;
    }
    
    const newTopic = {
      id: this.id,
      title: this.title,
      description: this.description
    };

    console.log(newTopic);
    this.onAddNewTopic.emit(newTopic);
    
    // console.log(`onAddTopic.emit called ${this.onAddNewTopic.emit(newTopic)}`);

    this.id = this.id + 1;
    this.title = '';
    this.description = '';
  }
}
