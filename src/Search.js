import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import {Link} from 'react-router-dom'
import Book from './Book'


class Search extends Component {

    static propTypes={
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired,
        onSearchShelf: PropTypes.func.isRequired,
        shelf: PropTypes.string.isRequired,
        getBookShelf: PropTypes.func.isRequired
    };

    state={
        query: '',
    }

// //update query string function
    updateQuery =(query) => {
        this.setState({query})
        this.props.onSearchShelf(query)
    }

    render() {

// object destructuring
        const {books, onUpdateShelf, shelf, getBookShelf} = this.props
        const {query} = this.state
// to return the match patern
        let showingBooks
        if (query) {

            const match = new RegExp(escapeRegExp(query), 'i')
            showingBooks = books.filter(book => match.test(book.title) || match.test(book.authors))

        } else {
            showingBooks = []
        }
        return (

          <div className="list-books">
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                  <input
                    type="text"
                    placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={event => this.updateQuery(event.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="search-books-results">
              <ol className="books-grid">
                {showingBooks.map((book, id) => (
                  <li key={id}>
                    <Book
                      book={book}
                      onUpdateShelf={onUpdateShelf}
                      shelf={shelf}
                      getBookShelf={getBookShelf}
                    />
                  </li>
            ))}
              </ol>

            </div>
          </div>

        )// end of return
    }// end of render
}// end of class


export default Search
