import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Book from'./Book'


class  MyReads extends Component {

//just for input rating (but not modified on server side)


static propTypes={
books: PropTypes.array.isRequired ,
onUpdateShelf:PropTypes.func.isRequired,
shelf:PropTypes.string.isRequired,
title:PropTypes.string.isRequired,
getBookShelf:PropTypes.func.isRequired
                              };
 state={
        query: '' ,
    }


 render(){
//destructuring
const{books,onUpdateShelf,shelf,title,getBookShelf}=this.props 


 return(
         
 <div>
    <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">

            <ol className="books-grid">
                {   books.map((book,id)=>(
                 <li key={id}>
                <Book book={book} onUpdateShelf={onUpdateShelf} shelf={shelf} getBookShelf={getBookShelf} />
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
