import { Component } from '@angular/core';
import * as data from './users.json';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  selectedUser:any;

  users=(data as any).default;
  isTableView:boolean=true;

  str:string='Helloooooo';

  myMap:any;

  constructor(){
    this.myMap=new Map();
    this.myMap.set('sanjay',5000)
    this.myMap.set('balu',6000)
    this.myMap.set('rama',6500)
  }

  items = ["Red", "Blue", "White"];

}
