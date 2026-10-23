import './App.css';
import Nav from './components/Nav'
import Header from './components/Header';
import Article from './components/Article';
import data from './db.json';

function App(props) {
  let db = data.people;
  return (
    <div className="App">
      <Header />
      <Nav navigation={props.navigation} />
      <Article db={db} />
    </div>
  );
}

export default App;
