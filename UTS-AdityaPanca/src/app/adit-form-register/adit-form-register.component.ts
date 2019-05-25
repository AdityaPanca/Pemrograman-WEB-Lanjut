import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-adit-form-register',
  templateUrl: './adit-form-register.component.html',
  styleUrls: ['./adit-form-register.component.css']
})
export class AditFormRegisterComponent implements OnInit {

  jenisKelamin=[
    {id:1, name: 'laki-laki'},
    {id:2, name: 'perempuan'}
  ]

  form = new FormGroup({
    nama: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),

    alamat: new FormControl('', [
      Validators.required,
    ]),

    tanggal: new FormControl('', [
      Validators.required,
    ]),

    noTelp: new FormControl('', [
      Validators.required,
    ]),

    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),

  })

  
  get nama(){
    return this.form.get('nama');
  }

  
  get alamat(){
    return this.form.get('alamat');
  }


  get tanggal(){
    return this.form.get('tanggal');
  }


  // get jenisKelemanin(){
  //   return this.form.get('jenisKelamin');
  // }


  get noTelp(){
    return this.form.get('noTelp');
  }


  get username(){
    return this.form.get('username');
  }
  constructor() { }

  ngOnInit() {
  }

}
