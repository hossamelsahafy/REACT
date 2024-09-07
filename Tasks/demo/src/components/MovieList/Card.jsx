export default function Card({ image, name, rate, onAddToWatchList }) {
  return (
    <div className="card">
      <img src={image} />
      <div className="card-content">
        <h2>{name}</h2>
        <p>IMDB Rating : {rate}</p>
        <button className="watch-btn" onClick={onAddToWatchList}>Add To Watch List</button>
      </div>
    </div>
  );
}
