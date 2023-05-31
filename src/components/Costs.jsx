import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Paper } from '@mui/material';

import AddCost from './AddCost'

const Costs = ({ costCode }) => {

    // state variable to store/set our average cost for that particular cost code
    const [averageCost, setAverageCost] = useState([])

    // get average cost for selected code
    const getAverageCost = async () => {
        const { data } = await axios.get(`http://localhost:3001/api/cptCodes/${costCode}/costs`)
        let total = 0
        for (let i = 0; i < data.length; i++) {
            total = total + data[i].cost
        }
        setAverageCost(total / data.length)
    }

    // grab average cost on render
    useEffect(() => {
        getAverageCost()
    })

    const updateAverageCost = (newAverageCost) => {
        setAverageCost(newAverageCost);
    };


    // render out the average cost
    return (
        <>
            <Paper
                sx={{ width: 280, padding: 2, marginBottom: 3 }}
                elevation={6}
            >
                Average cost for this code: ${averageCost}
            </Paper>
            <Paper
                sx={{ width: 280, padding: 2, marginBottom: 3 }}
                elevation={6}
            >
                <AddCost costCode={costCode} onUpdateAverageCost={getAverageCost} />
            </Paper>
        </>
    )
}

export default Costs