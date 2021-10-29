import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTopic: boolean = false;
  private showAddMessage: boolean = false;
  private subject = new Subject<any>();
  private subjectAlt = new Subject<any>();
  
  constructor() { }

  toggleAddTopic(): void {
    this.showAddTopic = !this.showAddTopic;
    this.subject.next(this.showAddTopic);
  }

  toggleAddMsg(): void {
    this.showAddMessage = !this.showAddMessage;
    this.subjectAlt.next(this.showAddMessage);
  }  

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
