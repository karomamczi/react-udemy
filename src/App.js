import './App.css';

function App() {
  const button = { text: 'Click me!' };
  const labelText = 'Enter name:';

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text"></input>
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {button.text}
      </button>
    </div>
  );
}

export default App;
