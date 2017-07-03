import React, { Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from'./MyReads'
import Search from'./Search'
import {Route} from 'react-router-dom'



class BooksApp extends React.Component {
  
  state = {
  books :[],
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

 updateShelf(book,shelf){
     //this gives us promise back and sends us the contacts from the server
  BooksAPI.update (book,shelf).then(books=>{
     //then put it on state
   this.setState(state=>({
    //then reutun object from here
     books: books
     
   }))

   })
   }

searchShelf(query,maxResults){
     //this gives us promise back and sends us the books from the server
  BooksAPI.search (query,maxResults).then(function(){
    BooksAPI.getAll().then ((query)=>{
  this.setState(state=>({
 
   books: state.books.concat ([query])
  }))
   })

   })
}
   

  render() {
    const maxResults=15
    return (
      <div className="app">
         <Route exact path="/" render={()=>(
                   
         <MyReads  books={this.state.books}
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
