import './App.css';
import Home from './components/home';
import Menu from './components/menu';
import SendEmail from './components/sendEmail';
import SendSMS from './components/sendSMS';

import Context from './context/context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (

    <Context>
      <BrowserRouter>

      <Menu/>

      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sendemail' element={<SendEmail/>}/>
          <Route path='/sendsms' element={<SendSMS/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
      
    </Context>
  );
}

export default App;
