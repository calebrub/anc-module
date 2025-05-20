import React from 'react';
import {Box, Checkbox, FormControlLabel, Radio, RadioGroup, TextField, Typography} from '@mui/material';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Divider from "@mui/material/Divider";

const FamilyHistory = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            drugs: {
                smoking: false,
                alcohol: false
            },
            familyHistory: {
                diabetes: false,
                hypertension: false,
                sickleCell: false,
                epilepsy: false,
                twins: false
            },
            gbvRisk: '',
            specifyGBVRisk: '',
            otherSubstances: '',
            specifyFamilyHistory: '',
        },
        validationSchema: Yup.object({
            hivStatusKnown: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            onSubmit?.(values);
        }
    });

    const {
        values,
        handleChange,
        handleBlur,
        touched,
        errors,
        handleSubmit
    } = formik;


    const drugs = [
        { name: 'smoking', label: 'Smoking' },
        { name: 'alcohol', label: 'alcohol' },
    ];

    const familyHistory = [
        { name: 'diabetes', label: 'Diabetes' },
        { name: 'hypertension', label: 'Hypertension' },
        { name: 'sickleCell', label: 'Sickle Cell Disease' },
        { name: 'epilepsy', label: 'Epilepsy' },
        { name: 'twins', label: 'Twins' }
    ];
    return (
        <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap={2}>

                <Box sx={{ mb: 2 }}>
                    <Typography fontWeight="bold" gutterBottom>
                        Social History
                    </Typography>

                    <Typography variant={'body2'} mt={2} fontWeight="bold" gutterBottom>
                       Do you perform any of the following?
                    </Typography>

                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
                        {drugs.map((condition) => (
                            <FormControlLabel
                                key={condition.name}
                                control={
                                    <Checkbox
                                        name={`drugs.${condition.name}`}
                                        checked={values.drugs?.[condition.name] || false}
                                        onChange={handleChange}
                                    />
                                }
                                label={condition.label}
                            />
                        ))}
                    </Box>

                    <Typography variant={'body2'} mt={1} fontWeight="bold" gutterBottom> Specify Other Substances</Typography>
                    <TextField
                        name="otherIllness"
                        value={values.otherSubstances}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />

                    <Box>

                        <Typography variant='body2' mt={1} fontWeight="bold">Is there a Risk of S/GBV</Typography>
                        <RadioGroup
                            row
                            name="gbvRisk"
                            value={values.gbvRisk}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>

                        {
                            values.gbvRisk === 'yes' && (
                                <>
                                    <Typography variant='body2' mt={1} fontWeight="bold" gutterBottom>Specify</Typography>
                                    <TextField
                                        name="specifyGBVRisk"
                                        value={values.specifyGBVRisk}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        fullWidth
                                    />
                                </>
                            )
                        }
                    </Box>

                </Box>

                <Divider/>

                <Box>
                    <Typography fontWeight="bold">
                        Family History
                    </Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
                        {familyHistory.map((condition) => (
                            <FormControlLabel
                                key={condition.name}
                                control={
                                    <Checkbox
                                        name={`familyHistory.${condition.name}`}
                                        checked={values.familyHistory?.[condition.name] || false}
                                        onChange={handleChange}
                                    />
                                }
                                label={condition.label}
                            />
                        ))}
                    </Box>

                    <Box>
                        <Typography variant='body2' mt={1} fontWeight="bold" gutterBottom>Specify</Typography>
                        <TextField
                            name="specifyFamilyHistory"
                            value={values.specifyFamilyHistory}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            fullWidth
                        />

                    </Box>

                </Box>

            </Box>
        </form>
    );
};

export default FamilyHistory;