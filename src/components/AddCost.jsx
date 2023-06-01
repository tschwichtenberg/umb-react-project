import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Modal, Box, Typography } from '@mui/material';

const AddCost = ({ costCode, onUpdateAverageCost }) => {

  // state variables for our form
  const [cost, setCost] = useState('');
  const [facilityType, setFacilityType] = useState('');
  const [copay, setCopay] = useState('');
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false)

  // logic for our submit button to error check form data then post to api
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // check to make sure we have all fields, if not populate modal
    if (!cost || !facilityType || !copay) {
      setErrorModalOpen(true);
      return;
    }

    // setup our data variable to post
    const data = {
      cost: parseFloat(cost),
      facilityType: facilityType,
      copay: parseFloat(copay),
    };

    // use axios to post to api
    try {
      await axios.post(`http://localhost:3001/api/cptCodes/${costCode}/costs`, data);
      onUpdateAverageCost(data.cost); // Pass the updated average cost to the callback function
      console.log('Data posted successfully!');
      setCost('')
      setFacilityType('')
      setCopay('')
      setSuccessModalOpen(true);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  // function to close modal if there is an error
  const handleCloseErrorModal = () => {
    setErrorModalOpen(false);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
  }

  return (
    <>
      <p>Add a new cost:</p>
      <form onSubmit={handleFormSubmit}>
        <TextField
          label="Cost"
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          required
          margin="normal"
        />
        <br />
        <TextField
          label="Facility Type"
          name="facility"
          type="text"
          value={facilityType}
          onChange={(e) => setFacilityType(e.target.value)}
          required
          margin="normal"
        />
        <br />
        <TextField
          label="Copay"
          type="number"
          value={copay}
          onChange={(e) => setCopay(e.target.value)}
          required
          margin="normal"
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>

      <Modal open={errorModalOpen} onClose={handleCloseErrorModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            maxWidth: 400,
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" component="div" gutterBottom>
            Error
          </Typography>
          <Typography variant="body1" gutterBottom>
            Please fill in all the fields.
          </Typography>
          <Button variant="contained" onClick={handleCloseErrorModal}>
            Close
          </Button>
        </Box>
      </Modal>
      <Modal open={successModalOpen} onClose={handleCloseSuccessModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            maxWidth: 400,
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5">Average Cost Updated!</Typography>
          <Typography>The average cost has been successfully updated.</Typography>
          <Button variant="contained" onClick={handleCloseSuccessModal}>
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default AddCost;