function App({title}) {
  return (
    <div className="App">
      <h1>
        {title
          ? title
          : 'Default title'}
      </h1>
    </div>
  );
}

export default App;
