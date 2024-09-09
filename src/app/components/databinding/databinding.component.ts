import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  name='Dhoni';
  img_url='https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg';
  userId=1;
  flag=false;
  msg:string='';
  selectedState:string='odisha';
  num1:number=0;
  num2:number=0;
  // selectedOperator:string='+';
  show:boolean=false;
  colspanValue=2;
  myWidth='50%';


  isVisible=false;
  maxLength=100;
  textContent='';
  remainingChars=this.maxLength;

  toggleMode(){
    this.flag=!this.flag;
    if(this.flag){
      document.body.classList.add('dark');
    }else{
      document.body.classList.remove('dark');
    }
  }

  password(){
    this.show=!this.show
  }

  toggleFlag(){
    this.flag=!this.flag;
  }

  toggleVisible(){
    this.isVisible=!this.isVisible;
  }

  updateRemainingChars(){
    this.remainingChars=this.maxLength-this.textContent.length;
  }

  f1(){
    console.log('f1 ...');
  }

  changeName(){
    this.name='Sachin Tendulkar'
    this.userId=10
  }

  onUserIdChange(eve:any){
    console.log(eve)
  }

  userIdChanged(){
    console.log(this.userId,'second')
  }
}
