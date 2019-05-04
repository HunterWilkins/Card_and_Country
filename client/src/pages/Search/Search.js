import React, {Component} from "react";
// import {Link} from "react-router-dom";
import "../style.css";
import API from "../../utils/API";

import ResultBox from "../../components/ResultBox";

class Search extends Component {
    state = {
      books: [],
      title: "",
      authors: [],
      description: "",
      image: "",
      link: "",
      bookSearch: ""
    }

    handleInputChange = event => {
        let value = event.target.value;
        console.log("Value: " + value);
       
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };

      searchBooks = (query) => {
        API.getBooks(query).then(res =>{
          console.log(res.data);
            this.setState({
              books:res.data.items
        });
      }).catch(err =>console.log(err));
      }

      handleSave = book => {
        API.saveBook({
          title:book.volumeInfo.title,
          description: book.volumeInfo.description,
          link: book.volumeInfo.infoLink,
          authors: book.volumeInfo.authors,
          image: book.volumeInfo.imageLinks.smallThumbnail
        }).then(res => console.log("Successfully Saved into Database")).catch(err => console.log(err));
      }

      handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        
        this.searchBooks(this.state.bookSearch);

        this.setState({
          bookSearch: ""
        });
      
      }

      render(){
          return (
              <div>
                <h1>This is the Search Screen.</h1>
                <h2>I hate working with APIs! :D</h2>
                
                <form>
                  <input id = "search-box" name = "bookSearch" method = "get" value = {this.state.bookSearch} onChange = {this.handleInputChange} type = "text" placeholder = "Search"></input>
                  <button onClick = {this.handleFormSubmit} id = "submit-btn">Submit</button>
                </form>

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
                          <button onClick = {() => this.handleSave(book)}>Save</button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

          )
      }
}

export default Search;
