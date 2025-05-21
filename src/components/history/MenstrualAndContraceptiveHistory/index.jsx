import React from 'react';
import {Box, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography,} from '@mui/material';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const MenstrualAndContraceptiveHistory = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            lengthOfMenses: '',
            amount: '',
            familyPlanningMethod: '',
            familyPlanningMethodUsed: '',
            when: '',
            whyDiscontinued: '',
            whyNeverUsed: '',
        },
        validationSchema: Yup.object({

            lengthOfMenses: Yup.number().required('Required').min(1, 'Must be at least 1 day').max(14, 'Must be at most 14 days'),

            amount: Yup.string().required('Required'),
            familyPlanningMethod: Yup.string(),
            whenAndWhyDiscontinued: Yup.string(),
            whyNeverUsed: Yup.string(),
        }),
        onSubmit: (values) => {
            onSubmit?.(values);
        },
    });

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = formik;

    return (
        <form onSubmit={handleSubmit}>

            <Box display="flex" flexDirection="column" gap={2}>
                <Typography fontWeight={'bold'}>Length of menses (days)</Typography>
                <TextField
                    name="lengthOfMenses"
                    type="number"
                    value={values.lengthOfMenses}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.lengthOfMenses && Boolean(errors.lengthOfMenses)}
                    helperText={touched.lengthOfMenses && errors.lengthOfMenses}
                    fullWidth
                />

                <FormControl>
                    <Typography fontWeight={'bold'}>Amount</Typography>
                    <RadioGroup
                        row
                        name="amount"
                        value={values.amount}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <FormControlLabel value="Heavy" control={<Radio />} label="Heavy" />
                        <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
                    </RadioGroup>
                    {touched.amount && errors.amount && (
                        <Typography color="error" variant="caption">
                            {errors.amount}
                        </Typography>
                    )}
                </FormControl>

                <FormControl>
                    <Typography gutterBottom fontWeight={'bold'}>Was Family Planning Method Used?</Typography>
                    <RadioGroup
                        row
                        name="familyPlanningMethod"
                        value={values.familyPlanningMethod}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.familyPlanningMethod && Boolean(errors.familyPlanningMethod)}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                {
                    values.familyPlanningMethod === 'yes' && (
                        <Box>
                            <Box mb={2}>
                                <Typography gutterBottom fontWeight={'bold'}>Family Planning Method Used</Typography>
                                <TextField
                                    name="familyPlanningMethodUsed"
                                    value={values.familyPlanningMethodUsed}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.familyPlanningMethodUsed && Boolean(errors.familyPlanningMethodUsed)}
                                    helperText={touched.familyPlanningMethodUsed && errors.familyPlanningMethodUsed}
                                    fullWidth
                                />
                            </Box>

                            <Box mb={2}>
                                <Typography gutterBottom fontWeight={'bold'}>When was it last used?</Typography>
                                <TextField
                                    name="when"
                                    type="date"
                                    value={values.when}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.when && Boolean(errors.when)}
                                    helperText={touched.when && errors.when}
                                    fullWidth
                                />
                                {touched.when && errors.when && (
                                    <Typography color="error" variant="caption">
                                        {errors.when}
                                    </Typography>
                                )}
                            </Box>

                            <Typography gutterBottom fontWeight={'bold'}>Why was it discontinued?</Typography>
                            <TextField
                                name="whyDiscontinued"
                                multiline
                                rows={3}
                                value={values.whyDiscontinued}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.whyDiscontinued && Boolean(errors.whyDiscontinued)}
                                helperText={touched.whyDiscontinued && errors.whyDiscontinued}
                                fullWidth
                            />
                        </Box>
                    )

                }

                {
                    values.familyPlanningMethod === 'no' && (
                        <Box>
                            <Typography gutterBottom fontWeight={'bold'}>Why was it not used?</Typography>
                            <TextField
                                name="whyNeverUsed"
                                multiline
                                rows={2}
                                value={values.whyNeverUsed}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.whyNeverUsed && Boolean(errors.whyNeverUsed)}
                                helperText={touched.whyNeverUsed && errors.whyNeverUsed}
                                fullWidth
                            />
                        </Box>
                    )
                }


                {/*<Button type="submit" variant="contained" color="primary">*/}
                {/*    Submit Section*/}
                {/*</Button>*/}
            </Box>

        </form>
    );
};

export default MenstrualAndContraceptiveHistory;