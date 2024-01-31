import { Component, OnInit } from '@angular/core';
import { StateChangesService } from 'src/app/services/state-changes.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.scss'],
  providers: [UsersService]
})
export class Pagina2Component implements OnInit {

  color: string | undefined;
  constructor(private usersService: UsersService, private chengeDetectin: StateChangesService) {

  }
  ngOnInit(): void {
    console.log(this.usersService.getDate());
    this.chengeDetectin.changeColor.subscribe((color: string) => {
      this.color = color;
    });
  }
}
