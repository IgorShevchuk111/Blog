import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { Post } from 'src/app/shared/interfaces';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
submit() {
throw new Error('Method not implemented.');
}

  form!: FormGroup
  post!: Post

constructor (
  private postsServices: PostsService,
  private route: ActivatedRoute
){ }
ngOnInit(): void {
  this.route.params.pipe(
    switchMap( (params: Params) => {
      return this.postsServices.getPostById(params['id'])
    })
  ).subscribe( post => {
    this.post = post
    this.form = new FormGroup({
      title: new FormControl(post.title, [Validators.required]),
      text: new FormControl(post.text, [Validators.required]),
    })
  })
}
}
