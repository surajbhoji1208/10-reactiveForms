import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private api:UserService) { }

  user:any;
  ngOnInit(): void {
    this.api.getData().subscribe(data=>{
       this.user=data

       console.log(this.user);
       
    })
  }

  displayedColumns: string[] = ['id', 'name', 'email', 'password'];
}
