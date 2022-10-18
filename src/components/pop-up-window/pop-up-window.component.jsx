import './pop-up-window.styles.css';
import React from 'react';
import { useState } from 'react';

const PopUpWindow = (props) => {
    const { day } = props;
    const hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    const minutes = ['00', '15', '30', '45'];
    const colors = ['#FFC600', '#346eeb', '#34eb80', '#eb3455', '#F99F38 ', '#841ae8'];
    let [ colorState, setColorState ] = useState(false);
    let [ groupColor, setGroupColor ] = useState('#808080');
    let [ titleEntry, setTitleEntry ] = useState('no title');
    let [ locationEntry, setLocationEntry ] = useState('');
    let [ dateTimeH, setDateTimeH ] = useState('1');
    let [ dateTimeM, setDateTimeM ] = useState('00');
    let [ dateTimeP, setDateTimeP ] = useState('AM');

    function submitEvent() {
        let containerNode = document.createElement('div');
        let titleNode = document.createElement('h5');
        let textNode = document.createTextNode(`${titleEntry} - ${dateTimeH}:${dateTimeM} ${dateTimeP}`);

        titleNode.append(textNode);
        titleNode.className = 'title-node';
        titleNode.style.backgroundColor = groupColor;
        containerNode.appendChild(titleNode);
        containerNode.id = `${day.id}CONTAINER`;
        containerNode.onclick = (e) => {e.stopPropagation()}
        document.getElementById(`${day.id}`).appendChild(containerNode);

        closeWindow();
    }

    function closeWindow() {
        document.getElementById(`${day.id}POPUP`).className = 'window-container-hide';
        document.getElementById(`${day.id}CONTAINER`).className = '';
        document.getElementById(`${day.id}Event Name`).value = '';
        document.getElementById(`${day.id}Event Date`).value = '';
        setGroupColor('#808080');
        setTitleEntry('no title');
        setLocationEntry('');
        setDateTimeH('1');
        setDateTimeM('00');
        setDateTimeP('AM');
    }

    function colorStateJSX() {
        if(colorState) {
            return(
                <React.Fragment>
                    <div className='window-container' onClick={() => setColorState(false)}></div>
                    <div id='color-selector'>
                        {colors.map((color) => {
                            return <button className='color' style={{backgroundColor: color}} onClick={() => setGroupColor(color)}></button>;
                        })}
                    </div>
                </React.Fragment>
            );
        }
    }

    return(
        <React.Fragment>
            <div id={`${day.id}CONTAINER`} onClick={() => closeWindow()}></div>
            <div className='window-container-hide' id={`${day.id}POPUP`}>
                <div className='window-nav-bar'>
                    <h4 className='window-date'>{`${day.month} ${day.dayOfMonth}`}</h4>
                    <button className='window-close'  onClick={() => closeWindow()}>X</button>
                </div>
                <div className='project-container' id={`${day.id}EVENTOPT`}>
                    <input className='event-name text' id={`${day.id}Event Name`} placeholder='Add title' onChange={(e) => {setTitleEntry(e.target.value)}} type='text'></input>
                    <input className='event-location text' id={`${day.id}Event Location`} placeholder='Add location' onChange={(e) => {setLocationEntry(e.target.value)}} type='text' value={locationEntry}></input>
                    <div className='container'>
                        <input className='event-date selector' id={`${day.id}Event Date`} type='date'></input>
                        <div className='time-selectors'>
                            <select className='event-time-hour selector' id={`${day.id}Event TimeH`} name="time" onChange={(e) => {setDateTimeH(e.target.value)}} value={dateTimeH}>
                                {hours.map((value) => {
                                    return <option value={value}>{value}</option>;
                                })}
                            </select>
                            <select className='event-time-min selector' id={`${day.id}Event TimeM`} name="time" onChange={(e) => {setDateTimeM(e.target.value)}} value={dateTimeM}>
                                {minutes.map((value) => {
                                    return <option value={value}>{value}</option>;
                                })}
                            </select>
                        </div>
                        <select className='event-time-selector selector' id={`${day.id}Event Selector`} name="time" onChange={(e) => {setDateTimeP(e.target.value)}} value={dateTimeP}>
                            <option value='AM'>AM</option>
                            <option value='PM'>PM</option>
                        </select>
                    </div>
                    <div className='window-nav-footer'>
                        <div className='group-option' onClick={() => setColorState(!colorState)}>
                            <h4 className='color-text'>Group</h4>
                            <button id='color-preview' className='color' style={{backgroundColor: groupColor}}></button>
                        </div>
                        {colorStateJSX()}
                        <button className='window-submit' onClick={() => submitEvent()}>Save</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


export default PopUpWindow;