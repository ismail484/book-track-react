import React, { Component} from 'react'
import './App.css'
import MyReads from'./MyReads'
import PropTypes from 'prop-types'




class BookShelf extends Component {

static propTypes={

books: PropTypes.array.isRequired ,
onUpdateShelf:PropTypes.func.isRequired,
selectedShelf:PropTypes.string.isRequired,
getBookShelf:PropTypes.func.isRequired,

                              };

render(){

const{books,onUpdateShelf,selectedShelf,getBookShelf}=this.props 


return(


<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">

  <MyReads  books={books.filter(book=>book.shelf==='read')}
                   shelf={selectedShelf}
                   title='Read'
                  onUpdateShelf={onUpdateShelf}
                   getBookShelf={getBookShelf} />
          
                                           

    
                   
         <MyReads  books={books.filter(book=>book.shelf==='wantToRead')}
                   shelf={selectedShelf}
                   title='Want to Read'
                   onUpdateShelf={onUpdateShelf}
                   getBookShelf={getBookShelf} />
          
                                      

                                          
     
                   
         <MyReads  books={books.filter(book=>book.shelf==='currentlyReading')}
                   shelf={selectedShelf}
                   title='Currently Reading'
                 onUpdateShelf={onUpdateShelf} 
                 getBookShelf={getBookShelf}/>  
                
                                       

 </div>
         </div>


)


}


}






    export default BookShelf