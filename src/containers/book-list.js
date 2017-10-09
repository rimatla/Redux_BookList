import React, { Component } from 'react';
//React and Redux are two separate libraries, through the use of 'react-redux' library we are able to wire the two together
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'; //action creator
import { bindActionCreators } from 'redux'; //used to bind reducers and action creators

//A container is a react component that has a direct access to the state managed by redux
class BookList extends Component {
    renderList() {
        //map through books
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book) }
                    className="list-group-item">
                    {book.title}
                </li>
            )
        });
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}
//wire Redux and React together
const mapStateToProps = state => { //state contains the array of books and the active book
    //whatever is returned wil show up as props inside BookList
    return {
        books: state.books
    }
};

//anything returned from this function will end up as props on the BookList container.
const mapDispatchToProps = dispatch => {
    //whenever selectBook is called, pass results to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch)
};
//export the container and not the plain component above.
export default connect(mapStateToProps, mapDispatchToProps)(BookList) //connect takes a function and a component and produces a container
