import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  page: number;
  pageSize: number;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => {
      this.page = data['page'];
      this.pageSize = data['pageSize'];
    });
  }
}
