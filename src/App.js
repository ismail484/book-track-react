import React, { Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from'./MyReads'
import Search from'./Search'
import {Route} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'



class BooksApp extends React.Component {
  
// constructor(props) {
//     super(props)
//     /*// this.hideSearchPage = this.hideSearchPage.bind(this)
//     // this.updateBook = this.updateBook.bind(this);
//     // this.getBookById = this.getBookById.bind(this);
//     this.searchShelf = this.searchShelf.bind(this)*/
//   }

state = {
  books :[],
  shelf:  'currentlyReading'
  }
//life cycle event to get data from external source
//it's going to return it as promise so we use (.then)
componentDidMount(){
//this function is invoked with contacts
  BooksAPI.getAll().then ((books)=>{
   console.log(books)
 this.setState({books:books})
  })
}

 updateShelf=(book,shelf)=>{
console.log (book)
console.log (shelf)
   this.setState({shelf: shelf})
   if(shelf){
      BooksAPI.update(book, shelf).then ((books)=>this.setState({
        books:books,
        })).catch(function(e){
          console.log('error',e)
        });
        }
  
   }
  
//    console.log (shelf)
//  BooksAPI.update(book, shelf)
//  this.setState((state)=>({
// // //get the current state of contacts then filter (remove) where state contacts ID(c.id) not equal Id of contact that was clicked,c:single contact from contacts 
//  book: state.books.map((b)=>b.id ==book.id)
 
//  }))





// if(shelf){
// BooksAPI.update(book, shelf).then(res=>{

//   console.log(res)})

// }



searchShelf = (query, maxResults) => {
    this.setState({query: query})
     
    if(query.trim() !== '') {
      BooksAPI.search(query, maxResults).then(res => this.setState({
        books: res
      })).catch(function(e){
          console.log('error',e)
        });
    } 
  }
   

  render() {


    const{books,onUpdateShelves}=this.props 
   
    return (
      <div className="app">
         <Route exact path="/" render={()=>(
                   
         <MyReads  books={this.state.books}
                   shelf={this.state.shelf}
                     onUpdateShelves={(book,shelf)=>{
                     this.updateShelf(book,shelf)}}/>
          )} />
     
  <Route path="/search" render= {({history})=>(
      <Search       books={this.state.books}
                    onSearchShelf={(query,maxResults)=>{
                      this.searchShelf(query,maxResults)
                    }} 
                     
                  onUpdateShelf={(book,shelf)=>{
                  this.updateShelf(book,shelf)
                     history.push('/')
                     }}  /> 
    )} />
         
   </div>
    )
  }
}




export default BooksApp
