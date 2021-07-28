import './style.css';
import React, { useState, useEffect } from 'react';

const readLocalData = () => {
    const list = localStorage.getItem('todoList');
    if (list) {
        return JSON.parse(list);
    } else return [];
};

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(readLocalData());
    const [isEditItem, setIsEditItem] = useState('');
    const [toggleButton, setToggleButton] = useState(false);
    const addItems = () => {
        if (!inputData) {
            alert('Please enter some relavant tasks in input bar!');
        }
        // when we are eiditing data
        else if (inputData && toggleButton) {
            setItems(
                items.map((item) => {
                    if (item.id === isEditItem) {
                        return { ...item, name: inputData };
                    }
                    return item;
                })
            );
            setToggleButton(false);
            setInputData('');
            setIsEditItem('');
        } else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            };
            const newList = [myNewInputData, ...items];
            setItems(newList);
            setInputData('');
        }
    };

    const deleteItem = (id) => {
        const updateItems = items.filter((item) => {
            return item.id !== id;
        });
        setItems(updateItems);
    };

    const editItem = (id) => {
        const edited = items.find((item) => {
            return item.id === id;
        });
        setIsEditItem(edited.id);
        setInputData(edited.name);
        setToggleButton(true);
    };

    // using useEffect Hooks to update data in local Storage after each CRUD operation performed
    useEffect(() => {
        return () => {
            console.log(`inside useEffect ${items}`);
            localStorage.setItem('todoList', JSON.stringify(items));
        };
    }, [items]);
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>
                    <div className="addItems">
                        <input
                            type="text"
                            placeholder="✍ Add item..."
                            className="form-control"
                            value={inputData}
                            onChange={(e) => {
                                setInputData(e.target.value);
                            }}
                        />
                        {/* <i
                            className="fa fa-plus add-btn"
                            onClick={() => addItems}
                        ></i> */}
                        {toggleButton ? (
                            <button
                                className="fa add-btn"
                                onClick={() => addItems()}
                            >
                                ✍
                            </button>
                        ) : (
                            <button
                                className="fa add-btn"
                                onClick={() => addItems()}
                            >
                                ➕
                            </button>
                        )}
                    </div>

                    <div className="showItems">
                        {items.map((item) => {
                            return (
                                <div className="eachItem" key={item.id}>
                                    <h3>{item.name}</h3>
                                    <div className="todo-btn">
                                        <i
                                            className="far add-btn"
                                            onClick={() => editItem(item.id)}
                                        >
                                            edit
                                        </i>
                                        <i
                                            className="far add-btn"
                                            onClick={() => deleteItem(item.id)}
                                        >
                                            delete
                                        </i>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="showItems">
                        <button
                            className="btn effect04"
                            data-sm-link-text="Remove All"
                            onClick={() => setItems([])}
                        >
                            <span>Check List</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;
