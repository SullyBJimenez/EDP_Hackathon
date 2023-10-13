import { GetCurrentUser } from "../getCurrentUser";
import { Avatar } from "./Avatar";
import { DirectReports } from "./DirectReports";
import { JobRole } from "./JobRole";
import { Location } from "./Location";
import { Name } from "./Name";
import { PhoneNumber } from "./PhoneNumber";
import { Salary } from "./Salary";

export function CurrentUser() {
    const {currentUser} = GetCurrentUser();
  return (
    <>
      <div>
        <h2>Your details</h2>
        <div className="employeeDiv">
          <div className="employee_inner_div">
            <Avatar avatar={currentUser.avatar} />
            <Name name={currentUser.name} />
            <PhoneNumber phoneNumber={currentUser.phoneNumber} />
            <JobRole jobRole={currentUser.jobRole} />
            <Location location={currentUser.location} />
            <Salary salary={currentUser.salary} />
            <DirectReports />
            {/* TODO ^^ */}
          </div>
        </div>
      </div>
    </>
  );
}
