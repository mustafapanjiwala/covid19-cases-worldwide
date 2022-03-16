import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('Periodiacal Table data rendered or not', async () => {
    const view = render(<App />);
    setTimeout(async () => {
        // waiting till document gets rendered with the data!
        const td = view.container.querySelector('td');
        expect(td).not.toBeNull();
    }, 3000);
    // expect(await getByTestId(/child element/i)).toBeInTheDocument();
});
