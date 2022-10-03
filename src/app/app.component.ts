import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiserviceService } from './shared/shared/apiservice.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private service:ApiserviceService){}
ngOnInit(): void {
this.fetchwasteData()
this.fetchData()

}
  title = 'allexpensess';
  datetime=new Date()

  form=new FormGroup({
    datetime:new FormControl(this.datetime),
    expense:new FormControl(),
    amount:new FormControl(),
    type:new FormControl('expenses'),
  })
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  postexpenses(){
    this.service.post(this.form.value).subscribe((d)=>{
      console.log(d)
    })
  }
  getexpenses(){
    this.service.getpost(this.service.postexpenses).subscribe((d)=>{
this.datt=d
      console.log(d)
    })
  }
datt:any=[]
  data:any=[];
  error:any;
  fetchData(){
    this.service.getpost(this.service.postexpenses).pipe(map(responseData=>{
     console.log('ok',responseData);
     let result:any=[];
     for (const [key, value] of Object.entries(responseData)) {
     result.push({ id: key , ...value });
     }
return  result;

    })).subscribe((d)=>this.data=d,((error)=>this.error=error))
  }
wastedata:any=[];
  fetchwasteData(){
    this.service.getpost(this.service.postwasteexpenses).pipe(map(responseData=>{
     console.log('ok',responseData);
     let result:any=[];
     for (const [key, value] of Object.entries(responseData)) {
     result.push({ id: key , ...value });
     }
return  result;

    })).subscribe((d)=>this.wastedata=d,((error)=>this.error=error))
  }
}

