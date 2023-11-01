import {Component, Input} from '@angular/core';
import {Room} from "./room.model";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html'
})
export class RoomComponent {
  @Input() public data: Room = {
    icon: 'help',
    value: true
  };



  isFoo:boolean = false;


}
