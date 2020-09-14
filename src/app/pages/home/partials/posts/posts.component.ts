import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() posts: any;

  @Output() open = new EventEmitter<any>();
  @Output() openAuthor = new EventEmitter<any>();
  @Output() openTag = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onOpen(post) {
    this.open.emit(post);
  }

  onAuthor(author) {
    this.openAuthor.emit(author);
  }

  onTag(tag) {
    this.openTag.emit(tag);
  }

}
