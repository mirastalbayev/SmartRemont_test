// import { Outlet, Link } from "react-router-dom";

// export default function App() {
//   return (
//     <div>
//       <h1>BAoooo</h1>
//       <nav
//         style={{
//           borderBottom: "solid 1px",
//           paddingBottom: "1rem"
//         }}
//       >
//         <Link to="/invoices">Invoices</Link> | {""}
//         <Link to="/expenses">Expenses</Link>
//       </nav>
//       <Outlet />
//     </div>
//   );
// }

import React, { useState } from 'react';

import ControlledSelect from './components/routes/ControlledSelect/ControlledSelect';

export const App = () => {
    const [value, setValue] = useState('react'); // selected option
    const options = [
        {label: 'React',      value: 'react'},
        {label: 'JavaScript', value: 'js'   },
        {label: 'TypeScript', value: 'ts'   }
    ];
    const handleChange = (value) => {
        console.log(`value: ${value}`);
        setValue(value);
    };
    return (
        <div>
          <label>Technology:</label>
          <ControlledSelect value={value} options={options} onChange={handleChange} />
        </div>
    );
};

export default App;
