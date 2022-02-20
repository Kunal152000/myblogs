import Navbar from './Navbar';
import Home from './Home';
import Create from './create';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import BlogDetails from './BlogDetails';
function App() {
  // we cannot use object and boolean functions here
  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/create' element={< Create/>}> </Route>
      <Route path='/blogs/:id' element={< BlogDetails/>}> </Route>
    </Routes>
  </Router>
  );
}

export default App;
