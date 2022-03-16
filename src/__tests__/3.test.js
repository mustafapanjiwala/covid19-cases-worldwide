import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PeriodicalData from '../components/PeriodicalData';

const MockProps = () => {
    return (
        <BrowserRouter>
            <PeriodicalData />
        </BrowserRouter>
    );
};

describe('PeriodiacalData', () => {
    test('Initially, get results button is disabled', async () => {
        render(<MockProps />);
        expect(
            await screen.findByRole('button', { name: /Get Result/i })
        ).toBeDisabled();

        // userEvent.type(screen.getByText(/Select A Country/i), 'India');
        // userEvent.type(screen.getByTestId('1'));
        // userEvent.type(screen.getByTestId('2'));

        // expect(
        //     await screen.findByRole('button', { name: /Get Result/i })
        // ).toBeEnabled();
    });
});
