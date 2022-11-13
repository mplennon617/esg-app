import { React, useState } from 'react';
import { Repository } from '../api/repository';

const Slider = props => {

    const repo = new Repository();

    return (
        <>
        <h1>{props.label}</h1>
        
        <label for={"slider"+props.idx} class="form-label">{props.label}</label>
        <input type="range" class="form-range" min="0" max="10" id={"slider"+props.idx}
               onChange={e => props.onChange(props.idx,e.target.value)}></input>
        </>
    );
} 

export default Slider;