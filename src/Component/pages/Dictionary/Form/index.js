import React, { useContext } from 'react'
import FormHpt from './formHpt';
import FormIltan from './formIltan';
import FromAgronomi from './formAgronomi';
import { NavbarContext } from '../../../../ContextAPI/Navbar/context';

function FormIndex({handleKey}) {

  const { navbar } = useContext(NavbarContext);
  const { data } = navbar;
  return (
    <>
    {
        handleKey === 0 && data.length && (
          <FormHpt />
        )
    }
    {
        handleKey === 1 && data.length && (
          <FromAgronomi />
        )
    }
    {
        handleKey === 2 && data.length && (
          <FormIltan />
        )
    }
    </>
  )
}

export default FormIndex;

