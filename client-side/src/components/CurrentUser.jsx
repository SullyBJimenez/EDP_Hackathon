import { Address } from "./Address";
import { Name } from "./Name";
import { PhoneNumber } from "./PhoneNumber";
import { Salary } from "./Salary";

export function CurrentUser() {
    return (
        <>
            <Name name={localStorage.getItem("Name")}/>
            <PhoneNumber/>
            <Address/>
            <Salary/>
        </>
    )
}