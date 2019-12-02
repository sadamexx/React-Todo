// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Item from "./Todo";

const TodoList = props => {
    return(
        <div>
           {props.task.map(item =>(
               <Item key={item.id} item={item} />
           ))} 
           <button>Clear completed</button>
        </div>
    );
};

export default TodoList;