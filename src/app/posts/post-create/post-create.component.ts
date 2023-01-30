import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/Post.model';
import { PostServices } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postText: Array<any> = []

  textArea: any = ""
  PostForm !:any
  constructor(fb : FormBuilder, private postService: PostServices) {
    this.PostForm = fb.group(
      {title : [null, [Validators.required, Validators.maxLength(2)]],
      description : [null, [Validators.required]]}
    )
  }

  ngOnInit(): void {

  }

  submitPost(){
    this.postService.createPost(this.PostForm.value.title, this.PostForm.value.description)
    console.log(this.PostForm.value.title)
  }

}
