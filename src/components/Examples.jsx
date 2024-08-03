import { useState } from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';

export default function Examples(){
    const [ selectedTopic, setSelectedTopic ] = useState('');
    function handleSelect(selectedButton){
        setSelectedTopic(selectedButton)
    }

    // Rendering condizionale con variabile
    // let tabContent = <p>Please select a topic.</p>
    // if(selectedTopic) {
    //   tabContent = <div id="tab-content">
    //   <h3>{EXAMPLES[selectedTopic].title}</h3>
    //   <p>{EXAMPLES[selectedTopic].description}</p>
    //   <pre>
    //     <code>{EXAMPLES[selectedTopic].code}</code>
    //   </pre>
    // </div>
    // }
    
    return (
    <Section id="examples" title='Examples'>
        <menu>
        <TabButton isSelected={selectedTopic === 'components' ? true : false} onClick={() => handleSelect('components')}>Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx' ? true : false} onClick={() => handleSelect('jsx')}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props' ? true : false} onClick={() => handleSelect('props')}>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state' ? true : false} onClick={() => handleSelect('state')}>State</TabButton>
        </menu>
        {/* {selectedTopic === '' && <p>Please select a topic.</p>} Sintassi alternativa all'operatore ternario */}
        {selectedTopic !== '' ? <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div> : <p>Please select a topic.</p>}
        {/* {tabContent} Rendering condizionale con variabile */}
    </Section>
    )
}