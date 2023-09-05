import React from 'react';
import './Button.css';

export default props => {
  let btnCalc = 'bg-zinc-200 border-none h-14 w-14 rounded cursor-default active:bg-zinc-400 '
  btnCalc += props.operation ? 'bg-secondary' : ''
  btnCalc += props.double ? 'col-span-2 w-[7.75rem]' : ''
  btnCalc += props.triple ? 'col-span-3 w-[11.75rem]' : ''
  return (
    <button
      onClick={e => props.click && props.click(props.label)}
      className={btnCalc}>
      {props.label}
    </button>
  )
}









