import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AirModel} from "./air-conditioner.model";


@Component({
  selector: 'app-air-conditioner',
  templateUrl: './air-conditioner.component.html'
})
export class AirConditionerComponent {

  @Input() numberValue: number = 0;
  @Output() onValueChange = new EventEmitter<number>

  increment() {
    this.numberValue++;
    console.log(this.numberValue)
  }

  decrement() {
    if (this.numberValue > 0) {
      this.numberValue--;
      console.log(this.numberValue)
    }
  }

  sliderChanged(event: Event): void {
    const sliderElement = event.target as HTMLInputElement;
    this.numberValue = parseFloat(sliderElement.value);
    this.onValueChange.emit(this.numberValue);
    console.log('Slider value changed to:', this.numberValue);
  }

}
