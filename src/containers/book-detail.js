import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        //prevent TypeError: Cannot read property 'title' of null (see reducer_active_book)
        if (!this.props.book) { //when we first load the app, props.book is null, so we enter this case here.
            return <div>Select a book to get started.</div>
        }
        return(
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail)