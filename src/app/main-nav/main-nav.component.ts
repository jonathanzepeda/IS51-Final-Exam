import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  aboutText: string;

  constructor(private router: Router, private toastService: ToastService) { }

  ngOnInit() {
  }

  showAbout() {
    this.aboutText = 'This application is designed by Jonathan Zepeda. (C) 2018';

  }

}
