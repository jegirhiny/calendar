import React, { useState } from 'react';
import PopUpWindow from '../pop-up-window/pop-up-window.component';
import CalendarDay from '../../models/calendar-day/calendar-day';
import './flex-calendar.styles.css';

let date = new Date();
let displayMonth = date.getMonth();

const FlexCalendar = () => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let [numericalMonth, setNumericalMonth] = useState(new Date(date.getFullYear(), date.getMonth(), 1).getMonth())

    /**
     * Returns a month of the year
     * @returns {Array}
     */
    function getMonth() {
        let lastMonth = new Date(date.getFullYear(), numericalMonth - 1, 1).getMonth();
        let lastMonthNumDays = new Date(date.getFullYear(), numericalMonth, 0).getDate();
        let currentMonth = new Date(date.getFullYear(), numericalMonth, 1).getMonth();
        let currentMonthNumDays = new Date(date.getFullYear(), numericalMonth + 1, 0).getDate();
        let currentMonthFirstDay = new Date(date.getFullYear(), numericalMonth, 1).getDay();
        let nextMonth = new Date(date.getFullYear(), numericalMonth + 1, 1).getMonth();
        let lastMonthWeekStart = lastMonthNumDays - currentMonthFirstDay;
        let dayOfWeek = 0;
        let month = [];
        let week = [];
        
        for(let i = 1; i <= currentMonthFirstDay; i++) {
            week.push(addCalendarDay(dayOfWeek++, i + lastMonthWeekStart, lastMonth));
        }

        for(let j = 1; j <= currentMonthNumDays; j++) {
            week.push(addCalendarDay(dayOfWeek++, j, currentMonth));

            if(week.length >= 7) {
                month.push(week);
                dayOfWeek = 0;
                week = [];
            }
        }

        let dayOfMonth = 1;

        while(week.length < 7) {
            week.push(addCalendarDay(dayOfWeek++, dayOfMonth++, nextMonth));
        }

        month.push(week);
        return month;
    }

    /**
     * Returns a new CalendarDay object
     * @param {Integer} dayOfWeek 
     * @param {Integer} dayOfMonth 
     * @param {Integer} month 
     * @returns {CalendarDay} 
     */
    function addCalendarDay(dayOfWeek, dayOfMonth, month) {
        let stringDay = `${(new Date(date.getFullYear(), month, dayOfMonth))}`.substring(0, 3).toLocaleUpperCase();

        return new CalendarDay(generateUID(), stringDay, dayOfWeek, dayOfMonth, `${months[month]}`.substring(0, 3));
    }

    /**
     * Taken from https://gist.github.com/gordonbrander/2230317#file-id-js
    */
    function generateUID() {
        return (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g,"");
    }

    /**
     * Shows or hides popup window
     * @param {CalendarDay} day 
     */
    function displayWindow(day) {
        document.getElementById(`${day.id}POPUP`).className = 'window-container-show';
        document.getElementById(`${day.id}CONTAINER`).className = 'window-container';
    }

    /**
     * Increments or decrements numerical month
     * @param {Integer} value 
     */
    function changeMonth(value) {
        setNumericalMonth(displayMonth += value);
    }

    /**
     * Conditionaly formats JSX if first week of month
     * @param {CalendarDay} day 
     * @param {Integer} weekIndex 
     * @returns Name of the day
     */
    function renderDayName(day, weekIndex) {
        if(weekIndex === 0) {
            return(
                <h5 className='day-text day-name'>{`${day.stringDay}`}</h5>
            );
        }
    }

    /**
     * Conditionaly formats JSX if first day of month
     * @param {CalendarDay} day 
     * @returns Month name or numerical day
     */
    function getDayText(day) {
        if(day.dayOfMonth === 1) {
            return `${day.month} 1`;
        }

        return `${day.dayOfMonth}`;
    }

    return(
        <React.Fragment>
            <section className='calendar-nav'>
                <div className='nav-selector-container'>
                    <div className='image-container'>
                        <span className='image' onClick={() => changeMonth(-1)}><img src='/images/chevron-left-solid.png' className='nav-image'></img></span>
                        <span className='image' onClick={() => changeMonth(1)}><img src='/images/chevron-right-solid.png' className='nav-image'></img></span>
                    </div>
                    <h5 className='selector-text'>{`${months[displayMonth]} ${date.getFullYear()}`}</h5>
                </div>
            </section>
            <section className='calendar-container'>
                {getMonth().map((week, weekIndex) => 
                    <div className='row'>
                    {week.map((day) => {
                        let isCurrentDay = day.dayOfMonth === date.getDate() && day.month === months[date.getMonth()].substring(0, 3);

                        return(
                            <React.Fragment>
                                <PopUpWindow day={day}></PopUpWindow>
                                <div className='day' onClick={() => displayWindow(day)}>
                                    <div className='day-container'>
                                        {renderDayName(day, weekIndex)}
                                        <h5 className={`day-text ${isCurrentDay ? 'current-day-text' : ''}`}>{getDayText(day)}</h5>
                                    </div>
                                    <div className='event-container' id={`${day.id}`}></div>
                                </div>
                            </React.Fragment>
                        );
                    })}
                    </div>
                )}
            </section>
        </React.Fragment>
    );
}

export default FlexCalendar;