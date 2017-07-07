import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import * as MyReadsAPI from './MyReads'



//stateless functional component -just with return function
class   MyReads extends Component {

constructor(props){
super(props);


}

static prpTypes={
books: PropTypes.array.isRequired ,
onUpdateShelves:PropTypes.func.isRequired,
shelf:PropTypes.string.isRequired
//shelf:PropTypes.string.isRequired
//onDeleteContact:PropTypes.func.isRequired
    };
 state={
        query: '',
      
    }



    // updatequery =(shelf)=>{
    //  this.setState({shelf})
    //  this.props.onUpdateShelves(shelf)
    // }
//  //when the state in input field changed(we write something)
//  //then onChange: will invoke this function to apply this changes
//  updateQuery =(query)=>{
//     this.setState({query:query.trim()})
//  }

//  clearQuery = ()=>{
//      this.setState({query:''})

//  }


 render(){
//destructuring
const{books,onUpdateShelves,shelf}=this.props 


let shelfBooks
  
  if(shelf){
   // console.log(shelf)
  const match = new RegExp (escapeRegExp(shelf),'i')

  
   if (shelf === "wantToRead" ){

   shelfBooks=books.filter(book=>match.test(book.shelf))  
  // console.log(shelfBooks)
  // console.log(shelf)
   }else if (shelf === "Read" ){
   shelfBooks=books.filter(book=>match.test(book.shelf))     
  }else if (shelf === "currentlyReading" ){
       shelfBooks=books.filter(book=>match.test(book.shelf))  
          }
   }else{
     shelfBooks=books
   }
 return(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">

                  <ol className="books-grid">
                {shelfBooks.map((book)=>(
                   <li key={book.id} >
                   <div className="book">
                    <div className="book-top">
                     <div className="book-cover" style={{ width: 128, height: 193,
                      backgroundImage:`url(${book.imageLinks})`   }}>
                                </div>
                      <div className="book-shelf-changer">
                              <select  value= {this.state.shelf} selected
                                       onChange= {event=>this.onUpdateShelves(book,event.target.value)}> 
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading" >Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                             </div> 
                           </div> 
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                       
                      </div>
                   </li>
                    ))}
              </ol>
                   
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                   

         <ol className="books-grid">
                {shelfBooks.map((book)=>(
                   <li key={book.id} >
                   <div className="book">
                    <div className="book-top">
                     <div className="book-cover" style={{ width: 128, height: 193,
                      backgroundImage:`url(${book.imageLinks})`   }}>
                                </div>
                      <div className="book-shelf-changer">
                              <select  value= {this.state.shelf} selected
                                       onChange= {event=>this.onUpdateShelves(book,event.target.value)}> 
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading" >Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                             </div> 
                           </div> 
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                       
                      </div>
                   </li>
                    ))}
          </ol>


                    
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    
   <ol className="books-grid">
                {shelfBooks.map((book)=>(
                   <li key={book.id} >
                   <div className="book">
                    <div className="book-top">
                     <div className="book-cover" style={{ width: 128, height: 193,
                      backgroundImage:`url(${book.imageLinks})`   }}>
                                </div>
                      <div className="book-shelf-changer">
                              <select  value= {this.state.shelf} selected
                                       onChange= {event=>this.onUpdateShelves(book,event.target.value)}> 
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading" >Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                             </div> 
                           </div> 
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                       
                      </div>
                   </li>
                    ))}
           </ol>

                  
              
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search" >Add a book</Link>
            </div>
          </div>

)

 }
}






export default MyReads
