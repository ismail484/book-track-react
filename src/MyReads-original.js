import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import * as MyReadsAPI from './MyReads'
import StarRatingComponent from 'react-star-rating-component';



class  MyReads extends Component {

//just for input rating (but not modified on server side)
onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
                                        }

static propTypes={
books: PropTypes.array.isRequired ,
onUpdateShelf:PropTypes.func.isRequired,
shelf:PropTypes.string.isRequired,
title:PropTypes.string.isRequired,
                              };
 state={
        query: '' ,
        rating: 1
    }


 render(){
//destructuring
const{books,onUpdateShelf,shelf,title}=this.props 
const { rating } = this.state;


 return(
         
 <div>
    <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">

            <ol className="books-grid">
                { books.map((book,id)=>(
                <li key={id}>
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
                   </li>
                    )//end of map Array
                    )//end of JSX expression
                } 
              </ol>
                   
                  </div>
                </div>
                
             
            <div className="open-search">
              <Link to="/search" >Add a book</Link>
            </div>
          </div>

)//end of return

 }//end of render
}//end of class






export default MyReads
