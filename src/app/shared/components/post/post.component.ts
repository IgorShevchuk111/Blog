import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Post } from '../../interfaces';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post$!: Observable<Post>

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ){}

  ngOnInit(){
    this.post$ = this.route.params
    .pipe(
      switchMap((params: Params)  => {
        return this.postsService.getPostById(params['id'])
      } )
    )
  }
}
