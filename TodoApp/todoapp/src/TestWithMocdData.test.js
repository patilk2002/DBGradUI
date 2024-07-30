import { render, screen } from '@testing-library/react';
import TestWithMockData from './TestWithMockData';
import userEvent from '@testing-library/user-event';

const mockData= [
    {
        "id": 1,
        "first_name": "Kiran",
        "last_name" : "Patil",
        "email" : "kiran@gmail.com"
    },
    {
        "id": 2,
        "first_name": "Dipak",
        "last_name" : "Patil",
        "email" : "dip@gmail.com"
    }
]


test('List Renders Successfully', () => {
    render(<TestWithMockData data={mockData}/>)
    expect(screen.getByText(/Kiran/i)).toBeInTheDocument();
});

test ('Email link is clicked', async()=>{
    const mockHandleClick = jest.fn();
    render(<TestWithMockData data={mockData} handleClick={mockHandleClick}
        />
    )
    await userEvent.click(screen.getByText(/par@gmail.com/i))
    expect(mockHandleClick).toHaveBeenCalled()
})