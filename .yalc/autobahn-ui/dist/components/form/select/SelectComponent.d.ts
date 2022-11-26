import React from 'react';
export type SelectProps = {
    showLabel?: boolean;
    label?: string;
    name: string;
    options: Object;
    className?: string;
};
/**
 * Primary UI component for user interaction
 */
export declare const SelectComponent: React.FC<SelectProps>;
