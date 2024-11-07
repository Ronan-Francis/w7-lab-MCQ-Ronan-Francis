import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
  standalone: true,
})
export class StandaloneComponent implements OnInit {
  isDisabled = true;

  constructor() { }

  ngOnInit() {}

  handleClick() {
    console.log('Button clicked!');
  }
}

@Component({
  selector: 'app-standalone-example',
  standalone: true,
  template: '<p>Standalone Component</p>',
})
export class StandaloneExampleComponent {}
