//this is going to contain all the actions creators

//select book
export function selectBook(book) {
    //console.log('Book has been selected:', book.title)

    //return am object w/ a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}