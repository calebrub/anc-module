import React from 'react'
import {Box, Button, Container, Divider, Grid, TextField, Typography} from '@mui/material';
import {useFormik} from 'formik';
import DynamicTable from "./DynamicTable.jsx";

function ObstetricAssessment() {
    const formik = useFormik({
        initialValues: {
            gravida: '',
            para: '',
            abortions: ''
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <Container maxWidth={'xl'} sx={{mt: 12}}>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} sx={{ marginBottom: 2 }}>
                    <Grid size={4}>
                        <Box>
                            <Typography variant="body1">Gravida</Typography>
                            <TextField
                                name="gravida"
                                value={formik.values.gravida}
                                onChange={formik.handleChange}
                                type={"number"}
                                variant="outlined"
                                fullWidth />
                        </Box>
                    </Grid>
                    <Grid size={4}>
                        <Box>
                            <Typography variant="body1">Para</Typography>
                            <TextField
                                name="para"
                                value={formik.values.para}
                                onChange={formik.handleChange}
                                type={"number"}
                                variant="outlined"
                                fullWidth />
                        </Box>
                    </Grid>
                    <Grid size={4}>
                        <Box>
                            <Typography variant="body1">Abortions</Typography>
                            <TextField
                                name="abortions"
                                value={formik.values.abortions}
                                onChange={formik.handleChange}
                                type={"number"}
                                variant="outlined"
                                fullWidth />
                        </Box>
                    </Grid>
                </Grid>

                {
                    formik.values.gravida > 0 && (
                        <Box mb={3}>
                            <Divider />
                            <Typography fontWeight={'bold'} mt={2} mb={2} variant="body1">Obstetric History</Typography>
                            <DynamicTable numRows={formik.values.gravida}/>
                        </Box>
                    )
                }


                <Button type="submit" variant={'contained'} size={'large'} disabled> Save</Button>
            </form>
        </Container>
    );
}

export default ObstetricAssessment;