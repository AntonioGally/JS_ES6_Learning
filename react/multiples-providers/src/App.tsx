import React from 'react';
import ResponseComments from './Components/ResponseComments/ResponseComments';
import ResponseConfiguration from './Components/ResponseConfiguration/ResponseConfiguration';
import "./styles/app.css";

const App: React.FC = () => {
  return (
    <>
      <ResponseComments />
      <ResponseConfiguration />
    </>
  );
}

export default App;
