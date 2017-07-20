import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import {Route} from 'react-router-dom'
import BookShelf from './BookShelf'
import {throttle} from 'throttle-debounce'


class BooksApp extends React.Component {

    state ={
        books: [],
        selectedShelf: '',
        searchResults: []
    }
// life cycle event to get data from external source
// it's going to return it as promise so we use (.then)
    componentDidMount() {
// this function is invoked with books
        BooksAPI.getAll().then((books) => {
            console.log(books)
            this.setState({books})
        })
    }

// update selected shelf
    updateShelf=(book, shelf) => {
// console.log (book)
        this.setState({selectedShelf: shelf})
 // this.setState((state,props){selectedShelf: shelf})
        if (book.shelf !== shelf) {
            book.shelf = shelf
            BooksAPI.update(book, shelf).then((res) => {
                this.setState((state, props) => ({
                    books: state.books.filter(b => b.id !== book.id).concat([book]) }))
            }
     )
        } else return book

        console.log(book)
        console.log(this.state.books)
    }
    getBookShelf = (book) => {
  // find a book in our state array that matches the provided book's
        const existingBook = this.state.books.find(b => b.id === book.id)

  // if a book is found, return the shelf name => 'read', 'currentlyReading', etc
        if (existingBook) return existingBook.shelf

  // no book found? return the shelf provided with the book
        return book.shelf
    }


// search for requered book
    searchShelf = throttle(100, (query) => {
        this.setState({query})
        if (query.trim() !== '') {

            BooksAPI.search(query).then((res) => {
                this.setState((state, props) => ({searchResults: res }))
                console.log(res)
            }

       ).catch((e) => {
           console.log('error', e)
       });
            console.log(this.state.searchResults)
        }// end of if condition

    })// end of search function


    render() {

// define shelf values
// var selectedShelf=['none','wantToRead','read','currentlyReading']

        return (
          <div className="app">

            <Route
              exact
              path="/"
              render={() => (

                <BookShelf
                  books={this.state.books}
                  onUpdateShelf={this.updateShelf}
                  selectedShelf={this.state.selectedShelf}
                  getBookShelf={this.getBookShelf}
                />

         // end of the route (\) which include three component
                                 )}
            />

            <Route
              path="/search"
              render={() => (
                <Search
                  books={this.state.searchResults}
                  shelf={this.state.selectedShelf}
                  onSearchShelf={(query) => {
                      this.searchShelf(query)
                  }}
                  onUpdateShelf={(book, shelf) => {
                      this.updateShelf(book, shelf)
                  }}
                  getBookShelf={this.getBookShelf}
                />

    )}
            />


          </div>
        )// end of return
    }// end of render
}// end of class


export default BooksApp
