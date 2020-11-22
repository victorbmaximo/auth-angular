import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const credentials = this.loginForm.value;
    this.loading = true;
    this.authService.login(credentials).subscribe(
      (u) => {
        this.snackBar.open(' Logged in Successfuly ' + u.firstname + '!', 'OK', { duration: 2000 });
        // console.log(u);
        this.router.navigateByUrl('/');
        this.loading = false;
      }, (err) => {
        this.snackBar.open('Login Error', 'OK', { duration: 2000 });
        this.loading = false;
      }
    );
  }

}
