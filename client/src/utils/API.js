import axios from "axios";

// API KEY: AIzaSyC7x-WQXkZ5As0X7r9aOYa3OcNkEm4uZ0g
// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getBooks: function(query) {
    return axios.get("/api/search/" + query);
  },

  searchAPI: function(query){
    return axios.get("/api/books/" + query.title);
  },

  deleteBook: function(id) {
    console.log("Book Deleted.");
    return axios.delete("/api/books/" + id);
  },

  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }

};
