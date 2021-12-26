import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProjectScreen from './screens/ProjectScreen';

function App() {
	return (
		<Router>
			<Header />
			<main>
				<Routes>
					<Route exact path="/" element={<HomeScreen />} />
					<Route path="/login" element={<LoginScreen />} />
					<Route path="/register" element={<RegisterScreen />} />
					<Route path="/projects/:id" element={<ProjectScreen />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
