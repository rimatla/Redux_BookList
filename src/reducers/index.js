import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';


//create app state
const rootReducer = combineReducers({
  //wire reducers
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;

