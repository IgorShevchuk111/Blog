import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Post } from 'src/app/shared/interfaces';
import { MatSnackBarService } from 'src/app/shared/services/mat-snack-bar.service';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  form!: FormGroup
  post!: Post

constructor (
  private postsServices: PostsService,
  private route: ActivatedRoute,
  private router: Router,
  private matSnackBar: MatSnackBarService
){ }
ngOnInit(): void {
  // Update Post get post by id
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
// Update Post
submit() {
  if (this.form.invalid) {
    return
  }
  const udDatedPost: Post = {
    ...this.post,
    text: this.form.value.text,
    title: this.form.value.title,
  }
  this.postsServices.upDatePost(udDatedPost).subscribe(post => {
    this.router.navigate(['/admin', 'posts'])
    this,this.matSnackBar.openSnackBar('Post updated !')
  })
  }
}
