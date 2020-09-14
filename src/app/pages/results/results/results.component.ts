import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { ApirestService } from 'src/app/services/apirest.service';
import { AuthorModalComponent } from '../../layout/modals/author-modal/author-modal.component';
import { PostDetailModalComponent } from '../../layout/modals/post-detail-modal/post-detail-modal.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  page = 0;
  limit: number;

  tag: string;
  posts: any;
  total: number;

  modalRef: MDBModalRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ApirestService,
    private modalService: MDBModalService,
  ) {
    const routeSubscription = this.route.params.subscribe((params) => {
      this.tag = params.tag;
      this.getPost(this.tag);
    });
   }

  ngOnInit(): void {
  }

  getPost(tag) {
    this.service.getPostByTag(tag, this.page)
      .subscribe(
        resp => {
          this.posts = resp['data'];
          this.total = resp['total'];
          this.limit = resp['limit'];
          console.log(resp);
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
    this.modalRef = this.modalService.show(PostDetailModalComponent, {
      // class: 'modal-lg',
      data: {
        post: post
      }
    });
  }

  onAuthor(author) {
    this.modalRef = this.modalService.show(AuthorModalComponent, {
      class: "modal-notify modal-info",
      data: {
        author: author,
      },
    });
  }

}
