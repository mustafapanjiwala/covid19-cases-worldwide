import React from 'react';
import {
    render,
    cleanup,
    fireEvent,
    getByTestId
} from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('should have map div', () => {
    const view = render(<App />);
    expect(view.getByTestId('map')).toBeInTheDocument();
});
