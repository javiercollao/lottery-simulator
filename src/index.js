import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Use HashRouter and Routes
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/kino.css';
import Kino from './routes/Kino';
import Generator from './routes/Generator';
import DataProvider from './context/DataProvider';

const App = () => {
  return (
    <React.StrictMode>
      <DataProvider>
        <HashRouter>
          <Routes> {/* Use Routes instead of Switch */}
            <Route path="/" element={<Kino />} /> {/* Use "element" instead of "component" */}
            <Route path="/generator" element={<Generator />} /> {/* Use "element" instead of "component" */}
            <Route path="*" element={<h1>Error</h1>} /> {/* Fallback route for 404 */}
          </Routes>
        </HashRouter>
      </DataProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
