import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-top-bar2',
  templateUrl: './top-bar2.component.html',
  styleUrls: ['./top-bar2.component.scss']
})
export class TopBar2Component implements OnInit {

  constructor(private dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(CartComponent);
  }

  ngOnInit(): void {
  }

}
