import React from 'react';
export type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    shape?: "rounded";
    className?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
};
/**
 * Primary UI component for user interaction
 */
export declare const ButtonComponent: React.FC<ButtonProps>;
