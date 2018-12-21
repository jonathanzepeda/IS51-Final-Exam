import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { Subject } from 'rxjs';
import { LocalStorageService } from '../localStorageService';


export interface IUser {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser = { username: '', password: '' };
  localStorageService: LocalStorageService<IUser>;
  currentUser: IUser = null;


  constructor(private router: Router, private toastService: ToastService) {
    this.localStorageService = new LocalStorageService('user');
  }

  ngOnInit() {
    this.currentUser = this.localStorageService.getItemsFromLocalStorage();
    console.log('this.currentUser.....', this.currentUser);
    if (this.currentUser != null) {
      this.router.navigate(['']);
    }
  }

  login(user: IUser) {
    console.log('from login user is: ', user);
    const defaultUser: IUser = { username: 'jonathan', password: 'jonathan123' };
    if (user.username != null && user.password != null) {
      if (user.username === defaultUser.username && user.password === defaultUser.password) {
        // log the user in
        // store user in localStorage
        this.localStorageService.saveItemsToLocalStorage(user);
        // navigate to contacts page
        this.router.navigate(['cart', user]);
      } else {
        // show error toast user
        this.toastService.showToast('danger', 15000, 'Login failed! Please specify username or password');
      }
    } else {
      // show error toast user
      this.toastService.showToast('danger', 15000, 'Login failed! Please specify username or password');
    }
  }
}
