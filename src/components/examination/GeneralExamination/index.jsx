import React from 'react'
import {Box, Button, Divider, Grid, TextField, Typography} from '@mui/material';

function PhysicalExamination() {
    return (
        <Box mb={5}>

            <Typography fontWeight={'bold'} mt={2} mb={3} variant="body1">Examine and Comment on the following</Typography>
            <Grid container spacing={2} mb={2}>


                <Grid size={6}>
                    <Box>
                        <Typography variant="body1">Oral thrush:</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Box>
                        <Typography variant="body1">Anaemia</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Box>
                        <Typography variant="body1">Teeth:</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Box>
                        <Typography variant="body1">Eyes:</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Box>
                        <Typography variant="body1">Neck:</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Box>
                        <Typography variant="body1">Nails:</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Box>
                        <Typography variant="body1">Breasts:</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Box>
                        <Typography variant="body1">Palms:</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Box>
                        <Typography variant="body1">Legs:</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Box>
                        <Typography variant="body1">Jaundice:</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Box>
                        <Typography variant="body1">Deformities:</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Box>
                        <Typography variant="body1">Heart:</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Box>
                        <Typography variant="body1">Lymph Nodes:</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Box>
                        <Typography variant="body1">Lungs:</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Box>
                        <Typography variant="body1">Herpes zoster:</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Box>
                </Grid>

            </Grid>

            <Divider/>

            <Typography mt={2} mb={2} fontWeight={'bold'} variant="body1">Pelvic Examination</Typography>
            <Grid container spacing={2} mb={2}>

                <Grid size={6}>
                    <Box>
                        <Typography variant="body1">Vulva:</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Box>
                        <Typography variant="body1">Cervix:</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Box>
                        <Typography variant="body1">Vagina:</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Box>
                        <Typography variant="body1">Abnormal vaginal discharge (specify):</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Box>
                </Grid>

            </Grid>

            <Button variant={'contained'} size={'large'}> Save</Button>
        </Box>
    );
}

export default PhysicalExamination;