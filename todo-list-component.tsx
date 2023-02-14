import * as React from 'react';
import AddTodo from './add-todo-item';

export interface IToDoItem {
  title: string;
  done: boolean;
}

export interface IToDoListProps {
  onTodoDone();
}

export interface IToDoListState {
  todos: Array<IToDoItem>;
}

export default class ToDoList extends React.Component<
  IToDoListProps,
  IToDoListState
> {
  constructor(props: IToDoListProps) {
    super(props);

    this.state = {
      todos: [{ title: 'Todo1', done: false }, { title: 'Todo2', done: false }],
    };
  }
  public render() {
    return (
      <div>
        <AddTodo
          onTodoAdded={(newTodoItem: string) => {
            //Option 1:
            const temp = [...this.state.todos];
            temp.push({ title: newTodoItem, done: false}),
              //Option 2:
              this.setState({
                todos: [...this.state.todos, { title: newTodoItem, done: false }],
              });
          }}
          onTodoDeleted={() => {
            this.setState({
              todos: [],
            });
          }}
        />

        {this.state.todos.length == 0 ? (
          <span>There are no todos created </span>
        ) : (
          <React.Fragment></React.Fragment>
        )}

        {this.state.todos.map((item: IToDoItem) => {
          return <div> {item.title}
          <button style={{padding: '4pt', margin: '10pt'}}
          >Done</button> 
          </div>;
          //here you can put a button for each to do item
          
        })}
      </div>
    );
  }
}

//Method "map" works with arrays to display them. The value of item is always the type which you have defined in your state (here: IToDoItem)

//...Arrayname means all items
//...Arrayname, newitem : adds one new item to the existing array

// we can also use a temp variable to put there a copy of the array in.
// the copy of the array is in this case because of two reasons necessary:
// 1. state is read-only
// 2. React is checking the reference and when it is the same object, then its the same address
//    in the memory and will not rerender.
