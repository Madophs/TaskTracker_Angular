import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiUrl = 'http://192.168.0.100:5000/tasks';

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const urlDelete = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(urlDelete);
  }

  updateTaskReminder(task: Task) : Observable<Task> {
    const urlUpdate = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(urlUpdate, task, httpOptions);
  }
}
