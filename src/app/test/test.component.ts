import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onOtpChange(input: any) {
    if (input.length == 4) {
      console.log('text entered', input);
    }
  }
}
