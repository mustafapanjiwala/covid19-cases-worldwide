import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import MapChart from '../components/MapChart';

test('tooltip data rendered or not', async () => {
    render(<MapChart />);
    userEvent.mouseOver(await screen.findByRole('tooltip'));

    expect(await screen.findByRole('tooltip')).toBeInTheDocument();
    // expect(await getByTestId(/child element/i)).toBeInTheDocument();
});
