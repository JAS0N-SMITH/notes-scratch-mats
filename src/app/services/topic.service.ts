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
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${this.apiUrl}/topics`);
  }

  getMessages(topic: number): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}/messages?topic=${topic}`)
  }
  
  addTopic(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>(`${this.apiUrl}/topics`, topic, httpOptions);
  }

  /* 
      WORK IN PROGRESS METHODS
  */

  editTopic(topic: Topic): Observable<Topic> {
    return this.http.patch<Topic>(`${this.apiUrl}/topics/${topic.id}`, topic, httpOptions);
  }

  deleteTopic(topic: Topic): Observable<Topic> {
    const url = `${this.apiUrl}/topics/${topic}`;
    return this.http.delete<Topic>(url);
  }
  
  addMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(`${this.apiUrl}/messages`, message, httpOptions);
  }

  editMessage(message: Message): Observable<Message> {
    return this.http.patch<Message>(`${this.apiUrl}/messages/${message.id}`, message, httpOptions);
  }

  deleteMessage(message: Message): Observable<Message> {
    const url = `${this.apiUrl}/message/${message.id}`;
    return this.http.delete<Message>(url)
  }


}
