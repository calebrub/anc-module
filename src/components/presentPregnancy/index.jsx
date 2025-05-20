import React, {useState} from 'react';
import {useFormik} from 'formik';
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from '@mui/material';
import ConfirmPregnancyDialog from "./ConfirmPregnancyDialog.jsx";
import * as Yup from 'yup';

export default function PresentPregnancyFormFormik() {
    const validationSchema = Yup.object({
        presentingComplaints: Yup.string().required('Presenting complaints is required'),

        firstDayOfLNMP: Yup.string()
            .required('First day of LNMP is required')
            .test('not-future', 'Date cannot be in the future', value => {
                if (!value) return true;
                return new Date(value) <= new Date();
            }),

        edd: Yup.string()
            .required('EDD is required')
            .test('not-past', 'Date cannot be in the past', value => {
                if (!value) return true;
                return new Date(value) >= new Date();
            }),

        weeksAmenorrhea: Yup.string()
            .required('Weeks of amenorrhea is required')
            .test('valid-range', 'Weeks must be between 0 and 42', value => {
                if (!value) return true;
                const num = Number(value);
                return num >= 0 && num <= 42;
            }),

        hospitalized: Yup.string().required('Hospitalization status is required'),

        hospitalizationReason: Yup.string().when('hospitalized', {
            is: 'yes',
            then: () => Yup.string().required('Hospitalization reason is required'),
            otherwise: () => Yup.string()
        }),


    });

    const formik = useFormik({
        initialValues: {
            presentingComplaints: '',
            firstDayOfLNMP: '',
            edd: '',
            weeksAmenorrhea: '',
            complications: {
                bleeding: false,
                vomiting: false,
                other: '',
            },
            hospitalized: '',
            hospitalizationReason: '',
        },
        isInitialValid: false,
        onSubmit: (values) => {
            console.log(values);
            setConfirmOpen(true)
        },
        validationSchema: validationSchema,
    });

    const handleComplicationChange = (name) => (event) => {
        formik.setFieldValue(`complications.${name}`, event.target.checked);
    };

    const [confirmOpen, setConfirmOpen] = useState(false);

    return (
        <form onSubmit={ (e) => {
            e.preventDefault();
            formik.handleSubmit()
        }}>

            <Container>
                <Grid container={true} spacing={2} p={3} mt={8}>

                    <Grid size={12} mb={2}>
                        <Typography fontWeight={'bold'}>Presenting Complaints</Typography>
                        <TextField
                            name="presentingComplaints"
                            value={formik.values.presentingComplaints}
                            onChange={formik.handleChange}
                            fullWidth
                        />
                    </Grid>

                    <Grid size={6} mb={2}>
                        <Typography fontWeight={'bold'}>First Day of LNMP</Typography>
                        <TextField
                            type="date"
                            name="firstDayOfLNMP"
                            value={formik.values.firstDayOfLNMP}
                            onChange={formik.handleChange}
                            error={formik.touched.firstDayOfLNMP && Boolean(formik.errors.firstDayOfLNMP)}
                            onBlur={formik.handleBlur}
                            fullWidth
                        />
                        {formik.touched.firstDayOfLNMP && formik.errors.firstDayOfLNMP && (
                            <Typography color="error" variant="body2">
                                {formik.errors.firstDayOfLNMP}
                            </Typography>
                        )}
                    </Grid>

                    <Grid size={6} mb={2}>
                        <Typography fontWeight={'bold'}>EDD</Typography>
                        <TextField
                            type="date"
                            name="edd"
                            value={formik.values.edd}
                            onChange={formik.handleChange}
                            error={formik.touched.edd && Boolean(formik.errors.edd)}
                            onBlur={formik.handleBlur}
                            fullWidth
                        />
                        {formik.touched.edd && formik.errors.edd && (
                            <Typography color="error" variant="body2">
                                {formik.errors.edd}
                            </Typography>
                        )}
                    </Grid>

                    <Grid size={12} mb={2}>
                        <Typography fontWeight={'bold'}>Weeks of Amenorrhea</Typography>
                        <TextField
                            type="number"
                            name="weeksAmenorrhea"
                            value={formik.values.weeksAmenorrhea}
                            onChange={formik.handleChange}
                            error={formik.touched.weeksAmenorrhea && Boolean(formik.errors.weeksAmenorrhea)}
                            onBlur={formik.handleBlur}
                            fullWidth
                        />
                        {formik.touched.weeksAmenorrhea && formik.errors.weeksAmenorrhea && (
                            <Typography color="error" variant="caption">
                                {formik.errors.weeksAmenorrhea}
                            </Typography>
                        )}
                    </Grid>

                    <Grid size={5} mb={2}>
                        <FormControl  component="fieldset">
                            <Typography fontWeight={'bold'}>Complications (if any)</Typography>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formik.values.complications.bleeding}
                                        onChange={handleComplicationChange('bleeding')}
                                    />
                                }
                                label={<Typography>Bleeding</Typography>}
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formik.values.complications.vomiting}
                                        onChange={handleComplicationChange('vomiting')}
                                    />
                                }
                                label={<Typography>Excessive Vomiting</Typography>}
                            />
                        </FormControl>
                        <Box>
                            <Typography>Other (Specify)</Typography>
                            <TextField
                                name="complications.other"
                                value={formik.values.complications.other}
                                onChange={formik.handleChange}
                                fullWidth
                            />
                        </Box>
                    </Grid>

                    <Grid size={7} mb={2}>

                        <FormControl sx={{mb: 2}} component="fieldset">
                            <Typography fontWeight={'bold'}>Any Hospitalisation?</Typography>
                            <RadioGroup
                                row
                                name="hospitalized"
                                value={formik.values.hospitalized}
                                onChange={formik.handleChange}
                            >
                                <FormControlLabel value="yes" control={<Radio />} label={<Typography>Yes</Typography>} />
                                <FormControlLabel value="no" control={<Radio />} label={<Typography>No</Typography>} />
                            </RadioGroup>
                        </FormControl>

                        {formik.values.hospitalized === 'yes' && (
                            <Box>
                                <Typography fontWeight={'bold'} >Reason</Typography>
                                <TextField
                                    name="hospitalizationReason"
                                    value={formik.values.hospitalizationReason}
                                    onChange={formik.handleChange}
                                    fullWidth
                                />
                            </Box>
                        )}
                    </Grid>

                    <Button type={'submit'}
                            variant={'contained'}
                            disabled={!formik.isValid}
                            size={'large'}>
                        Save
                    </Button>

                </Grid>
            </Container>

            <ConfirmPregnancyDialog
                open={confirmOpen}
                onClose={() => setConfirmOpen(false)}
                onConfirm={() => {
                    formik.submitForm();
                    setConfirmOpen(false);
                }}
                values={formik.values}
            />
        </form>
    );
}