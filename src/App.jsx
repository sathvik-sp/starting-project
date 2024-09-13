import { useState } from 'react';
import {CORE_CONCEPTS} from './data.js';
import Header from './Components/Header/Header.jsx';
import CoreConcept from './Components/CoreConcept.jsx';
import BtnComp from './Components/BtnComp.jsx';
import {EXAMPLES} from './data.js'
function App() {

  const [selectedStateValue, setSelectedState]=useState("components")

  function onSelectHandler(selectedButton){
    setSelectedState(selectedButton);
    //console.log(selectedButton);
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
          <BtnComp onSelect={() => onSelectHandler("components")}>Components</BtnComp>
          <BtnComp onSelect={() => onSelectHandler("jsx")}>JSX</BtnComp>
          <BtnComp onSelect={() => onSelectHandler("props")}>Props</BtnComp>
          <BtnComp onSelect={() => onSelectHandler("state")}>States</BtnComp>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedStateValue].title}</h3>
            <p>{EXAMPLES[selectedStateValue].description}</p>
            <code>{EXAMPLES[selectedStateValue].code}</code>
          </div>
        </section>
      </main>
    </div>

  );
}

export default App;
