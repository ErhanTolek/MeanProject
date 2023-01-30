import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/Post.model';
import { PostServices } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts : Post[] = []
  isEmpty : boolean = true
  private postSub : Subscription
  constructor(private postService : PostServices) { }


  ngOnInit(): void {
    this.postSub = this.postService.getPost().subscribe(
      (data : Post) => {
        if(!!data){
          this.posts.push(data)
          console.log("list " + this.posts)
          this.isEmpty = false
        }
        else{
          this.isEmpty= true
          console.log("boş")
        }

      }
    )
  }

  deletePost(title: string){
    this.posts.splice(this.posts.findIndex(m => m.title == title), 1)
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe()
  }
}
