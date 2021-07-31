import React from 'react';
// after react 17.0 we don't need to write
// import Restaurant from './component/basics/Restaurant';
// import UseState from './component/Hooks/useState';
// import UseEffect from './component/Hooks/useEffect';
// import UseReducer from './component/Hooks/useReducer';
// import Todo from './component/todoApp/todo';
import Temperature from './component/weatherApp/temperature';

/*
Three things to keep in mind while creating react componenets:
1. import react from react
2. any one functional component
3. It should always return JSX
*/

const App = () => {
    return (
        <>
            {/* <Restaurant /> */}
            {/* <UseState /> */}
            {/* <UseEffect /> */}
            {/* <UseReducer /> */}
            {/* <Todo /> */}
            <Temperature />
        </>
    );
};

// const MyName = () => {
//     return (
//         <>
//             <h1>My name is Harshkumar Metkel</h1>
//         </>
//     );
// };

/*
// How react autually looks at above code:
const App = () => {
    return React.createElement('h1', {}, "Welcome to Thapa's course");
};
*/

export default App;
