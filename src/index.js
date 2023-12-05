
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyFormComponent from './MyFormComponent';
import ThankYouPage from './ThankYouPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyFormComponent />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
