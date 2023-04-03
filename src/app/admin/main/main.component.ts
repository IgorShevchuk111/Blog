import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/interfaces';
import { PostsService } from 'src/app/shared/services/posts.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  getPostSub!: Subscription
  posts: Post[] = []
  navSearchInput:string = ''

  constructor(
    private postsService: PostsService,
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    // Get Posts
    this.getPostSub = this.postsService.getPosts().subscribe(response => {
      response.reverse();
      this.posts = response
    });
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
  // Edit
  editPost(id?: string){
    this.router.navigate(['/admin', 'edit', id])
  }
  // Delete Post
  removePost(id?: string) {
    if (id) {
      this.postsService.removePost(id).subscribe(() => {
        this.posts = this.posts.filter(p => p.id != id)
      })
    }
  }

}
