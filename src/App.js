import Textdeco from './component/Textdeco';
import Header from './component/Header'
import Main from './component/Main';
import About from './component/About';
import Career from './component/Career';
import Project from './component/Project';
import Contact from './component/Contact';

import './App.css';

import { useRef } from 'react';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function App() {
return (
	<div className='wrap'>
		<Textdeco />
		<Header />
		<Main />
		<About />
		<Career />
		<Project />
		<Contact />
	</div>
);
}

export default App;
