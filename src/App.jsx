import {CORE_CONCEPTS} from './data.js';
import Header from './Components/Header/Header.jsx';
import CoreConcept from './Components/CoreConcept.jsx';
import BtnComp from './Components/BtnComp.jsx';
function App() {

  function onSelectHandler(selectedButton){
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <section id="examples">
          <menu>
          <BtnComp onSelect={() => onSelectHandler("Componenets")}>Components</BtnComp>
          <BtnComp onSelect={() => onSelectHandler("JSX")}>JSX</BtnComp>
          <BtnComp onSelect={() => onSelectHandler("Props")}>Props</BtnComp>
          <BtnComp onSelect={() => onSelectHandler("States")}>States</BtnComp>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>

  );
}

export default App;
