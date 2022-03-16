import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import PeriodicalData from '../components/PeriodicalData';
import userEvent from '@testing-library/user-event';

const MockProps = () => {
    return (
        <BrowserRouter>
            <PeriodicalData />
        </BrowserRouter>
    );
};

describe('PeriodiacalData', () => {
    test('Initially, get results button is disabled, later on enabled', async () => {
        await Promise.resolve((resolve, reject) =>
            setTimeout(async () => {
                // waiting till document gets rendered with the data!
                render(<MockProps />);
                expect(
                    await screen.findByRole('button', { name: /Get Result/i })
                ).toBeDisabled();
                userEvent.type(screen.getByText(/Select A Country/i), 'India');
                userEvent.type(screen.getByTestId('1'));
                userEvent.type(screen.getByTestId('2'));
                expect(
                    await screen.findByRole('button', { name: /Get Result/i })
                ).toBeEnabled();
                resolve(1);
            }, 3000)
        );
    });
});
