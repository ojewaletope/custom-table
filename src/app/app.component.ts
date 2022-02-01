import { Component, OnInit } from '@angular/core';
import { appTableSettings } from './app.constants';
import { UserService } from './user.service';
import { User } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'custom-table';
  tableSettings = appTableSettings;

  users!: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
