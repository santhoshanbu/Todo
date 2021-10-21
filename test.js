import React from "react";




function Input() {


    const [inputValue, updateValue] = React.useState('');
    const [list, updatelist] = React.useState(['apple','orrange','banana','graps']);

    const handleclick = (e) => {
        e.preventDefault();
        const newList = [...list];
        const index = newList.findIndex((item)=>item===inputValue);
        if(index !== -1){
            newList.splice(index,1);
        }
        updatelist(newList)
        updateValue('')
    }
    return (
        <div>
            <form onSubmit={handleclick}>
                <input onChange={(event) => updateValue(event.target.value)} type='text' value={inputValue} />
                <button type='submit'> save</button>
            </form>
            {
                list.map((job)=><div>{job}</div>)
            }
        </div>
    );
}
export default Input;