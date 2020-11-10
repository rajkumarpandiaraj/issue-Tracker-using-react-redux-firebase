import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import SignedUp from './component/Auth/SignedUp';
import Signedin from './component/Auth/Signedin';
import All from './component/Layout/All'
import Opened from './component/Layout/Opened'
import Closed from './component/Layout/Closed';
import Issue from './component/Layout/Issue'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
            <Route path='/login' exact component={Signedin}/>
            <Route path='/signup' exact component={SignedUp}/>
            <Route path='/' exact component={All} />
            <Route path='/opened' exact component={Opened} />
            <Route path='/closed' exact component={Closed} />
            <Route path='/issue/:id' exact component={Issue} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
