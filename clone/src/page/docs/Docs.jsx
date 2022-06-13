import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddReact from './Addreact';
import GettingStarted from './Gettingstarted';

function Docs() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/docs/getting_started" exact component={GettingStarted}/>
          <Route path="/docs/Add_react_to_a_website" component={AddReact}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Docs;