import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://tarea3u3-production.up.railway.app'; // URL de tu backend

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  createPost(post: any) {
    return this.http.post(`${this.apiUrl}/posts`, post);
  }
}
