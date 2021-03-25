import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { DatePicker } from "react-materialize";
import { toggleFinalDate, toggleInitialDate } from "../../store/actions/auth";
import { formatDate } from "../../util";

export default function DatePick({ label, order }) {

    const dispatch = useDispatch()
    const [date, setDate] = useState()

    function handleChange(e) {
        const dia = formatDate(new Date(e.target.value))
        setDate(dia)
        if (order === 0) dispatch(toggleInitialDate(dia))
        else dispatch(toggleFinalDate(dia))
    }

    return (
        <>
            <p className='flow-text'>{label}:&nbsp;&nbsp;</p>
            <DatePicker
                value={date}
                id="myDate"
                onChange={(newDate) => {
                    handleChange({
                        target: {
                            id: "myDate",
                            value: newDate
                        }
                    })
                }} />
        </>
    );
}