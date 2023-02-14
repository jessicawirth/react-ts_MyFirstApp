import * as React from 'react';
import ToDoList from './todo-list-component';

export interface IAppProps {}

export interface IAppState {
  counter: number;
}

export default class AppClassComponent extends React.Component<
  IAppProps,
  IAppState
> {
  constructor(props: IAppProps) {
    //constructor gets always a property as input. State will not be accepted because the state come from the component
    super(props); //always call first the parent constructor of React.Component

    this.state = {
      //here you can initialize initial values of the state object
      counter: 0,
    };
  }

  //_______________Lifecycle Events________________________

  componentDidMount() {
    console.log('Inside component did mount');
  }

  componentDidUpdate() {
    console.log('Inside component did update');
  }
  //________________________________________________________

  //Click Amount: In the state we can save the Number of Clicks

  // render will return html-code or a component
  public render() {
    console.log('Parent component rendered');
    return (
      <div>
        <h2> hello from class component</h2>

        <div>You clicked {this.state.counter} times</div>

        <CounterDisplay clickCounter={this.state.counter} />

        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          Click me
        </button>
      </div>
      // for an empty div should you use this (without any html): <React.Fragment></React.Fragment>
    );
  }
}

interface ICounterDisplay {
  clickCounter: number;
}

const CounterDisplay: React.FunctionComponent<ICounterDisplay> = (props) => {
  console.log('Counter Component rendered');
  return <div>You clicked {props.clickCounter} times</div>;
};
