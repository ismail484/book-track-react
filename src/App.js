import React, { Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from'./MyReads'
import Search from'./Search'
import {Route} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import throttle from 'react-throttle-render'



class BooksApp extends React.Component {
  
constructor(props) {
       super(props);
     //  this.state={books:[]},
      // this.state={shelf:''}  
      this .searchShelf =this.searchShelf.bind(this)
      
      }

  state = {
    books :[],
   shelf:  '',

  }
//life cycle event to get data from external source
//it's going to return it as promise so we use (.then)
componentDidMount(){
//this function is invoked with books
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
  
searchShelf = (query) => {
    this.setState({query: query})
     
      if(query.trim() !== '') {
       BooksAPI.search(query).then(res => this.setState({
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
                    onSearchShelf={(query)=>{
                      this.searchShelf(query)
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
