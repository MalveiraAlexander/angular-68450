import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private activatedRouter = inject(ActivatedRoute);
  private router = inject(Router);
  id: number;


  ngOnInit(): void {
    this.activatedRouter.params.subscribe(data => {
      if (Number.isNaN(Number.parseInt(data['id']))) {
        this.router.navigateByUrl('/users');
      }
      this.id = Number.parseInt(data['id']);
    })
    this.activatedRouter.data.subscribe(data => {
      console.log(data);
    })
  }
}

