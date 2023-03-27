import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../shared/interfaces';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  getPostSub!: Subscription
  posts: Post[] = []

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    // Get Posts
    this.getPostSub = this.postsService.getPosts().subscribe( response => {
      this.posts = response
    })
  }
  // Unsubscribe
  ngOnDestroy(): void {
    if (this.getPostSub) {
      this.getPostSub.unsubscribe()
    }
  }
  // Delete Post
  removePost(id?: string) {
    if (id) {
      this.postsService.removePost(id).subscribe(() => {
        this.posts = this.posts.filter(p => p.id != id)
      })
      console.log('token', this.postsService.idToken);
    }
    }
}
