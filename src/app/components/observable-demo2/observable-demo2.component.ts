import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, forkJoin, mergeMap, of, zip } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css'
})
export class ObservableDemo2Component {
  constructor(private httpClient:HttpClient){

  }
  ngOnInit(){
    // this.zipDemo();
    // this. fetchDataFromMultipleAPIs();
    this.withoutMergeMap();
    this.mergeMapDemo();
    // this.concatMapDemo();
  }

  concatMapDemo(){
    let usersObservable=of(1,2,3,4)
    usersObservable.pipe(concatMap((user)=>{
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${user}`)
    })).subscribe((responses)=>{
      console.log(responses);
    })
  
  }

  mergeMapDemo(){
    let usersObservable=of(1,2,3,4)
    usersObservable.pipe(mergeMap((user)=>{
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${user}`)
    })).subscribe((responses)=>{
      console.log(responses);
    })
  
  }
  
  withoutMergeMap(){
    let usersObservable=of(1,2,3,4)
    usersObservable.subscribe((user)=>{
      console.log(user);
      const url=`https://jsonplaceholder.typicode.com/users/${user}`
      let userDetailObservable=this.httpClient.get(url);
      userDetailObservable.subscribe((userDetails)=>{
        console.log(userDetails);
      })
    })
  }

  
  fetchDataFromMultipleAPIs(){
    let userNames=['sanjaysamantra1','rajeswarguda','gnraju20411'];
    let requests=userNames.map(userName=>{
      return this.httpClient.get(`https://api.github.com/users/${userName}`)
    });
    forkJoin(requests).subscribe((responses)=>{
      console.log(responses)
    });
  }

  zipDemo(){
    let names=of("sanjay","anil","rudra");
    let ages=of(40,25,23);
    let addresses=of("bangalore","hyderabad","delhi");
    let finalObs=zip([names,ages,addresses]);

    finalObs.subscribe((data)=>{
     console.log(data)
    });
  

  }

}
