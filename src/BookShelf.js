import React, { Component} from 'react'
import './App.css'
import MyReads from'./MyReads'
import PropTypes from 'prop-types'




class BookShelf extends React.Component {

static propTypes={

books: PropTypes.array.isRequired ,
onUpdateShelf:PropTypes.func.isRequired,
selectedShelf:PropTypes.string.isRequired,

                              };

render(){

const{books,onUpdateShelf,selectedShelf}=this.props 


return(


<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">

  <MyReads  books={books.filter(book=>book.shelf==='read')}
                   shelf={selectedShelf}
                   title='Read'
                  onUpdateShelf={onUpdateShelf} />
          
                                           

    
                   
         <MyReads  books={books.filter(book=>book.shelf==='wantToRead')}
                   shelf={selectedShelf}
                   title='Want to Read'
                   onUpdateShelf={onUpdateShelf} />
          
                                      

                                          
     
                   
         <MyReads  books={books.filter(book=>book.shelf==='currentlyReading')}
                   shelf={selectedShelf}
                   title='Currently Reading'
                 onUpdateShelf={onUpdateShelf} />  
                
                                       

 </div>
         </div>


)


}


}






    export default BookShelf