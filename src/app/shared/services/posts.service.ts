import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/admin/services/auth.service';
import { environment } from 'src/environments/environment';
import { Post } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  idToken = this.auth.token

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  // Create Post
  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${environment.fbdb}/posts.json?auth=${this.idToken}`, post)
      .pipe(map((response: any) => {
        return {
          ...post,
          date: new Date(post.date),
          id: response.name
        }
      }))
  }
  // Get Posts
  getPosts() {
    return this.http.get(`${environment.fbdb}/posts.json?auth=${this.idToken}`)
      .pipe(
        map((response: { [key: string]: any }) => {
          return Object
            .keys(response)
            .map(key => ({
              ...response[key],
              id: key,
              date: new Date(response[key].date)
            }))
        })
      )
  }
}
