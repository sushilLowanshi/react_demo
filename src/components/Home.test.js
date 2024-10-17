import Home from "./Home";
import { fireEvent, render } from '@testing-library/react';

describe(Home, () => {
    it('display correct initial count', () => {
        const { getByTestId } = render(<Home />);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    })

    it('count should increment by 1 if Add button clicked', () => {
        const { getByTestId, getByRole } = render(<Home />);
        const incrementBttn = getByRole('button', { name: "Add" });
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(0);
        fireEvent.click(incrementBttn);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(1);
        const SwitchSign = getByRole('button', { name: "SwitchSign" });
        fireEvent.click(SwitchSign);
        expect(Number(getByTestId("count").textContent)).toEqual(-1)
    })

    it('count should decrement by -1 if Sub button clicked', () => {
        const { getByTestId, getByRole } = render(<Home />);
        const decrementBttn = getByRole("button", { name: "Sub" });
        expect(Number(getByTestId("count").textContent)).toEqual(0);
        fireEvent.click(decrementBttn);
        expect(Number(getByTestId("count").textContent)).toEqual(-1);

    })
    
    it('count should be 0 if resetbutton is clicked', () => {
        const { getByTestId, getByRole } = render(<Home />);
        const Reset = getByRole("button", { name: "Reset" });
        // expect(Number(getByTestId("count").textContent)).toEqual(50);
        fireEvent.click(Reset);
        expect(Number(getByTestId("count").textContent)).toEqual(0);
    })



})


