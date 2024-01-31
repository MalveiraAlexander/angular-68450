import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component {

  constructor(private usersService: UsersService) {

  }
  ngOnInit(): void {
    console.log(this.usersService.getDate());
  }

}
