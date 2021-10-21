import React ,{useState}from 'react';
import './todo.css';


function Todo(){
    let storage=localStorage.getItem('work');

    let data= storage ? JSON.parse(storage):[];

    const [input,updateinput]=useState('');
    
    

    // const [edit,updateedit]=useState('');
    const [list,updatelist]=useState([...data]);

    console.log(list,data);

        function store(event){
            event.preventDefault();
            let arr=[...list];
            if(input.trim()!==''){
                arr.push({name:input,value:false})
            }
            updatelist(arr);
            localStorage.setItem('work',JSON.stringify(arr));
            updateinput('')
        }
        console.log(list)
        let str='hello';

        // function strike(ind){
        //     let arr2=[...list];
        //     if(arr2[ind].value){
        //         arr2[ind].value=false;
        //     }else{
        //         arr2[ind].value=true;
        //     }
        //     localStorage.setItem('work',JSON.stringify(arr2));
        //     updatelist(arr2);
        // }
        const delet=(i)=>{
            let remove=[...list];
            remove.splice(i,1);
            updatelist(remove);
            localStorage.setItem('work',JSON.stringify(remove));
        }
        function change(){
            str='hollow world';
            console.log(str);
        }
    return(
        <div>
            <p>{str}</p>
            <button onClick={change}>save</button>
            <form className='input' onSubmit={store}>
            <input  value={input} onChange={(e)=>updateinput(e.target.value)} /><button type='submit'>save</button>
            </form>
            {
                list.map((job,index)=>(<div className='list'>
                    <span className={job.value?'task completed':'task'}>{job.name}</span>
                    <button onClick={()=>delet(index)} >clear</button>
                </div>))
            }
        </div>
    );
}
// onClick={()=>strike(index)}
export default Todo;