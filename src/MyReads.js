import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Book from'./Book'


function  MyReads (props) {

//just for input rating (but not modified on server side)


// static propTypes={
// books: PropTypes.array.isRequired ,
// onUpdateShelf:PropTypes.func.isRequired,
// shelf:PropTypes.string.isRequired,
// title:PropTypes.string.isRequired,
// getBookShelf:PropTypes.func.isRequired
//                               };


// render(){
//destructuring
//const{books,onUpdateShelf,shelf,title,getBookShelf}=this.props 


 return(
         
 <div>
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">

            <ol className="books-grid">
                {   props.books.map((book,id)=>(
                 <li key={id}>
                <Book book={book} onUpdateShelf={props.onUpdateShelf} shelf={props.shelf} getBookShelf={props.getBookShelf} />
                   </li>
                    )//end of map Array
                    )//end of JSX expression
                } 
              </ol>
                   
                  </div>
                </div>
                
             
            
          </div>

)//end of return

 //}//end of render
}//end of class






export default MyReads
