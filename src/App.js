import React, { Component } from 'react';

import Header from './components/Header';
import './styles.css';



const App = () => (
	<div className='App'>
		<Header />
	</div>
);



// class App extends Component {
//   render() {
//     return (
      
//       // Utiliza-se className no lugar de class, pois class e utilizado pelo react
      
//       <div className="App">
//         <h1>Hello world</h1>
//       </div>
//     );
//   }
// }

export default App;
