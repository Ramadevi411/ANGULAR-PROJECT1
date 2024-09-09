import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
  num1:number=0;
  num2:number=0;

  addition(a:string,b:string){
    console.log(+a + +b);
    window.alert(+a + +b);
  }
  subtraction(a:any,b:any){
    console.log(+a - +b);
    window.alert(+a - +b);
  }
  multiplication(a:any,b:any){
    console.log(a.value * b.value);
    window.alert(a.value * b.value);
  }

  division(a:any,b:any){
    console.log(a.value / b.value);
    window.alert(a.value / b.value);
  }
}
