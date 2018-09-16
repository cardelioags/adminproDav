import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
})
export class GraficoDonaComponent implements OnInit {

  // @ViewChild('grafico') grafico: ElementRef;

  @Input() datos: any;

  // @Output() methodName = new EventEmitter<Class>();



  constructor() { }

  ngOnInit() {
  }

}
