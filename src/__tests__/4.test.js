import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('tooltip data rendered or not', async () => {
    render(<App />);
    setTimeout(async () => {
        // waiting till document gets rendered with the data!

        userEvent.mouseOver(await screen.findByRole('tooltip'));

        expect(await screen.findByRole('tooltip')).toBeInTheDocument();
    }, 3000);
    // expect(await getByTestId(/child element/i)).toBeInTheDocument();
});
