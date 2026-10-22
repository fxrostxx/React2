import './App.css';
import Nav from './components/Nav'
import Header from './components/Header';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Nav navigation={props.navigation} />
    </div>
  );
}

export default App;
