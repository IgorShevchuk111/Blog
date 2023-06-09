import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../admin/services/auth.service';
import { Post } from '../shared/interfaces';
import { PostsService } from '../shared/services/posts.service';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  getPostSub!: Subscription
  navSearchInput: string = ''
  posts: Post[] = []

  constructor(
    private postsService: PostsService,
    public auth: AuthService,
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    // Get Posts
    this.getPostSub = this.postsService.getPosts().subscribe(response => {
      response.reverse();
      this.posts = response
    })
    // get navSearchInput
    this.sharedService.navSearchInputSource$.subscribe( navSearchInput => {
      this.navSearchInput = navSearchInput
    })
  }
  // Unsubscribe
  ngOnDestroy(): void {
    if (this.getPostSub) {
      this.getPostSub.unsubscribe()
    }
  }
  // Open Post
  openPost(id?: string) {
    if (id) {
      this.router.navigate(['/post', id])
    }
  }
}
