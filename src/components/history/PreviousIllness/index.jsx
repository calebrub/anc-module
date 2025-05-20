import React from 'react';
import {Box, Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup, TextField, Typography} from '@mui/material';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Divider from "@mui/material/Divider";

const PreviousIllness = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            symptoms: {
                cough: false,
                fever: false,
                weightLoss: false,
                nightSweats: false
            },
            medicalIllnesses: {
                sickleCell: false,
                epilepsy: false,
                diabetes: false,
                sti: false,
                surgicalHistory: false,
                bloodTransfusion: false,
                fractureHistory: false,
                obsHistory: false,
                cardiacDisease: false,
                hypertension: false,
                asthma: false,
                other: false
            },
            fractures: {
                pelvis: false,
                spine: false,
                femur: false,
            },
            obgynIssues: {

            },
            bloodTransfusionReason: '',
            otherIllness: '',
            hivStatusKnown: '',
            sti: '',
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

    const medicalConditions = [
        { name: 'sickleCell', label: 'Sickle Cell Disease' },
        { name: 'epilepsy', label: 'Epilepsy (Seizures)' },
        { name: 'diabetes', label: 'Diabetes' },
        { name: 'cardiacDisease', label: 'Cardiac Disease' },
        { name: 'kidneyDisease', label: 'Kidney Disease' },
        { name: 'hypertension', label: 'Hypertension' },
        { name: 'tb', label: 'TB' },
        { name: 'asthma', label: 'Asthma' },
        { name: 'thromboembolic', label: 'Thrombo embolic disorders' },
        { name: 'sti', label: 'STI' },
    ];

    const obgynIssues = [
        { name: 'dnc', label: 'D & C' },
        { name: 'ectopicPregnancy', label: 'Ectopic pregnancy' },
        { name: 'caesareanSection', label: 'Caesarean Section' },
        { name: 'vacuumExtraction', label: 'Vacuum Extraction, Forceps' },
        { name: 'retainedPlacenta', label: 'Retained Placenta' },
        { name: 'pph', label: 'PPH' },
        { name: 'myomectomy', label: 'Myomectomy' },
        { name: 'cervicalCirclage', label: 'Cervical circlage (Shirodkar, McDonald)' }
    ];

    return (
        <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap={2}>

                <Typography fontWeight="bold">
                    Has any of the following been present for over 2 weeks?
                </Typography>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="symptoms.cough"
                                checked={values.symptoms.cough}
                                onChange={handleChange}
                            />
                        }
                        label="Cough"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="symptoms.fever"
                                checked={values.symptoms.fever}
                                onChange={handleChange}
                            />
                        }
                        label="Fever"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="symptoms.weightLoss"
                                checked={values.symptoms.weightLoss}
                                onChange={handleChange}
                            />
                        }
                        label="Weight Loss"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="symptoms.nightSweats"
                                checked={values.symptoms.nightSweats}
                                onChange={handleChange}
                            />
                        }
                        label="Night Sweats"
                    />
                </FormGroup>

                <Box>
                    <Typography fontWeight="bold">Known HIV status?</Typography>
                    <RadioGroup
                        row
                        name="hivStatusKnown"
                        value={values.hivStatusKnown}
                        onChange={handleChange}
                        error={touched.hivStatusKnown && Boolean(errors.hivStatusKnown)}
                        helperText={touched.hivStatusKnown && errors.hivStatusKnown}
                        onBlur={handleBlur}
                        >

                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                    {touched.hivStatusKnown && errors.hivStatusKnown && (
                        <Typography color="error" variant="caption">
                            {errors.hivStatusKnown}
                        </Typography>
                    )}
                </Box>

                <Divider/>
                <Box sx={{ mb: 2 }}>
                    <Typography fontWeight="bold" gutterBottom>
                        Medical Illness
                    </Typography>

                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
                        {medicalConditions.map((condition) => (
                            <FormControlLabel
                                key={condition.name}
                                control={
                                    <Checkbox
                                        name={`medicalIllnesses.${condition.name}`}
                                        checked={values.medicalIllnesses?.[condition.name] || false}
                                        onChange={handleChange}
                                    />
                                }
                                label={condition.label}
                            />
                        ))}
                    </Box>

                    <Typography variant={'body2'} fontWeight="bold" gutterBottom> Other illnesses</Typography>
                    <TextField
                        name="otherIllness"
                        value={values.otherIllness}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                </Box>

                <Divider/>


                <Box>
                    <Typography fontWeight="bold">Surgical History</Typography>


                    <Typography mt={2} variant='body2' fontWeight="bold">Previous Operations</Typography>
                    <TextField
                        name="surgicalHistory"
                        value={values.surgicalHistory}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                </Box>

                <Box>

                    <Typography variant='body2' fontWeight="bold">Blood Transfusion</Typography>
                    <RadioGroup
                        row
                        name="bloodTransfusion"
                        value={values.bloodTransfusion}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>

                    {
                        values.bloodTransfusion === 'yes' && (
                            <>
                            <Typography variant='body2' mt={1} fontWeight="bold" gutterBottom>Reason for blood transfusion</Typography>
                            <TextField
                                name="bloodTransfusionReason"
                                value={values.bloodTransfusionReason}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                fullWidth
                            />
                            </>
                    )
                    }
                </Box>
                <Box>
                    <Typography fontWeight="bold">
                       Fractures
                    </Typography>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="fractures.pelvis"
                                    checked={values.fractures.pelvis}
                                    onChange={handleChange}
                                />
                            }
                            label="Pelvis"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="fractures.spine"
                                    checked={values.fractures.spine}
                                    onChange={handleChange}
                                />
                            }
                            label="Spine"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="fractures.femur"
                                    checked={values.fractures.femur}
                                    onChange={handleChange}
                                />
                            }
                            label="Femur"
                        />

                    </FormGroup>
                </Box>
                <Divider/>


                <Divider/>
                <Box sx={{ mb: 2 }}>
                    <Typography fontWeight="bold" gutterBottom>
                        OBS/GYN
                    </Typography>

                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
                        {obgynIssues.map((condition) => (
                            <FormControlLabel
                                key={condition.name}
                                control={
                                    <Checkbox
                                        name={`obgynIssues.${condition.name}`}
                                        checked={values.obgynIssues?.[condition.name] || false}
                                        onChange={handleChange}
                                    />
                                }
                                label={condition.label}
                            />
                        ))}
                    </Box>
                </Box>

            </Box>
        </form>
    );
};

export default PreviousIllness;