import { Avatar } from "./Avatar";
import { DirectReports } from "./DirectReports";
import { JobRole } from "./JobRole";
import { Location } from "./Location";
import { Name } from "./Name";
import { PhoneNumber } from "./PhoneNumber";
import { Salary } from "./Salary";

export function CurrentUser() {
  return (
    <>
      <div>
        <h2>Your details</h2>
        <div className="employeeDiv">
          <div className="employee_inner_div">
            <Avatar avatar={localStorage.getItem("avatar")} />
            <Name name={localStorage.getItem("name")} />
            <PhoneNumber phoneNumber={localStorage.getItem("phoneNumber")} />
            <JobRole jobRole={localStorage.getItem("jobRole")} />
            <Location location={localStorage.getItem("location")} />
            <Salary salary={localStorage.getItem("salary")} />
            <DirectReports />
            {/* TODO ^^ */}
          </div>
        </div>
      </div>
    </>
  );
}
