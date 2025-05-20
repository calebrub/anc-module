import React from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Typography,} from '@mui/material';

export default function ConfirmPregnancyDialog({ open, onClose, onConfirm, values }) {
    if (!values) return null;

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Confirm Pregnancy Details</DialogTitle>
            <DialogContent dividers>
                <Box display="flex" flexDirection="column" gap={1}>
                    <Typography>
                        <strong>Presenting Complaints:</strong> {values.presentingComplaints || 'N/A'}
                    </Typography>

                    <Typography>
                        <strong>First Day of LNMP:</strong> {values.firstDayOfLNMP || 'N/A'}
                    </Typography>

                    <Typography>
                        <strong>EDD:</strong> {values.edd || 'N/A'}
                    </Typography>

                    <Typography>
                        <strong>Weeks of Amenorrhea:</strong> {values.weeksAmenorrhea || 'N/A'}
                    </Typography>

                    <Divider />

                    <Typography variant="subtitle1"><strong>Complications:</strong></Typography>
                    <Typography>- Bleeding: {values.complications.bleeding ? 'Yes' : 'No'}</Typography>
                    <Typography>- Excessive Vomiting: {values.complications.vomiting ? 'Yes' : 'No'}</Typography>
                    {values.complications.other && (
                        <Typography>- Other: {values.complications.other}</Typography>
                    )}

                    <Divider />

                    <Typography>
                        <strong>Hospitalised:</strong> {values.hospitalized === 'yes' ? 'Yes' : 'No'}
                    </Typography>
                    {values.hospitalized === 'yes' && (
                        <Typography>
                            <strong>Reason:</strong> {values.hospitalizationReason || 'N/A'}
                        </Typography>
                    )}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="outlined">Cancel</Button>
                <Button onClick={onConfirm} variant="contained" color="primary">Confirm & Save</Button>
            </DialogActions>
        </Dialog>
    );
}