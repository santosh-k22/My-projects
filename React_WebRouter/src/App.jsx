// // import React from 'react';
// import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
// import "./App.css";

// import Login from "./Login";
// import Signup from "../Signup";

// function App() {
//     return (
//         <div className="wrapper">
//             <h1>My app</h1>
//             <BrowserRouter>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/login">Login</Link>
//                         </li>
//                         <li>
//                             <Link to="/signup">SignUp</Link>
//                         </li>
//                     </ul>
//                 </nav>
//                 <Switch>
//                     <Route path="/login">
//                         <Login />
//                     </Route>
//                     <Route path="/signup">
//                         <Signup />
//                     </Route>
//                 </Switch>
//             </BrowserRouter>
//         </div>
//     );
// }

// export default App;

// import React from 'react'
import "./App.css";
import RouteMe from "./Routes";
function App() {
    return (
        <div className="App">
            <RouteMe />
        </div>
    );
}
export default App;
