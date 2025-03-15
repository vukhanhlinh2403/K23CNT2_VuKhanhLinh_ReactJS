import { useReducer, useEffect } from "react";
import { VklTodoReducers } from "../reducers/VklTodoReducers";
import VklTodoItem from "./VklTodoItem";
import VklAddTodo from "./VklAddTodo";

export default function VklTodoList() {
    const [todos, dispatch] = useReducer(VklTodoReducers, [], () => {
        const localData = localStorage.getItem("todos");
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <h2>Danh Sách Công Việc</h2>
            <VklAddTodo dispatch={dispatch} />
            <ul>
                {todos.map((todo) => (
                    <VklTodoItem key={todo.id} todo={todo} dispatch={dispatch} />
                ))}
            </ul>
        </div>
    );
}