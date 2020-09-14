import { Component, Input, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { ApirestService } from 'src/app/services/apirest.service';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent implements OnInit {

  post: any;
  comments: any;

  constructor(
    public modalRef: MDBModalRef,
    private service: ApirestService
  ) { }

  ngOnInit(): void {
      this.getComments();
  }

  getComments() {
    this.service.commets(this.post.id).subscribe(
      resp => {
        this.comments = resp['data'];
      },
      error => {
        console.log(error);
      }
    )
  }

}
