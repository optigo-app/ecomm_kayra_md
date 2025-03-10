import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const OrderRemarkModal = ({ open, onClose, remark, onRemarkChange, onSave }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="remark-modal-title"
      aria-describedby="remark-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '8px',
        }}
      >
        <Typography id="remark-modal-title" className='smr_addorderRemark' variant="h6" component="h2">
          Add The Order Remark..
        </Typography>
        <TextField
          id="remark-modal-description"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={remark}
          onChange={onRemarkChange}
          sx={{ mt: 2 }}
        />
        <div className="smr_projectRemarkBtn-group">
          <Button className="smr_remarksave-btn" onClick={onSave}>
            Save
          </Button>
          <Button className="smr_remarkcancel-btn" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default OrderRemarkModal;
