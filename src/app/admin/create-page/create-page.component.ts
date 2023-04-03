import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/interfaces';
import { PostsService } from '../../shared/services/posts.service';
import { MatSnackBarService } from 'src/app/shared/services/mat-snack-bar.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form!: FormGroup
  createSub!: Subscription

  // reset material form
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;

  constructor(
    public postsService: PostsService,
    private matSnackBar: MatSnackBarService
  ) { }

  ngOnInit(): void {
    this.form  = new FormGroup({
      author: new FormControl('',[Validators.required]),
      title: new FormControl('',[Validators.required]),
      text: new FormControl('',[Validators.required]),
    })
   
  }

  submit() {
   if (this.form.invalid) {
    return
   }
   const post: Post = {
     author: this.form.value.author,
     title: this.form.value.title,
     text: this.form.value.text,
     date: new Date(),
   }
   this.createSub = this.postsService.createPost(post).subscribe( ()  =>  {
    this.formDirective.resetForm()
    this.matSnackBar.openSnackBar('Post Created !')
   })
    }
    
    ngOnDestroy(): void {
      if (this.createSub) {
        this.createSub.unsubscribe()
      }
    }
}
