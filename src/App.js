import './App.css';
import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Planner from './pages/Planner';
import Open from './pages/Open'

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/planner/:id" component={ Planner } />
        <Route exact path="/" component={ Open }/>
      </Switch>
   </Provider>
  );
}

export default App;
