searchShelf = (query) => {
    this.setState({query:query})
     
      if(query.trim() !== '') {
        
       BooksAPI.search(query).then((res)=>
       {this.setState(state=>({books:state.books.concat(res)}))}
       
        ).catch(function(e){
            console.log('error',e)
          });
       }//end of if condition
  
    }//end of search function   
