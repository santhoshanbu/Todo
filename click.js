import React from 'react';
import './input.css';
import { FiMenu} from 'react-icons/fi';
import {FaSearch, FaMicrophone, FaAppStore} from 'react-icons/fa';
import {BiVideoPlus,BiBell} from 'react-icons/bi';
import {MdApps} from 'react-icons/md';
import san from '../image/san.JPG';
import {useDispatch} from 'react-redux';


function Click(){
    const dispatched = useDispatch()
    const dispatch = useDispatch()
    const [input,updateinput]=React.useState('');
    const [bool,updatebool]=React.useState(true);
    const [count,updatecount]=React.useState(0);
    const [apps,updateapps]=React.useState(true);

    const update=()=>{
        // e.preventDefault();
        // updatebool(!bool);
        dispatched({type: 'NAME',values:bool})
    }

    const clicked = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_NAME', value: input})
        updateinput('');
    }
    
    return(
        <div>
            <div className='top'>
                <div className='top1 top'>
                <div onClick={()=>{update();updatebool(!bool)}} className='menu d1'><FiMenu /></div>
                <div className='d2'><img  className='youtube img' src={'https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500'}/></div></div>
                <div className='top2 top'>
                    <form onSubmit={clicked}>
                    <div className='d3'><input placeholder='Search any items' onChange={(e)=>updateinput(e.target.value)} value={input}/></div>
                    <div onClick={clicked} className='search  d4'><FaSearch/></div>
                    </form>
                </div>
                <div className='mic  d9'><FaMicrophone/></div>
                <div className='top3 top'>
                    <div className='video d5'><BiVideoPlus/></div>
                    <div onClick={()=>updateapps(!apps)} className='app d6'><MdApps/>
                            <div className={apps?'apps':'appshow'}>
                                <div onClick={()=>updateinput('YouTube Tv')} className='aps'>YouTube Tv</div>
                                <div onClick={()=>updateinput('YouTube Videos')} className='aps'>YouTube Videos</div>
                                <div onClick={()=>updateinput('YouTube Music')} className='aps'>YouTube Music</div>
                                <div onClick={()=>updateinput('YouTube Stories')} className='aps'>YouTube Stories</div>
                                <div onClick={()=>updateinput('YouTube Books')} className='aps'>YouTube Books</div>
                            </div>
                    </div>
                    <div onClick={()=>updatecount(count+1)} className='bell d7'><BiBell/><div  className={(count==0)?'invisible':'visible'}>{count}</div></div>
                    <div><img className='my img d8' src={san}/></div>
                </div>
            </div>
            <div className='hide'>
                <div className='n1'>Search</div>
                <div className='n2'>Search with your voice</div>
                <div className='n3'>Create</div>
                <div className='n4'>Youtube apps</div>
                <div className='n5'>Notifications</div>
            </div>
        </div>
    );
}

export default Click






// function Click() {
//     let index=0;
//     const [count,updatecount]=React.useState(index);
    
//     const change=document.querySelector('imgs');
//     function clickedl(){
//         change.children[index].classList.remove('back');
//         index--;
//         updatecount(index);
//         change.children[index].classList.add('back');
//     }
//     const clickedr=()=>{
//         change.children[index].classList.remove('back');
//         index++;
//         updatecount(index);
//         console.log(count)
//         change.children[index].classList.add('back');
//     }
//     return (
//         <div className='click'>
//             <div  className='left arrow'>
//                 <buttton type='button' onClick={clickedl}>left</buttton>
//             </div>
//             <div className='imgs'>
//             <img className='back' src={'https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg'} />
//             <img src={'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg'} />
//             <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdM4Naw6g6mBZtWbsk8r4u0DEauhmvKrpFg&usqp=CAU'} />
//             <img src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'} />
//             </div>
//             <div className='right arrow'>
//             <buttton type='button' onClick={clickedr}>right</buttton>
//             </div>
//         </div>
//     );
// }