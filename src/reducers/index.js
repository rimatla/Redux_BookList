import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//create app state
const rootReducer = combineReducers({
  //wire reducer
    books: BooksReducer
});

export default rootReducer;

