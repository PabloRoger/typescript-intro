export interface Passanger {
    name: string;
    children?: string[];
}

const passenger1: Passanger = {
    name: "Pablo"
}

const passenger2: Passanger = {
    name: "Pablo",
    children: ['Nere','Paula']
}

const returnChildrenNumber = (passenger: Passanger): number => {
    const {name, children} = passenger;
    const howManyChildren = children?.length || 0;

    console.log(`Passenger: ${name} has ${howManyChildren} children`)

    return howManyChildren;
}

returnChildrenNumber(passenger1);
returnChildrenNumber(passenger2);