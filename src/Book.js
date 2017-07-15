import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import * as MyReadsAPI from './MyReads'
import StarRatingComponent from 'react-star-rating-component';



class  Book extends Component {




 render(){
//destructuring
const{books,onUpdateShelf,shelf,title}=this.props 
const { rating } = this.state;

 return(
         

                    <div className="book">
                        <div className="book-top">

                    {book.imageLinks &&(
                     <div className="book-cover" style={{ width: 128, height: 193,
                      backgroundImage:`url(${book.imageLinks.thumbnail })`   }}>
                                 </div> ) }
                      <div className="book-shelf-changer">
                              <select  value= {book.shelf} selected
                                       onChange= {event=>onUpdateShelf(book,event.target.value)}> 
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
                          <div  className="book-rate" >
                           <StarRatingComponent 
                                               name={book.id}
                                               starCount={5}
                                               value={book.averageRating}
                                               onStarClick={this.onStarClick.bind(this)}
                                                  />
                          
                           
                          </div>
                     
                      </div>
                  

)//end of return

 }//end of render
}//end of class






export default Book
