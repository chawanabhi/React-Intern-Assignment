// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <h1 className="text-3xl font-bold text-blue-600 underline">
//         Hello Tailwind + Vite!
//       </h1>
//       <h1 className="text-blue-500">
//         Click on the Vite and React logos to learn more
//       </h1>
//     </>
//   )
// }

// export default App

import TopToolbar from "./components/TopToolbar";
import SpreadsheetTable from "./components/SpreadsheetTable";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold px-6 pt-6 pb-2">React Spreadsheet Prototype</h1>
   
      <div className="p-6">
        <SpreadsheetTable />
      </div>
    </div>
  );
}

export default App;
