import React, {Component} from 'react'
import PropTypes from 'prop-types'
import StarRatingComponent from 'react-star-rating-component'


class Book extends Component {

    static propTypes={
        book: PropTypes.object.isRequired,
        onUpdateShelf: PropTypes.func.isRequired,
        shelf: PropTypes.string.isRequired,
        getBookShelf: PropTypes.func.isRequired,
    };

    state={rating: 1}

    onStarClick=(nextValue, prevValue, name) => {
        this.setState({rating: nextValue});
    }


    render() {
// destructuring
        const {onUpdateShelf, book, getBookShelf} = this.props


        return (
          <div className="book">
            <div className="book-top">
              {book.imageLinks && (
              <div
                className="book-cover"
                style={{ width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.thumbnail})` }}
              />) }
              <div className="book-shelf-changer">
                <select
                  value={getBookShelf(book)}
                  selected
                  onChange={event => onUpdateShelf(book, event.target.value)}
                  style={{color: '#00b200'}}
                >
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
            <div className="book-rate" >
              <StarRatingComponent
                name={book.id}
                starCount={5}
                value={book.averageRating}
                onStarClick={this.onStarClick}
              />

            </div>

          </div>


        )// end of return

    }// end of render
}// end of class


export default Book
