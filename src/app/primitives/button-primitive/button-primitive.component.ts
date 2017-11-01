import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-primitive',
  templateUrl: './button-primitive.component.html',
  styleUrls: ['./button-primitive.component.scss']
})
export class ButtonPrimitiveComponent implements OnInit {

  private _size = '';
  private _style = '';

  constructor() { }

  ngOnInit() {
  }


  get size(): string {
    return this._size;
  }

  @Input('size')
  set size(value: string) {
    this._size = value;
  }

  get style(): string {
    return this._style;
  }

  @Input('stils')
  set style(value: string) {
    this._style = value;
  }
}
