import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { ApirestService } from 'src/app/services/apirest.service';
import { PostModalComponent } from './modals/post-modal/post-modal.component';
import { ProfileComponent } from './modals/profile/profile.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  modalRef: MDBModalRef;
  posts: any;
  page = 1;
  limit: number;

  constructor(
    private service: ApirestService,
    private modalService: MDBModalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.service.getPost().subscribe(
      resp => {
        console.log(resp);
        this.posts = resp['data'];
        this.limit = resp['limit'];
      },
      error => {
        console.log(error);
      }
    );
  }
  
  addPosts() {
    this.service.getPost(this.page).subscribe(
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

  openPost(event) {
    this.modalRef = this.modalService.show(PostModalComponent, {
      // class: 'modal-lg',
      data: {
        post: event
      }
    });
  }

  openProfile(author) {
    this.modalRef = this.modalService.show(ProfileComponent, {
      class: "modal-notify modal-info",
      data: {
        author: author,
      },
    });
  }

  onTag(tag) {
    this.router.navigate(['explore/tag', tag]);
  }

}
