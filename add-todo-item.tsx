import * as React from 'react';

export interface IAddToDoProps { //read-only: kann nichts speichern
  //child kann property nicht ändern

  onTodoAdded(newTodoText: string);
  onTodoDeleted();

}

export interface IAddTodoState {
  //Design
  //state ist vom Objekt änderbar
  todoText: string;
}

const deleteLastEntry = () => {
  alert('dosth');
};

export default class AddTodo extends React.Component<
  IAddToDoProps,
  IAddTodoState
> {
  constructor(props: IAddToDoProps) {
    super(props);

    this.state = {
      todoText: 'type in',
    };
  }

  public render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <input type="text" 
        value={this.state.todoText} 
        onChange={(e) => {
          this.setState({
            todoText: e.target.value,
          });
        }}

        />
        <button type="button" onClick={() => {
          this.props.onTodoAdded(this.state.todoText);
          this.setState({todoText:''});

        }}>
          Add
        </button>
        <button onClick={() => {
          this.props.onTodoDeleted();
          this.setState({todoText:''});
        }}>
        Reset
        </button>
      </div>
    );
  }
}
