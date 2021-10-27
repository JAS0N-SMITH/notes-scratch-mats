import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAdd: boolean = false;
  // private showAddMessage: boolean = false;
  private subject = new Subject<any>();
  // private subjectAlt = new Subject<any>();
  
  constructor() { }

  toggleAdd(): void {
    this.showAdd = !this.showAdd;
    this.subject.next(this.showAdd);
  }

  // toggleAddMessage(): void {
  //   this.showAddMessage = !this.showAddMessage;
  //   this.subject.next(this.showAddMessage);
  // }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
