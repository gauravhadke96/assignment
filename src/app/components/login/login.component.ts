import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup = this.fb.group({
    emailId: ['', Validators.required],
    password: ['', Validators.required]
  })

  user = {
    emailId: '',
    password: ''
  }

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  checkLogin() {
    console.log(this.user)
    if (this.user.emailId === 'gaurav' && this.user.password === 'Gaurav@123') {
      this.router.navigateByUrl('home')
    }
  }
}
