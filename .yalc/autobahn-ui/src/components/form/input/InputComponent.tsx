import React from 'react';

export type InputProps = {
  showLabel?: boolean;
  label: string; 
  type: string; 
  placeholder: string; 
  name: string; 
  style?: Object
}

/**
 * Primary UI component for user interaction
 */
export const InputComponent: React.FC<InputProps> = (props) => {
  const {showLabel = true, label, type, placeholder, name, style} = props;

  const classNames = `atbh-input-autobahn`;

  return (
    <div className={classNames}>
      {showLabel && 
        <label htmlFor={name}>{label}</label>
      }
      <input id={name} type={type} name={name} placeholder={placeholder} style={style} {...props}/>
    </div>
  );
};