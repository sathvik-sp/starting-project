import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './Components/Header/Header.jsx';
import CoreConcept from './Components/CoreConcept.jsx';
import BtnComp from './Components/BtnComp.jsx';
import { EXAMPLES } from './data.js'
function App() {

  const [selectedStateValue, setSelectedState] = useState("")

  function onSelectHandler(selectedButton) {
    setSelectedState(selectedButton);
    //console.log(selectedButton);
  }

  let tabContent= <p>select any topic</p> ;

  if (selectedStateValue){
    tabContent=
    (<div id="tab-content">
    <h3>{EXAMPLES[selectedStateValue].title}</h3>
    <p>{EXAMPLES[selectedStateValue].description}</p>
    <code>{EXAMPLES[selectedStateValue].code}</code>
  </div>);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title}{...item}/>
            ))}
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <section id="examples">
          <menu>
            <BtnComp isSelected = {selectedStateValue=="components"} onSelect={() => onSelectHandler("components")}>Components</BtnComp>
            <BtnComp isSelected = {selectedStateValue=="jsx"} onSelect={() => onSelectHandler("jsx")}>JSX</BtnComp>
            <BtnComp isSelected = {selectedStateValue=="props"} onSelect={() => onSelectHandler("props")}>Props</BtnComp>
            <BtnComp isSelected = {selectedStateValue=="state"} onSelect={() => onSelectHandler("state")}>States</BtnComp>
          </menu>
         {tabContent}
        </section>
      </main>
    </div>

  );
}

export default App;
