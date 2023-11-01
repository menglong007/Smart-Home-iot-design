import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DeviceItem} from "./device-item.model";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html'
})
export class DeviceItemComponent {

  @Input() public data: DeviceItem = {
    name: 'Nothing',
    icon: 'help',
    value: true
  }
  @Output() public onChange = new EventEmitter<boolean>();


  onToggle(event: MatSlideToggleChange) {
    if (this.data.value == event.checked) return;
    this.data.value = event.checked;
    this.onChange.emit(event.checked);
  }

}
