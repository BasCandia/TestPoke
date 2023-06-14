import { Component, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-dialog',
  templateUrl: './detalle-dialog.component.html',
  styleUrls: ['./detalle-dialog.component.css']
})
export class DetalleDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public detalles: any) {}

  ngOnInit() {
    console.log("hola");
    console.log(this.detalles);
    this.detalles.height = (this.detalles.height / 10);
    this.detalles.weight = (this.detalles.weight / 10);
  }

}
