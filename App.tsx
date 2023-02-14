import * as React from 'react';
import './style.css';

/*
export default function App() {
  //regular function in JavaScript
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p className="title"> Hello World</p>
    </div>
  );
}
*/

//defining properties
export interface IApp{
  background: string;
}

//Alternative other syntax as arrow function
export const App = (props: IApp) => {

  const doSomething = () => {
    alert('You clicked on me');
  }

  const anotherMethod = () => {
    alert('You called the second Method')
  }



  return (
    <div style={{
      backgroundColor: props.background ? props.background : 'yellow'
    }}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p className="title"> Hello World</p>
      <button type="button" onClick={() => {
        doSomething();
        anotherMethod();
      }}> Click me </button> 

      <ToDoList/>
    </div>
  );
};
/*
Button Function call
1. Option: 
<button type="button" onClick={doSomething}> Click me </button> 

2. Option (Arrow function) - necessary for multiple function calls
<button type="button" onClick={() => {
  doSomething();
  anotherMethod();
}}
> Click me </button> 
*/

/*
Difference between regularStyleSheet and React
background-color: 'red'       -       backgroundColor: 'red',
onclick                       -       onClick
class                         -       className
*/
