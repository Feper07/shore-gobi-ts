  
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import './index.css';
  import App from './App';
  import PageRouterClothes from './components/PageRouterClothes';
  import { Routes, Route, useParams } from 'react-router-dom';
  import { BrowserRouter } from 'react-router-dom';

    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    );

  function Index() {
  return <Routes>
    <Route path="/"  element={<App />}/>
      <Route path="/items">
        <Route path=":itemId" element={<PageRouterClothes />} />
      </Route>
    </Routes>
  }
  
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <Index/>    
      </BrowserRouter>                
    </React.StrictMode>
  );

