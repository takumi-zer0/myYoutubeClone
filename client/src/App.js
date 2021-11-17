import axios from 'axios'

function App() {

  axios.get('http://localhost:3001/')
    .then(res => console.log(res))
    .catch((err) => console.log(err))

  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
