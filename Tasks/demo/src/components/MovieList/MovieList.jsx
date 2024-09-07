import { useEffect, useState } from "react";
import "./MovieList.css";
import Card from "./Card";
import {WatchList} from "../WatchList/WatchList";

const movies = [
  {
    name: "The Shawshank Redemption",
    image: "shawshank.jpg",
    imdbRating: 9.3,
    review:
      "An inspiring story of hope, friendship, and perseverance set within the walls of Shawshank prison.",
    watched: false,
  },
  {
    name: "The Godfather",
    image: "godfather.jpg",
    imdbRating: 9.2,
    review:
      "A powerful tale of a mafia family's rise and near fall, balanced between crime and honor.",
    watched: false,
  },
  {
    name: "The Dark Knight",
    image: "darkknight.jpg",
    imdbRating: 9.0,
    review:
      "An intense superhero film that blends action, drama, and moral dilemmas with a stellar performance from Heath Ledger.",
    watched: false,
  },
  {
    name: "Pulp Fiction",
    image: "pulp.jpg",
    imdbRating: 8.9,
    review:
      "A stylistically bold and nonlinear narrative that blends dark humor, crime, and unforgettable dialogue.",
    watched: false,
  },
  {
    name: "Forrest Gump",
    image: "pulp.jpg",
    imdbRating: 8.8,
    review:
      "A heartfelt tale of a simple man who inadvertently influences major historical events.",
    watched: false,
  },
  {
    name: "Inception",
    image: "inception.jpg",
    imdbRating: 8.8,
    review:
      "A mind-bending exploration of dreams and reality, featuring stunning visuals and a complex narrative.",
    watched: true,
  },
  {
    name: "Fight Club",
    image: "fight.jpg",
    imdbRating: 8.8,
    review:
      "A gritty and satirical look at consumerism, masculinity, and identity, with a twist ending.",
    watched: true,
  },
  {
    name: "The Matrix",
    image: "pulp.jpg",
    imdbRating: 8.7,
    review:
      "A groundbreaking sci-fi film that explores themes of reality, control, and the human mind.",
    watched: false,
  },
  {
    name: "The Lord of the Rings: The Return of the King",
    image: "pulp.jpg",
    imdbRating: 9.0,
    review:
      "An epic conclusion to a legendary trilogy, full of breathtaking battles and emotional farewells.",
    watched: false,
  },
  {
    name: "Star Wars: Episode V - The Empire Strikes Back",
    image: "star.jpg",
    imdbRating: 8.7,
    review:
      "A dark and thrilling chapter in the Star Wars saga, known for its iconic twists and character development.",
    watched: true,
  },
];

export function MovieList({ setLength, search }) {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [isOpnened, setIsOpened] = useState(true);
  const [watchList, setWatchList] = useState([]);
  useEffect(() => {
    setLength(movies.length);
  }, [setLength]);
  useEffect(() => {
    if (search) {
      const filtered = movies.filter((currentValue) =>
        currentValue.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredMovies(filtered);
      setLength(filtered.length);
    } else {
      setFilteredMovies(movies);
      setLength(movies.length);
    }
  }, [search, setLength]);
  function handleOpen() {
    setIsOpened(!isOpnened);
  }
  function handleAddToWatchList(movie) {
    setWatchList((prevList) => {
      if (prevList.some((m) => m.name === movie.name)) {
        return prevList;
      }
      return [...prevList, movie];
    });
  }
  return (
    <div className="movie-list-container">
      <div className="movie-list">
        <i className="fa-solid fa-minus show" onClick={handleOpen}></i>

        <div className="movies">
          {isOpnened && (
            <div>
              {filteredMovies.map((movie) => (
                <Card
                  image={movie.image}
                  name={movie.name}
                  rate={movie.imdbRating}
                  key={movie.name}
                  onAddToWatchList={() => handleAddToWatchList(movie)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <WatchList watchList={watchList} />
    </div>
  );
}
