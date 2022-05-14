// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
	const [number, setNumber] = useState('');

	const addStringNumber = number => {
		const initNumber = setNumber(number);
		const addNumbers = initNumber + number;
	};
	return (
		<main>
			<header className='wrapper'>
				<section id='keypad'>
					<div className='font-top'>{number}</div>
					<div className='line'>
						<button onClick={() => setNumber(number + '1')}>1</button>
						<button onClick={() => setNumber(number + '2')}>2</button>
						<button onClick={() => setNumber(number + '3')}>3</button>
					</div>
					<div className='line'>
						<button onClick={() => setNumber(number + '4')}>4</button>
						<button onClick={() => setNumber(number + '5')}>5</button>
						<button onClick={() => setNumber(number + '6')}>6</button>
					</div>
					<div className='line'>
						<button onClick={() => setNumber(number + '7')}>7</button>
						<button onClick={() => setNumber(number + '8')}>8</button>
						<button onClick={() => setNumber(number + '9')}>9</button>
					</div>
					<div className='line'>
						<button>&#8592;</button>
						<button onClick={() => setNumber(number + '0')}>0</button>
						<button>&#x2713;</button>
					</div>
				</section>
			</header>
		</main>
	);
}

export default App;
