import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  type: number;
  private activatedRouter = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    this.activatedRouter.data.subscribe(data => {
      console.log(data);

      this.type = data['type'];
    })
  }
}
