import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { Inject, inject } from '@angular/core';

export const teacherGuard: CanActivateFn = (route, state) => {
  const user= inject(UserService);
  if(user.getMyRole() === 'teacher'){
    return true;
  }else{
    alert('Sorry,You dont have access to this route');
    return false;
  }
};
