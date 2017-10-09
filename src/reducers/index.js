import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//root reducer
const rootReducer = combineReducers({
  //key goes for the app, values retrieved form the created reducers
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;