import { Component, Input } from '@angular/core';
import { Box } from '../box.interface';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent {
  @Input() box: Box;

  boxes: Box[] = [];
  newBox: Box = {
    size: 5,
    contents: 'Default contents',
    shippingLabel: 'abc123',
    recipient: 'Abu Enayet Siddique',
    weight: 50
  };

  addBox() {
    this.boxes.push({ ...this.newBox });
    this.resetForm();
  }

  resetForm() {
    this.newBox = {
      size: 1,
      contents: '',
      shippingLabel: '',
      recipient: '',
      weight: 0
    };
  }
}
