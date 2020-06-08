import React, {Fragment} from "react";
import '../../styles/dropDownInput.scss';

const DropDownField = (props) => {
    const { options,onChange,name, restProps,id } = props;
    const toSelect = props.value === "select" && {disabled:"disabled", selected:"selected"};
    return (
        <div className="drop-container">
            <select id={id} onChange={onChange} name={name} className="select-box" {...restProps} defaultValue ={props.value} >
            <option aria-selected={"select" ===props.value || !props.value} value="select" {...toSelect}>I would describe my user type as</option>
            {options && options.map((item,i)=>{
                return <option key={'key_'+i}  aria-selected={item===props.value} value={item}>{item}</option>
            })}
            </select>
            <i className="arrow" aria-hidden="true"></i>

        </div>
    );
};

export default DropDownField;