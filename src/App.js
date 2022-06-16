// import './App.css';
// import { Component } from 'react';
import MyComponent from './MyComponent';

// import './App.css';
// function App() {
//   const name = '리액트';
//   return (
//     <>
//       <div className="react">{name}</div>;
//       <input />
//     </>
//   );
// }

// import { Component } from 'react';
// // 클래스형 컴포넌트
// class App extends Component {
//   render() {
//     const name = 'react';
//     return (
//       <>
//         <div className="react">{name}</div>
//       </>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};

export default App;
