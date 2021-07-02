import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Nav from './Components/Layout/Nav';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home'
import Services from './Components/Pages/Services';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NotFound from './Components/Pages/NotFound';
import AddUser from './Components/User/AddUser';
import './App.css'
import EditUser from './Components/User/EditUser';
import ViewUser from './Components/User/ViewUser';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/user/adduser" component={AddUser}/>
        <Route exact path="/user/edit/:id" component={EditUser} />
        <Route exact path="/user/:id" component={ViewUser} />
        <Route component={NotFound}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
