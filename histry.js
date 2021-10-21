import React from 'react';
import { useSelector } from 'react-redux';

function History(){
    const hist=useSelector((state)=>state.list)
    return(
        <div className='his'>
            <h4>
                History
            </h4>
            {
                hist.map((histry)=><li className='part'>{histry}</li>)
            }
        </div>
    );
}
export default History