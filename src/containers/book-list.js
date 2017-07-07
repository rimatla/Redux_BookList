//create component to render a list of books
import React, { Component } from 'react';
//React and Redux are two separate libraries, through the use of 'react-redux' library we are able to wire the two together
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'; //action creator
import { bindActionCreators } from 'redux'; //used to bind reducers and action creators

//export default class BookList extends Component {
class BookList extends Component {
    renderList() {
        //map and create lists
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

//A container is a react component that has a direct access to the state managed by redux
function mapStateToProps(state) { //state contains the array of books and the active book
    //whatever is returned wil show up as props inside BookList
    return {
        books: state.books
    }

}

//anything returned from this function will end up as props on the BookList container.
function mapDispatchToProps(dispatch) {
    //whenever selectBook is called, pass results to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

//whenever we create a container, we want to export the container and not the plain component above.
//this is the connection between Redux and our component
export default connect(mapStateToProps, mapDispatchToProps)(BookList) //connect takes a function and a component and produces a container


//In general we want the most parent component that cares about a particular state to be a container.
//Only the most parent component that uses a particular piece of state needs to be connected to Redux.
//Whenever we forge a connection between a component and Redux, it turns that component into a container.