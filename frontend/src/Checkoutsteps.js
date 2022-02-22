import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";
import './checkoutsteps.css';
const Checkoutsteps = ({step1,step2,step3,step4}) => {
     return (
          <React.Fragment>
               <div className='nav-flex'>
               <div className='nav-flex-items'>
                    {step1 ? (
                         <Link to='/login'>
                              <p className='abled' style={{color:"white"}}>Sign In</p>
                         </Link>
                    ):<p className='disabled' disabled>Sign In</p>}
               </div>
               <div className='nav-flex-items'>
                    {step2 ? (
                         <Link to='/shipping'>
                              <p className='abled' style={{color:"white"}}>Shipping</p>
                         </Link>
                    ):<p className='disabled' disabled>Shipping</p>}
               </div>
               <div className='nav-flex-items'>
                    {step3 ? (
                         <Link to='/payment'>
                              <p className='abled' style={{color:"white"}}>Payment</p>
                         </Link>
                    ):<p className='disabled' disabled>Payment</p>}
               </div>
               <div className='nav-flex-items'>
                    {step4 ? (
                         <Link to='/placeorder'>
                              <p className='abled' style={{color:"white"}}>Place Order</p>
                         </Link>
                    ):<p className='disabled' disabled>Place Order</p>}
               </div>
               </div>
          </React.Fragment>
     );
}

export default Checkoutsteps;
