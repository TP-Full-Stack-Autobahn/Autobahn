import React from 'react';

export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary"; 
  shape?: "rounded";
  style?: Object
}

/**
 * Primary UI component for user interaction
 */
export const ButtonComponent: React.FC<ButtonProps> = (props) => {
  const {children, variant = "primary", shape, style} = props;
  const classNames = `atbh-btn atbh-btn-${variant} atbh-btn-${shape}`;

  return (
    <button className={classNames} {...props} style={style}>
      {children}
    </button>
  );
};