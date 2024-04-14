import React from 'react'
import './App.css'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const App = () => {
	const ref = useRef();
	useEffect(() => {
		const el = ref.current;
		gsap.fromTo(el, { scale: 0 }, {
			scale: 1.4, duration: 1, scrollTrigger: {
				trigger: el
			}
		})
	}, [])
	return (
		<div className='places'>
			<div style={{ height: '40vh' }}></div>
			<img ref={ref}
				src=
"https://th.bing.com/th/id/OIP.jfGZMIR7AJEq5RjHj3KUXQAAAA?w=293&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
				alt="heeeeee" />
		</div>
	)
}

export default places;
