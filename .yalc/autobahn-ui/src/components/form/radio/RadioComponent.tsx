import React from 'react';

export type InputProps = {
  label: string,
  value: string,
  name: string; 
  style?: Object
}

/**
 * Primary UI component for user interaction
 */
export const RadioComponent: React.FC<InputProps> = (props) => {
  const {value, label, name, style} = props;

  const classNames = `atbh-radio`;


  return (
    <div className={classNames}>
      <input type="radio" id={name} value={value} style={style} {...props}/>
      <label htmlFor={name}>{label}</label>
    </div>
  );
};