import React from 'react';
import axios from "axios";
import Movie from "./movie";
import "./App.css";

class App extends React.Component{
  state = {
    isLoading : true,
    movies: []
  };

  getMovies = async ()=>{
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }

  componentDidMount(){
    this.getMovies();
  }
  
  // java script의 class 와 React Component의 class간 혼동에 의해 className을 사용함
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
      <div>
        {isLoading 
          ?(
            <div className="loader">
              <span className="loader__test">Loading...</span>
            </div>
          )
          : (
            <div className="movies">
              {movies.map(movie => 
             <Movie 
              key={movie.id} 
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres}/>)}
            </div>
          )
        }
      </div>
      </section>
    );
  }
}

export default App;
