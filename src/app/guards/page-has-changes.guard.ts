import { CanDeactivateFn } from '@angular/router';

export const pageHasChangesGuard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {
  if(!component.hasChanges){
    return true;
  }else{
    alert('Sorry,You dont have access to this route');
    return false;
  }
};
