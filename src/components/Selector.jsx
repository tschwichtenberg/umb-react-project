import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FormControl, InputLabel, Select, MenuItem, Paper } from '@mui/material';
import Costs from './Costs';

const Selector = () => {

    // state management for initial data and selected code
    const [data, setData] = useState([])
    const [selectedCode, setSelectedCode] = useState('')

    // get our cpt codes from the api for the selector
    const getData = async () => {
        const { data } = await axios.get(`http://localhost:3001/api/cptCodes`);
        setData(data)
    }

    // grab the cpt codes on render
    useEffect(() => {
        getData()
    }, [])

    // function to map out all the codes for the selector
    const codes = data.map((obj) => {
        return (
            <MenuItem key={obj.id} value={obj.id}>
                {obj.code}
            </MenuItem>
        )
    })

    // function to set our selected code in state
    const handleChange = (e) => {
        setSelectedCode(e.target.value)
    }

    return (

        <div style={{ display: 'flex' }}>
            <div style={{ width: 200, marginRight: 16 }}>
                <FormControl fullWidth>
                    <InputLabel id="codeSelectLabel">Code</InputLabel>
                    <Select
                        sx={{ width: 150 }}
                        label="code"
                        id="codeSelect"
                        value={selectedCode}
                        onChange={handleChange}
                    >
                        {codes}
                    </Select>
                </FormControl>
            </div>
            <div style={{ flex: 1 }}>
                {
                    selectedCode == 0 &&
                    <>
                        <Paper
                            sx={{ width: 280, padding: 2, marginBottom: 3 }}
                            elevation={6}
                        >
                            <p>Select a code to see the average costs associated with this code or to enter a new cost.</p>
                        </Paper>
                    </>
                }
                {selectedCode > 0 &&
                    <>


                        <Costs
                            costCode={selectedCode}
                        />

                    </>
                }
            </div>
        </div>
    )
}

export default Selector