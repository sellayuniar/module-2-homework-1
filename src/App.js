import './App.css';
import data from "./single-sample"


// const album = () => {
  
// };

// const songTitle = () => {

// }

// const songArtist = () => {
  
// }

function App() {
  

  return (
      <div className="App">
      
      <img src={data.album.images[1].url} alt="yuhu" />
      <h2>{data.album.name}</h2>
      <h3> {data.album.artists[0].name}</h3>
    
      <button>Select</button>
    </div>
   
  );
}
  
export default App;
