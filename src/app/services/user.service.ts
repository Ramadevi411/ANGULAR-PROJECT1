import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  role='teacher';
  // role='student';

  constructor() { }

  getMyRole(){
    return this.role;
  }

}
