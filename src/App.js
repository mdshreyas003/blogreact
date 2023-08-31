import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostComponent from './components/PostComponent';

function App() {
  return (
    <div className="App">
      <PostList/>
      <PostComponent/>
    </div>
  );
}

export default App;
