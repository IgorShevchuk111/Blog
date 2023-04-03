import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MatSnackBarService {

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(alart: string) {
    this.snackBar.open(alart, 'Close', {
      duration: 3000
    });
  }
}
