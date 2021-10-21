import React from 'react';
import { MdHome, MdExplore, MdSubscriptions, MdVideoLibrary } from 'react-icons/md';
import { BiHistory } from 'react-icons/bi';
import './input.css';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";



function Nav() {
    const boolean = useSelector((state) => state.boolean);
    // const container=document.getElementById('nav-container')
    // const items=container.getElementsByClassName('div1');

    // for (let i = 0; i < items.length; i++) {
    //     items[i].addEventListener("click", function () {
    //       let current = container.getElementByClassName("active");
    //       current[0].className = current[0].className.remove(" active");

    //       this.className += " active";
    //     });
    // }

    const [selected, updateSelected] = React.useState(0);

    const checkSelected = (value) => {
        return value === selected ? 'active' : ''
    }

    return (
        <div id='nav-container' className={boolean ? 'side' : 'vid'}>
            <Link to='/home'onClick={() => updateSelected(0)} className={`${checkSelected(0)} link`}>
                <div className={`div1`}>
                    <div className='home ic'><MdHome /></div>
                    <div className='ic'>Home</div>
                </div>
            </Link>
            <Link to='/histry' onClick={() => updateSelected(1)} className={`${checkSelected(1)} link`}>
                <div className={`div1`}>
                    <div className='histry ic'><BiHistory /></div>
                    <div className='ic'>History</div>
                </div>
            </Link>
            <div onClick={() => updateSelected(2)} className={`${checkSelected(2)} div1`}>
                <div className='explore ic'>
                    <MdExplore />
                </div>
                <div className='ic'>Explore</div>
            </div>
            <div onClick={() => updateSelected(3)} className={`${checkSelected(3)} div1`}>
                <div className='subs ic'>
                    <MdSubscriptions /></div>
                <div className='ic'>Subscription</div>
            </div>
            <div onClick={() => updateSelected(4)} className={`${checkSelected(4)} div1`}>
                <div className='subs ic'><MdSubscriptions /></div>
                <div className='ic'>Subscription</div>
            </div>
            <div onClick={() => updateSelected(5)} className={`${checkSelected(5)} div1`}>
                <div className='library ic'>
                    <MdVideoLibrary /></div>
                <div className='ic'>Library</div>
            </div>
            <div onClick={() => updateSelected(6)} className={`${checkSelected(6)} div1`}>
                <div className='subs ic'><MdSubscriptions /></div>
                <div className='ic'>Subscription</div>
            </div>
            <div onClick={() => updateSelected(7)} className={`${checkSelected(7)} div1`}>
                <div className='subs ic'><MdSubscriptions /></div>
                <div className='ic'>Subscription</div>
            </div>
            <div onClick={() => updateSelected(8)} className={`${checkSelected(8)} div1`}>
                <div className='subs ic'><MdSubscriptions /></div>
                <div className='ic'>Subscription</div>
            </div>
        </div>
    );
}
export default Nav;