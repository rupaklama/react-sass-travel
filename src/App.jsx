import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import NotFound from './pages/not-found/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />

        {/* must be at the end of the list */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
