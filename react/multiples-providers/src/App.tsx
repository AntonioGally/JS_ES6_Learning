import React from 'react';
import ResponseComments from './Components/ResponseComments/ResponseComments';
import ResponseConfiguration from './Components/ResponseConfiguration/ResponseConfiguration';
import ResponseCommentsProvider from './Providers/ResponseCommentsProvider';
import "./styles/app.css";

const App: React.FC = () => {
  return (
    <>
      <ResponseCommentsProvider element={ResponseComments} />
      <ResponseConfiguration />
    </>
  );
}

export default App;
