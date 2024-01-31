import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  confirmation: ConfirmationModel = new ConfirmationModel();
  observationDisabled: boolean = true;
  observationRequired: boolean = false;

  ngOnInit(): void {
    // this.pathValues();
  }

  confirmationSubmit(form: FormGroup) {
    console.log(form);
  }

  pathValues() {
    this.confirmation = {
      name: 'Alexander Exequiel Malveira',
      document: '40500233',
      phone: '351568999',
      email: 'amalveira@educacion.edu.ar',
      isCeliac: false,
      isVegan: false,
      isVegetarian: false,
      isLactoseIntolerant: true,
      isAllergic: true,
      observations: `Alérgico al Ibuprofeno.\nSolamente puedo consumir lecha 0% lactosa, pero si puedo otros derivados de la leche.`
    };
    this.observationRequired = true;
    this.observationDisabled = false;
  }

  setObservation(form: FormGroup) {
    if (form.value['isCeliac'] ||
        form.value['isVegetarian'] ||
        form.value['isVegan'] ||
        form.value['isLactoseIntolerant'] ||
        form.value['isAllergic']) {
      this.observationDisabled = false;
      this.observationRequired = true;
    } else {
      this.observationDisabled = true;
      this.confirmation.observations = null;
    }
  }
}

class ConfirmationModel {
  name: string;
  document: string;
  phone: string;
  email: string;
  isCeliac: boolean;
  isVegetarian: boolean;
  isVegan: boolean;
  isLactoseIntolerant: boolean;
  isAllergic: boolean;
  observations: string;
}
