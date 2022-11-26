import React from 'react';
export type InputProps = {
    showLabel?: boolean;
    label?: string;
    type: "text" | "email" | "number" | "password";
    placeholder?: string;
    name: string;
    className?: string;
};
/**
 * Primary UI component for user interaction
 */
export declare const InputComponent: React.FC<InputProps>;
