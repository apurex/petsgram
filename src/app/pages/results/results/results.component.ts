import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApirestService } from 'src/app/services/apirest.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  page = 1;
  limit: number;

  tag: string;
  posts: any;
  total: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ApirestService
  ) {
    const routeSubscription = this.route.params.subscribe((params) => {
      this.tag = params.tag;
      this.getPost(this.tag);
    });
   }

  ngOnInit(): void {
  }

  getPost(tag) {
    this.service.getPostByTag(tag)
      .subscribe(
        resp => {
          this.posts = resp['data'];
          this.total = resp['total'];
          this.limit = resp['limit'];
        },
        error => {
          console.log(error);
        }
      );
    
  }

  addPosts() {
    this.service.getPostByTag(this.tag, this.page).subscribe(
      (resp) => {
        let newPosts = resp["data"];
        this.posts.push(...newPosts);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onScroll() {
    if (this.page < this.limit) {
      this.page++;
      this.addPosts();
    } else {
      console.log("fin scroll");
    }
  }

  onOpen(post) {

  }

  onAuthor(author) {

  }

}
