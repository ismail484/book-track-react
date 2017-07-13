import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import * as MyReadsAPI from './MyReads'
import StarRatingComponent from 'react-star-rating-component';



//stateless functional component -just with return function
class   MyReads extends Component {

constructor(props){
super(props);

this.state = {
            rating: 1
        };

}

onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

static prpTypes={
books: PropTypes.array.isRequired ,
onUpdateShelf:PropTypes.func.isRequired,
shelf:PropTypes.string.isRequired,
title:PropTypes.string.isRequired,
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
const{books,onUpdateShelf,shelf,title}=this.props 

const { rating } = this.state;

 return(
         
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">

                  <ol className="books-grid">
                {books.map((book)=>(
                   <li key={book.id} >
                   <div className="book">
                    <div className="book-top">
                     <div className="book-cover" style={{ width: 128, height: 193,
                      backgroundImage:`url(${book.imageLinks.thumbnail || book.imageLinks })`   }}>
                                </div>
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
                    ))}
              </ol>
                   
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
