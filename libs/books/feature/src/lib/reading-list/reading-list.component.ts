import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList } from '@tmo/books/data-access';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);
  undo = false;

  constructor(private readonly store: Store, private snackBar: MatSnackBar) {}

  removeFromReadingList(item) {
    this.undo = false;
    const snackBarRef = this.snackBar.open("removed", 'Undo', {
      duration: 2000
    });
    setTimeout( () => {
      if(!this.undo){
      this.store.dispatch(removeFromReadingList({ item }));
      }
    }, 3000);

    snackBarRef.onAction().subscribe(() => {
      this.undo = true;
    });
  }
}
