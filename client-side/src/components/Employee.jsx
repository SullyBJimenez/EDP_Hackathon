import { Avatar } from "./Avatar";
import { DirectReports } from "./DirectReports";
import { JobRole } from "./JobRole";
import { Location } from "./Location";
import { Name } from "./Name";
import { PhoneNumber } from "./PhoneNumber";
import { Salary } from "./Salary";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export function Employee() {
    const { id } = useParams();

    console.log(id);

    const [employee, setEmployee] = useState([]);
    const [canSeeSalary, setCanSeeSalary] = useState(false);

    useEffect(() => {
        async function getEmployeeData() {
            const url = 'http://localhost:2020/';
            const data = await fetch(`${url}employee/${id}`);
            const employeeData = await data.json();
            setEmployee(employeeData);
        };
        if (localStorage.getItem("jobRole") === "HR" ||
            employee.reports_to === localStorage.getItem("_id")) {
            setCanSeeSalary(true);
        };

        getEmployeeData();
    }, [id]);

    return (
        <>
            <Avatar avatar={employee.avatar} />
            <Name name={`${employee.firstName} ${employee.lastName}`} />
            <PhoneNumber phoneNumber={employee.phoneNumber} />
            <JobRole jobRole={employee.jobRole} />
            <Location location={employee.location} />
            {canSeeSalary
                && <Salary salary={employee.salary} />
            }
            <DirectReports />
            {/* TODO ^^ */}
        </>
    )
}