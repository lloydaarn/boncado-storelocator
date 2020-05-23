import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '.app-store-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {

  @Input() public store:any;

  constructor() { }

  ngOnInit(): void {
  }

}
