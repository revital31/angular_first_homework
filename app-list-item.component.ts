import { Component, OnInit,Input } from '@angular/core';
import { Users } from 'src/app/modules/User';
import { CompileTemplateMetadata } from '@angular/compiler';


@Component({
  selector: 'app-app-list-item',
  templateUrl: './app-list-item.component.html',
  styleUrls: ['./app-list-item.component.css']
})
export class AppListItemComponent implements OnInit {
  //users: Users []
  @Input() users:Users;


  constructor() { }

  ngOnInit(): void {
  }

  onToggle (users) {
    console.log('change has been made');

  }



  onDelete(users) {
    console.log('user deleted');

  }


}
