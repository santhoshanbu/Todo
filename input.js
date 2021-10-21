import React from "react";
import './input.css';




function Input() {

    const usersData = localStorage.getItem('todo');
    const users = usersData ? JSON.parse(usersData):[];


    const [inputValue, updateValue] = React.useState('');
    const [list, updatelist] = React.useState([...users]);
    const [show, toggle] = React.useState(false);

    const handleclick = (e) => {
        e.preventDefault();
        const newList = [...list];
        newList.push(inputValue);
        updatelist(newList)
        localStorage.setItem('todo', JSON.stringify(newList))
        updateValue('')
    }
    const delet = (index) => {
        let liii = [...list];
        liii.splice(index, 1)
        updatelist(liii)
        localStorage.setItem('todo', JSON.stringify(liii))
    }
    return (
        <div>
            <form onSubmit={handleclick}>
                <input type='text' value={inputValue} id='input' onChange={(event) => updateValue(event.target.value)} />
                <button type='submit' id='save'>save</button>
               
            </form>
            {
            list.map((job, index) => 
            <div>
                <input type='checkbox'/> 
                <span onClick={() => toggle(!show)} className={`task ${show ? 'completed' : '' }`}>{job}</span>
                <button onClick={() => delet(index)}>delete</button>
            </div>)
            }
        </div>
    );
}
// export default Input;