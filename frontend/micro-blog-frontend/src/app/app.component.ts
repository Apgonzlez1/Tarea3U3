import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts: any[] = [];
  message: string = '';

  constructor(private http: HttpClient) {
    this.getPosts();
  }

  getPosts() {
    this.http.get<any[]>('http://localhost:3000/posts').subscribe((data) => {
      this.posts = data;
    });
  }

  publishMessage() {
    const msg = this.message.trim();
    if (msg.length === 0 || msg.length > 280) return;

    this.http
      .post<any>('http://localhost:3000/posts', { message: msg })
      .subscribe((newPost) => {
        this.posts.unshift(newPost);
        this.message = '';
      });
  }
}
