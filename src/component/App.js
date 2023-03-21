
import './App.css';
import React from 'react'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './component/Home';
import Download from './component/Download';
import Choosetemplate from './component/ChooseTemplate';
import Preview from './component/Preview';
import Navb from './component/Navbar';
import About from './component/About';
import { GetResume } from './component/GetResume';
import Details from './component/Details';
import Form from './component/Form';
import { Redirect, Route, Switch, } from 'react-router-dom';
import Alancontainer from './component/Alancontainer';

function App() {





     return (


          <>

               <Navb />

               <Alancontainer />
               <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path="/About" component={About} />
                    <Route exact path='/GetResume' component={GetResume} />
                    <Route exact path="/Choosetemplate" component={Choosetemplate} /> 
                    <Route exact path='/Details' component={Details} />
                    <Route exact path='/preview' component={Preview} />
                    <Route exact path='/Download' component={Download} />
                    <Route exact path='/form' component={Form} />

                    <Redirect to="/ " component={Home} />

               </Switch>



          </>
     );
}





export default App;
