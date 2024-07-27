

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { aLC, chargesSlice } from './newStore';
import { asyncAddLabourCharge } from './thunk';

function DummyActionUser() {
    const charge = useSelector((state)=> state.charges.labour)
    const dispatch = useDispatch();

    const applyLaboutCharge = () => {
        dispatch(asyncAddLabourCharge(600))
    }
  return (
    <div>DummyActionUser</div>
  )
}

export default DummyActionUser