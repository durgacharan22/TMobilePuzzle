// import { finishedReading } from './../../../../data-access/src/lib/+state/reading-list.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList, finishedReading } from '@tmo/books/data-access';
import { ReadingListItem } from '@tmo/shared/models';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(private readonly store: Store) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }

  markAsFinished(items){
    console.log(items);
    // item.finished = true;
    // item.finishedDate = new Date().toISOString();
    const item : ReadingListItem = {
      bookId: items.bookId,
      finished: true,
      finishedDate: new Date().toISOString(),
    }
    // ...items
    this.store.dispatch(finishedReading({ item }));
  }
}
