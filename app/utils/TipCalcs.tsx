import { calculationProps } from "../types";


export function calculateTipPerPerson (props: calculationProps): number {
    const bill = parseFloat(props.billAmount) || 0;
    const people = parseFloat(props.numberOfPeople) || 0;
    const tip = props.tipPercentage === 0 ? (parseFloat(props.customTip) || 0) : props.tipPercentage;

    if (bill < 1 || people < 1 || tip < 0) return 0;

    return (bill * (tip / 100)) / people;
}

export function calculateTotalPerPerson(props: calculationProps): number 
{
    const bill = parseFloat(props.billAmount) || 0;
    const people = parseFloat(props.numberOfPeople) || 0;

    if (bill < 1 || people < 1) return 0;

    const tipPerPerson = calculateTipPerPerson(props);

    return (bill / people) + tipPerPerson;
}

export function showErrorMessage(numberOfPeople: string): boolean
{
    if (numberOfPeople === "") return false;

    const peopleNum = parseFloat(numberOfPeople);

    return peopleNum < 1;
}