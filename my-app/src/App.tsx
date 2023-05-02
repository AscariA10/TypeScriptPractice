import './App.css';

function App() {
   const hello: string = 'Hello';

   function greetings(person: string) {
      return hello + ' ' + person;
   }

   return <div>{greetings('world')}</div>;
}

export default App;
