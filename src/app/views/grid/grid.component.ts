import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BoncadoService } from 'src/app/services/boncado.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent implements OnInit {

  stores: any = [];

  constructor(private boncadoService: BoncadoService) { }

  ngOnInit(): void {
    this.boncadoService.getStores().subscribe(stores => {
      this.stores = stores;
    })
  }

}
