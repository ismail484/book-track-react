import React from 'react'
import './App.css'
import MyReads from './MyReads'
import { Link } from 'react-router-dom'


function BookShelf(props) {


    return (


      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">

          <MyReads
            books={props.books.filter(book => book.shelf === 'read')}
            shelf={props.selectedShelf}
            title="Read"
            onUpdateShelf={props.onUpdateShelf}
            getBookShelf={props.getBookShelf}
          />


          <MyReads
            books={props.books.filter(book => book.shelf === 'wantToRead')}
            shelf={props.selectedShelf}
            title="Want to Read"
            onUpdateShelf={props.onUpdateShelf}
            getBookShelf={props.getBookShelf}
          />


          <MyReads
            books={props.books.filter(book => book.shelf === 'currentlyReading')}
            shelf={props.selectedShelf}
            title="Currently Reading"
            onUpdateShelf={props.onUpdateShelf}
            getBookShelf={props.getBookShelf}
          />


          <div className="open-search">
            <Link to="/search" >Add a book</Link>
          </div>
        </div>
      </div>


    );


}


export default BookShelf;
