Code Review:
* Use of meaningful variable names while looping an array.
* Follow BEM naming convention for CSS classes. 
* ex: 
    .book { 
      &__title {
        font-weight: 500;
        color: $gray80;
        margin-bottom: $spacing-xs;
      } 
    }
* Do we need readonly FormBuilder in the constructor.
* Don't use tags like strong etc in the HTML.
* Don't use innerhtml, rather use string interpolation.
* Remove unused lifecycle hooks like ngOninit.

Web Accessibility Issues:
* There is no Alternate text for the book images. 
* reading List button on the top right corner should be easily viewable.

Enhancements:
* Once you add a book to the reading list, "Want to Read" button is disabled. At this point, we do not know if the book is already in the reading list or I'm not   supposed to read that book unless I see the reading list. Here we can clear off this issue by toggling the button to display appropriate message.
* There is a lot of unused space in the UI, we can use it to make the UI more good looking and responsive. 
* Adding a clear button for the search input text field would make it easier to clear off longer text.
* When you refresh the page, it is not holding the previous search results and search keyword.
