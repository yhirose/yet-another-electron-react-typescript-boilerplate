import React from 'react';
import logo from './logo.svg';
import './App.css';

const { interop } = (window as any);

const App: React.FC = () => {
  function ToggleDevTools() {
    if (interop) {
      return <button onClick={interop.toggleDevTools}>Toggle DevTools</button>;
    }
    return null;
  }

  function ToggleFullScreen() {
    function toggle() {
      const el = (document.getElementById('root') as any);
      if (el) {
        if ((document as any).webkitIsFullScreen) {
          (document as any).webkitExitFullscreen();
        } else {
          el.webkitRequestFullScreen();
        }
      }
    }

    function onClick() {
      if (interop) {
        interop.executeJavaScriptWithUserGesture(toggle);
      } else {
        toggle();
      }
    }

    return <button onClick={onClick}>Toggle Full Screen</button>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          <ToggleDevTools /> <ToggleFullScreen />
        </p>
        <p>
          Running on <b>{interop ? interop.platform : 'browser'}</b>.
        </p>
      </header>
    </div>
  );
}

export default App;

