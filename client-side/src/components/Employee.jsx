import { Address } from "./Address";
import { Name } from "./Name";
import { PhoneNumber } from "./PhoneNumber";
import { Salary } from "./Salary";

export function Employee() {
    return (
        <>
            <Name/>
            <PhoneNumber/>
            <Address/>
            <Salary/>
        </>
    )
}