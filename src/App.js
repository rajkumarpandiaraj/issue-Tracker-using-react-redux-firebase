import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Signedup from './component/Auth/Signedup';
import All from './component/Layout/All'
import Opened from './component/Layout/Opened'
import Closed from './component/Layout/Closed'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
            <Route path='/login' exact component={Signedup}/>
            <Route path='/' exact component={All} />
            <Route path='/opened' exact component={Opened} />
            <Route path='/closed' exact component={Closed} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
