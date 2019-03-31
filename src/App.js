import React, { Component } from 'react';

import Header from './components/Header';
import Main from './pages/main';
import './styles.css';



const App = () => (
	<div className='App'>
		<Header />
		<Main />
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
