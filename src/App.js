import React, { Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from'./MyReads'
import Search from'./Search'
import {Route} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'




class BooksApp extends React.Component {
  
  state = {
    books :[],
    selectedShelf: 'none',
  }
//life cycle event to get data from external source
//it's going to return it as promise so we use (.then)
componentDidMount(){
//this function is invoked with books
  BooksAPI.getAll().then ((books)=>{
  console.log(books)
 this.setState({books:books,currBooks:books})
  })
}

//update selected shelf
updateShelf=(book,shelf)=>{
//console.log (book)
  this.setState({selectedShelf: shelf})
   if(book.shelf!== shelf){
      book.shelf = shelf
     BooksAPI.update(book, shelf).then((res)=>
     { this.setState(state => ({ books: state.books.filter(b => b.id !== book.id).concat([ book ]) }))}
     )
      }else{
      book=book
      }
console.log(book)
 } 
   
//search for requered book
searchShelf = (query) => {
    this.setState({query:query})
     
      if(query.trim() !== '') {
        
       BooksAPI.search(query).then((res)=>
       {this.setState(state=>({books:state.books.concat(res)}))}
       
        ).catch(function(e){
            console.log('error',e)
          });
       }//end of if condition
  
    }//end of search function   


render() {

//define shelf values
var selectedShelf=['none','wantToRead','read','currentlyReading']
   
  return (
      <div className="app">

   <Route exact path="/" render={()=>(
<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">

      
         <Route exact path="/" render={()=>(

                   
         <MyReads  books={this.state.books.filter(book=>book.shelf==='read')}
                   shelf={this.state.selectedShelf}
                   title='Read'
                  onUpdateShelf={(book,shelf)=>{
                  this.updateShelf(book,shelf)}} />
          
                                              )} /> 

        <Route exact path="/" render={()=>(
                   
         <MyReads  books={this.state.books.filter(book=>book.shelf==='wantToRead')}
                   shelf={this.state.selectedShelf}
                   title='Want to Read'
                  onUpdateShelf={(book,shelf)=>{
                  this.updateShelf(book,shelf)}} />
          
                                          )} />

                                          
     <Route exact path="/" render={()=>(
                   
         <MyReads  books={this.state.books.filter(book=>book.shelf==='currentlyReading')}
                   shelf={this.state.selectedShelf}
                   title='Currently Reading'
                  onUpdateShelf={(book,shelf)=>{
                  this.updateShelf(book,shelf)}} />  
                
                                          )} />

            </div>
         </div>
         //end of the route (\) which include three component
                                 )} /> 
               
  <Route path="/search" render= {()=>(
      <Search       books={this.state.books.filter(book=>book.shelf==='none')}
                    shelf={this.state.selectedShelf}
                    onSearchShelf={(query)=>{
                      this.searchShelf(query)  }} 
                  onUpdateShelf={(book,shelf)=>{
                  this.updateShelf(book,shelf)}}  />

    )} />

                
   </div>
    )//end of return
  }//end of render
}//end of class




export default BooksApp
