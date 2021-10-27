import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from '../Topic';
import { Message } from '../Message';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  private apiUrl = 'http://localhost:5000/topics';

  constructor(private http: HttpClient) {}

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.apiUrl);
  }

  addNewTopic(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>(this.apiUrl, topic, httpOptions);
  }

  // deleteMessage(message: Message): Observable<Message> {
  //   const url = `${this.apiUrl}/${message.title}`;
  //   return this.http.delete<Message>(url)
  // }

  // addMessage(message: Message): Observable<Message> {
  //   return this.http.post<Message>(this.apiUrl, message, httpOptions);
  // }

}
