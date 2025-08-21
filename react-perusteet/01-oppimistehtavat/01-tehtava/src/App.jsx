const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const nimi = "Pekka";
  const ika = 20;
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name="Pekka" age={30 + 12} />
      <Hello name={nimi} age={ika} />
    </div>
  );
};

export default App;
