import './App.css';
import Intro from './components/Intro.js';
import Forms from './components/Forms';
import Skills from './components/Skills';



function App() {
  return (
    <div>
      <Intro></Intro>
      <Forms/>
      <Skills name='Skills'/>
      <Skills name='Acheivments'/>
      <Skills name='Areas of Intrests'/>
    </div>
  );
}

export default App;
