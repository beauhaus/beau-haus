import React, { Component } from 'react';
import styled from 'styled-components';

import gaugeDB from '../../../data/gaugeDB.json';

const ProgressGauge = (props) => {
    console.clear();
    console.log("props> progGauge: ", props);
    // console.log(gaugeDB.dial)
    const progressDegree = (props.count / props.total) * 360;
    return (
        <svg id="progress-gauge" viewBox="0 0 100 100">
             <rect x="1" y="1" fill="transparent" stroke="#000" strokeWidth="0" strokeMiterlimit="10" width="98" height="98"/>
                <g fill="none" strokeWidth="6" strokeMiterlimit="10" strokeDasharray="0 20 20 0">
                {gaugeDB.dial.map((line, idx)=> <line key={line.id} stroke={`hsl(34, 100%, ${50-idx}%`} x1="50" y1="50" x2={line.x2} y2={line.y2}/>)}
                </g>
            <line id="gauge-needle" transform={`rotate(${progressDegree})`}  strokeMiterlimit="10" x1="50" y1="50" x2="50" y2="2"/>
        </svg>
    )
}

export default ProgressGauge;

/*

{gaugeDB.dial.map(line=> <line key={line.id} stroke={line.stroke} x1="50" y1="50" x2={line.x2} y2={line.y2}/>)}
*/