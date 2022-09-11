import React from 'react';
import ReactDOM from "react-dom";
import { Summary } from './components/Summary';

let names = ["Bob", "Alice", "Dora"];

const reverseNames = () => {
  names.reverse();
  ReactDOM.render(<App />, document.getElementById('root'));
};

const promoteName = (name) => {
  names = [name, ...names.filter(val => val !== name)];
  ReactDOM.render(<App />, document.getElementById('root'));
};

function App() {
  return (
    <table className="table table-sm table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Letters</th>
        </tr>
      </thead>
      <tbody>
        {
          names.map((name, index) => 
            <tr key={ name }>
              <Summary index={ index } name={ name } reverseCallback={ reverseNames } promoteCallback={ promoteName } />
            </tr>
        )}
      </tbody>
    </table>
  );
}

export default App;
