import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../style.css";

import API from "../../utils/API";

import ResultBox from "../../components/ResultBox";

class Saved extends Component {
    state = {
      books:[]
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

  searchBooks = query => {
      API.getBooks(query)
        .then(res => {
          this.setState({
            books: res.data.items
          });
        })
        .catch(err => console.log(err));
    }

    loadBooks = () => {
      API.getBooks({}).then(res => {
        console.log(res);
        this.setState({books:res.data})
      })
    }

      render(){
          return (
              <div id ="home-screen">
                <header>
                <h1>Welcome to BOOK.SEARCH!</h1>
                <hr></hr>
                <button><Link className = "button" to="/search">Head to Search Page</Link></button>
                </header>
                <h2>Saved Books</h2>
                <div>
                  {this.state.books.map(book => {
                    return(
                      <div>
                        <ResultBox 
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        link={book.volumeInfo.infoLink}
                        image={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/200"}
                        />
                        <div>
                          <button onClick = {() => this.handleDelete(book)}>Delete</button>
                        </div>
                      </div>
                    )
                  })}
                
                </div>
              
              </div>
          )
      }
}

export default Saved;
