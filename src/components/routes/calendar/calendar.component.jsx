import React from "react";
import { Outlet } from "react-router-dom";
import FlexCalendar from "../../flex-calendar/flex-calendar.component";

const Calendar = () => {
    return(
        <React.Fragment>
            <Outlet></Outlet>
            <FlexCalendar></FlexCalendar>
        </React.Fragment>
    );
}

export default Calendar;