import React, { useState } from "react";
import Todolists from "./Todolists";


function Todo() {

    const [inputList, setInputList] = useState();
    const [Items, setItems] = useState([]);
    const itemEvent = (event) => {
        
        setInputList(event.target.value);
    };
    const added = () => {
        if(!inputList) {
            alert('plz write something!');
            return;
        }
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    };
    const deleteItems = (id) => {
        console.log("deleted");

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });
        });
    };


    return (
        <>
            <div className="todo">
                <div className="todocard">
                    <h1>ToDo List</h1>
                    <input
                        type="text"
                        placeholder="Add a item"
                        onChange={itemEvent}
                        value={inputList} />
                    <button onClick={added}>+</button>
                    <ol>
                        {/* <li>{inputList}</li> */}

                        {
                            Items.map((itemval, index) => {
                                return <li><Todolists 
                                text={itemval}
                                id={index}
                                key={index}
                                onSelect={deleteItems}/></li>;
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    );
};

export default Todo;