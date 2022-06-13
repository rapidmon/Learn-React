import './App.css';
import {createGlobalStyle} from 'styled-components';
import reset from "styled-reset";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../src/page/home/Home'
import Blog from '../src/page/blog/Blog'
import Community from '../src/page/community/Community'
import Docs from '../src/page/docs/Docs'
import Tutorial from '../src/page/tutorial/Tutorial'
import Versions from '../src/page/versions/Versions'
import Languages from '../src/page/languages/Languages'
import Navbar from '../src/components/navbar/Navbar'

const Globalstyle = createGlobalStyle`
  ${reset}
`

function App() {
  return (
    <>
      <BrowserRouter basename='/Learn-React'>
        <Globalstyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/docs" component={Docs}/>
          <Route path="/tutorial" component={Tutorial}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/community" component={Community}/>
          <Route path="/versions" component={Versions}/>
          <Route path="/languages" render={() => <Languages />}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
