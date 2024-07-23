import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  public isLoggedIn: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn();
  }

  ngDoCheck(): void {
    this.isLoggedIn = this.userService.isLoggedIn();
  }
}