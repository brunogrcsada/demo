import './App.css';
import Counter from './components/Counter';

const App = () => {
  let text = 'Hello World';
  let other = 'other';

  return (
    <div className="App">
      <h1>Hello world</h1>
      <h2>Hello Yulia</h2>

      <Counter text={text} other={other}/>
    </div>
  );
}

export default App;
