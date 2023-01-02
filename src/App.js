import './App.css';
import Intro from './components/Intro.js';
import Forms from './components/Forms';
import Skills from './components/Skills';
import Education from './components/Education';
import Space from './components/Space';
import Experience from './components/Experience';



function App() {
  return (
    <div>
      <Intro></Intro>
      <Forms/>
      <Experience name = 'Experience'placeholder ='Company Name'/>
      <Experience name = 'Projects' placeholder ='Project Name'/>
      <Skills name='Skills'/>
      <Skills name='Acheivments'/>
      <Skills name='Areas of Intrests'/>
      <Education/>
      <Space/>
    </div>
  );
}

export default App;
