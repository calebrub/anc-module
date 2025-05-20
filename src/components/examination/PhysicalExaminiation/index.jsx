import React from 'react'
import {Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography} from '@mui/material';

function PhysicalExamination() {
    return (
        <Box mb={5}>
            <Typography fontWeight={'bold'} mb={3} variant="body1">Vital Signs and Nutritional Assessment</Typography>

                <Grid container spacing={2} sx={{ marginBottom: 2 }}>

                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">GAIT</Typography>
                            <TextField 
                                variant="outlined" 
                                fullWidth />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Height (cm)</Typography>
                            <TextField variant="outlined"  fullWidth />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Weight (kg)</Typography>
                            <TextField variant="outlined"  fullWidth />
                        </Box>
                    </Grid>


                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">BP:</Typography>
                            <TextField variant="outlined" fullWidth />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Pulse:</Typography>
                            <TextField variant="outlined" fullWidth />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Temp:</Typography>
                            <TextField variant="outlined" fullWidth />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">MUAC:</Typography>
                            <TextField variant="outlined" fullWidth />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Nutritional status*:</Typography>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <FormControlLabel control={<Checkbox />} label="Normal" />
                                <FormControlLabel control={<Checkbox />} label="MAM" />
                                <FormControlLabel control={<Checkbox />} label="SAM" />
                            </Box>
                        </Box>
                    </Grid>

                </Grid>

            <Button variant={'contained'} size={'large'}> Save</Button>
        </Box>
    );
}

export default PhysicalExamination;