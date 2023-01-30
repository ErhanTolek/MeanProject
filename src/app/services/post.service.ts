import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Subject } from "rxjs";
import { Post } from "../models/Post.model";


@Injectable({providedIn: 'root'})
export class PostServices{
  Posts = new BehaviorSubject<any>(null)

createPost(title: string, description : string){

  const post: Post = {
    title,
    description
  }
  this.Posts.next(post)

  }

getPost(){
  return this.Posts.asObservable()
}

deletePost(title: string){

}

}
