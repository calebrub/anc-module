import React from 'react'
import {Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography} from '@mui/material';
import {useFormik} from 'formik';
import * as Yup from 'yup';

function PhysicalExamination() {
    const formik = useFormik({
        initialValues: {
            gait: '',
            height: '',
            weight: '',
            bp: '',
            systolic: '',
            diastolic: '',
            pulse: '',
            temp: '',
            muac: '',
            nutritionalStatus: {
                normal: false,
                mam: false,
                sam: false
            }
        },
        validationSchema: Yup.object({
            gait: Yup.string().required('GAIT is required'),
            height: Yup.number().required('Height is required').positive('Height must be positive'),
            weight: Yup.number().required('Weight is required').positive('Weight must be positive'),

            systolic: Yup.number()
                .required('Systolic is required')
                .positive('Systolic must be positive')
                .min(60, 'Systolic must be at least 60')
                .max(200, 'Systolic must be less than 200'),
            diastolic: Yup.number()
                .required('Diastolic is required')
                .positive('Diastolic must be positive')
                .min(40, 'Diastolic must be at least 40')
                .max(120, 'Diastolic must be less than 120'),

            pulse: Yup.string().required('Pulse is required'),
            temp: Yup.string().required('Temperature is required'),
            muac: Yup.string().required('MUAC is required'),
            nutritionalStatus: Yup.object().test(
                'at-least-one-selected',
                'At least one nutritional status must be selected',
                (value) => value.normal || value.mam || value.sam
            )
        }),
        onSubmit: (values) => {
            console.log(values);
            // Handle form submission
        },
    });

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        dirty
    } = formik;

    // Custom handler for checkbox group
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        formik.setFieldValue(`nutritionalStatus.${name}`, checked);
    };

    return (
        <Box mb={5}>
            <Typography fontWeight={'bold'} mb={3} variant="body1">Vital Signs and Nutritional Assessment</Typography>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} sx={{ marginBottom: 2 }}>

                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">GAIT</Typography>
                            <TextField 
                                name="gait"
                                variant="outlined" 
                                value={values.gait}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.gait && Boolean(errors.gait)}
                                helperText={touched.gait && errors.gait}
                                fullWidth />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Height (cm)</Typography>
                            <TextField 
                                name="height"
                                type="number"
                                variant="outlined"
                                value={values.height}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.height && Boolean(errors.height)}
                                helperText={touched.height && errors.height}
                                fullWidth />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Weight (kg)</Typography>
                            <TextField 
                                name="weight"
                                type="number"
                                variant="outlined"
                                value={values.weight}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.weight && Boolean(errors.weight)}
                                helperText={touched.weight && errors.weight}
                                fullWidth />
                        </Box>
                    </Grid>

                    <Grid size={6}>
                        <Typography variant="body1">BP</Typography>
                        <Box width={'100%'} display={'flex'} gap={2} justifyContent={'space-between'}>
                            <TextField 
                                name="systolic"
                                variant="outlined"
                                placeholder="Systolic"
                                value={values.systolic}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.systolic && Boolean(errors.systolic)}
                                helperText={touched.systolic && errors.systolic}
                                fullWidth />

                             <TextField
                                name="diastolic"
                                variant="outlined"
                                placeholder="Diastolic"
                                value={values.diastolic}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.diastolic && Boolean(errors.diastolic)}
                                helperText={touched.diastolic && errors.diastolic}
                                fullWidth />

                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Pulse</Typography>
                            <TextField 
                                name="pulse"
                                variant="outlined"
                                value={values.pulse}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.pulse && Boolean(errors.pulse)}
                                helperText={touched.pulse && errors.pulse}
                                fullWidth />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Temp</Typography>
                            <TextField 
                                name="temp"
                                variant="outlined"
                                value={values.temp}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.temp && Boolean(errors.temp)}
                                helperText={touched.temp && errors.temp}
                                fullWidth />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">MUAC</Typography>
                            <TextField 
                                name="muac"
                                variant="outlined"
                                value={values.muac}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.muac && Boolean(errors.muac)}
                                helperText={touched.muac && errors.muac}
                                fullWidth />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Nutritional status*</Typography>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <FormControlLabel 
                                    control={
                                        <Checkbox 
                                            name="normal"
                                            checked={values.nutritionalStatus.normal}
                                            onChange={handleCheckboxChange}
                                        />
                                    } 
                                    label="Normal" 
                                />
                                <FormControlLabel 
                                    control={
                                        <Checkbox 
                                            name="mam"
                                            checked={values.nutritionalStatus.mam}
                                            onChange={handleCheckboxChange}
                                        />
                                    } 
                                    label="MAM" 
                                />
                                <FormControlLabel 
                                    control={
                                        <Checkbox 
                                            name="sam"
                                            checked={values.nutritionalStatus.sam}
                                            onChange={handleCheckboxChange}
                                        />
                                    } 
                                    label="SAM" 
                                />
                            </Box>
                            {touched.nutritionalStatus && errors.nutritionalStatus && (
                                <Typography color="error" variant="caption">
                                    {errors.nutritionalStatus}
                                </Typography>
                            )}
                        </Box>
                    </Grid>
                </Grid>

                <Button 
                    type="submit"
                    variant={'contained'} 
                    size={'large'}
                    disabled={!(isValid && dirty)}
                >
                    Save
                </Button>
            </form>
        </Box>
    );
}

export default PhysicalExamination;
