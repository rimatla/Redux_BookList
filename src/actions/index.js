//action creator
export function selectBook(book) {
    //console.log('Book has been selected:', book.title)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}