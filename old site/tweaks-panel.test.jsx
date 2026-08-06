import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TweakSelect } from './tweaks-panel.jsx';

describe('TweakSelect', () => {
    it('renders label and options', () => {
        const onChange = jest.fn();
        const options = ['Option 1', 'Option 2', { value: 'opt3', label: 'Option 3' }];

        render(
            <TweakSelect
                label="Test Label"
                value="Option 1"
                options={options}
                onChange={onChange}
            />
        );

        // Check if label is rendered (inside TweakRow)
        expect(screen.getByText('Test Label')).toBeInTheDocument();

        // Check if options are rendered
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
        expect(screen.getByText('Option 3')).toBeInTheDocument();

        // Check if the select is present
        const select = screen.getByRole('combobox');
        expect(select).toBeInTheDocument();
        expect(select.value).toBe('Option 1');
    });

    it('calls onChange when selection changes', () => {
        const onChange = jest.fn();
        const options = ['Option 1', 'Option 2', { value: 'opt3', label: 'Option 3' }];

        render(
            <TweakSelect
                label="Test Label"
                value="Option 1"
                options={options}
                onChange={onChange}
            />
        );

        const select = screen.getByRole('combobox');

        // Change to Option 2
        fireEvent.change(select, { target: { value: 'Option 2' } });
        expect(onChange).toHaveBeenCalledWith('Option 2');

        // Change to Option 3 (which uses object format)
        fireEvent.change(select, { target: { value: 'opt3' } });
        expect(onChange).toHaveBeenCalledWith('opt3');
    });
});
