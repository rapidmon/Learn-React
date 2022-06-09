import Time from './time'
import Hello from './hello'
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';

function App() {
  const user = {
    login : true,
    id : 'ehhwll@hanmail.net',
    nickname : 'kevin'
  }
  return (
    <div className="App">
      {user.login?<Homepage id={user.id} nickname={user.nickname} />:<Login />}
      <Hello />
      <Time />
    </div>
  );
}

export default App;
