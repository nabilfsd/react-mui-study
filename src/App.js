import HomePage from './Pages/Home';
import ServicePage from './Pages/Service';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/service">Service</Link>
          </li>
        </ul>

        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route exact path="/service" element={<ServicePage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
