import React from 'react';
import {} from 'react-icons/md';
import{} from 'react-icons/bi';
import './input.css';
import ReactPlayer from 'react-player';
import {useSelector} from 'react-redux';



function Content(){
// const all='Santhosh';
const list = useSelector((state) => state.list);
const margin = useSelector((state)=>state.boolean);


// const [hsty,updatehsty]=React.useState([]);
// const [change, changeDynamic] = React.useState(false)
// const [sample, updateSample] = React.useState('abc');
// if(name){
//     const array=[...hsty];
//     array.push(name);
//     updatehsty(array);
// }
    return(
        <div className={margin?'center':'side3'}>
            <div className='list'>
                {
                list.map((item) => <li className='list1'>{item}</li>)
                }
                
            </div>
            {/* <div onClick={() => changeDynamic(!change)} className={`firstClass ${sample}`}>
                hai
            </div> */}
            <div className='videos'>
                <ReactPlayer className='v1' url={'https://www.youtube.com/watch?v=-BUDo3mow00'} height='200px' width={margin?'269px':'315px'}/>
                <ReactPlayer className='v1' url={'https://www.youtube.com/watch?v=-BUDo3mow00'} height='200px' width={margin?'269px':'315px'}/>
                <ReactPlayer className='v1' url={'https://www.youtube.com/watch?v=-BUDo3mow00'} height='200px' width={margin?'269px':'315px'}/>
                <ReactPlayer className='v1' url={'https://www.youtube.com/watch?v=-BUDo3mow00'} height='200px' width={margin?'269px':'315px'}/>
                <ReactPlayer className='v1' url={'https://www.youtube.com/watch?v=-BUDo3mow00'} height='200px' width={margin?'269px':'315px'}/>
                <ReactPlayer className='v1' url={'https://www.youtube.com/watch?v=-BUDo3mow00'} height='200px' width={margin?'269px':'315px'}/>
                <ReactPlayer className='v1' url={'https://www.youtube.com/watch?v=-BUDo3mow00'} height='200px' width={margin?'269px':'315px'}/>
                <ReactPlayer className='v1' url={'https://www.youtube.com/watch?v=-BUDo3mow00'} height='200px' width={margin?'269px':'315px'}/>
                <ReactPlayer className='v1' url={'https://www.youtube.com/watch?v=-BUDo3mow00'} height='200px' width={margin?'269px':'315px'}/>
                <ReactPlayer className='v1' url={'https://www.youtube.com/watch?v=-BUDo3mow00'} height='200px' width={margin?'269px':'315px'}/>
                <ReactPlayer className='v1' url={'https://www.youtube.com/watch?v=-BUDo3mow00'} height='200px' width={margin?'269px':'315px'}/>
                <ReactPlayer className='v1' url={'https://www.youtube.com/watch?v=-BUDo3mow00'} height='200px' width={margin?'269px':'315px'}/>
            </div>
        </div>
    );
}
export default Content