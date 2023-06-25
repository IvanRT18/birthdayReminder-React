import { useState } from "react";
import data from "./data";
import Person from "./Person";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  console.log(people);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays</h3>
        <List people={people} />
        <button className="btn btn-block" onClick={() => setPeople([])}>
          Clear all
        </button>
      </section>
    </main>
  );
};
export default App;
