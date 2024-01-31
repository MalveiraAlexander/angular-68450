import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  form: FormGroup;
  formArray: FormGroup[];


  ngOnInit(): void {
    this.createForm();
    // this.pathValues();
  }

  pathValues() {
    this.form.patchValue({
      name: 'Alexander Exequiel Malveira',
      document: '40500233',
      phone: '351568999',
      email: 'amalveira@educacion.edu.ar',
      isLactoseIntolerant: true,
      isAllergic: true,
      observations: `Alérgico al Ibuprofeno.\nSolamente puedo consumir lecha 0% lactosa, pero si puedo otros derivados de la leche.`
    })
    this.setObservation();
  }

  confirmationSubmit() {
    console.log(this.form);
  }

  setObservation() {
    if (this.form.value['isCeliac'] ||
        this.form.value['isVegetarian'] ||
        this.form.value['isVegan'] ||
        this.form.value['isLactoseIntolerant'] ||
        this.form.value['isAllergic']) {
      this.form.controls['observations'].enable();
      this.form.controls['observations'].setValidators([Validators.required, Validators.maxLength(500), Validators.minLength(5)]);
      this.form.controls['observations'].updateValueAndValidity();
    } else {
      this.form.controls['observations'].disable();
      this.form.controls['observations'].setValue(null);
      this.form.controls['observations'].clearValidators();
    }
  }

  send() {
    console.log(this.formArray);

  }

  createForm() {
    this.form = new FormGroup({
      name: new FormControl<string>(null, [Validators.minLength(2), Validators.maxLength(255), Validators.required]),
      document: new FormControl<string>(null, [Validators.required, Validators.pattern(/^\d{7,8}/)]),
      phone: new FormControl<string>(null, [Validators.required, Validators.pattern(/^(9)?(11|[2368]\d{1,2}) ?15?\d{6,8}$/)]),
      email: new FormControl<string>(null, [Validators.email, Validators.required]),
      isCeliac: new FormControl<boolean>(false),
      isVegetarian: new FormControl<boolean>(false),
      isVegan: new FormControl<boolean>(false),
      isLactoseIntolerant: new FormControl<boolean>(false),
      isAllergic: new FormControl<boolean>(false),
      observations: new FormControl<string>(null)
    });
    this.setObservation();
    let formOne = new FormGroup<FormModel>({
      name1: new FormControl<string>(null)
    })
    let formTwo = new FormGroup<FormModel>({
      name1: new FormControl<string>(null)
    })
    let formTres = new FormGroup<FormModel>({
      name1: new FormControl<string>(null)
    })
    this.formArray = [
      formOne,
      formTwo,
      formTres
    ]
  }
}

interface FormModel {
  name1: FormControl<string>
}

interface UserModel {
  name1: string;
}
