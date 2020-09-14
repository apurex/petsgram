import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { ApirestService } from 'src/app/services/apirest.service';

@Component({
  selector: 'app-author-modal',
  templateUrl: './author-modal.component.html',
  styleUrls: ['./author-modal.component.scss']
})
export class AuthorModalComponent implements OnInit {

  author: any;
  user: any;

  constructor(
    public modalRef: MDBModalRef,
    private service: ApirestService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.service.getUser(this.author.id)
      .subscribe(resp => {
        console.log(resp);
        this.user = resp;
      },
        error => {
          console.log(error);
        }
      );

  }

  get address(): string {
    return `${this.user.location.country}, ${this.user.location.state}, ${this.user.location.city} - ${this.user.location.street}`;
  }

}
