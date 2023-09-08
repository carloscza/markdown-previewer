import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer.js';


class App extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {

    return(
      <div className='container-fluid App'>
          <Editor />
          <Previewer />
      </div>
    );
  }
}

export default App;