import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boared-result-console',
  templateUrl: './boared-result-console.component.html',
  styleUrls: ['./boared-result-console.component.scss']
})
export class BoaredResultConsoleComponent implements OnInit {
  @Input() BoaredApiResult: {};
  constructor() { }

  ngOnInit(): void {
  }

}
