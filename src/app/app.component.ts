import { Component, inject } from '@angular/core';
import { StateChangesService } from './services/state-changes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clase4';

  private changeColorService = inject(StateChangesService);

  changeColor() {
    this.changeColorService.changeColor.emit('red');
  }
}
