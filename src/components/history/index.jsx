import React, {useState} from 'react';
import {Box, Button, Container, Paper, Step, StepLabel, Stepper, Typography,} from '@mui/material';

// Placeholder components to be implemented by you
import MenstrualAndContraceptiveHistory from './MenstrualAndContraceptiveHistory';
import PreviousIllness from './PreviousIllness';
import FamilyHistory from './FamilyHistory';

const steps = [
    'Menstrual & Contraceptive History',
    'Previous Illness',
    'Social & Family History',
];

const History = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const renderStepContent = (step) => {
        switch (step) {
            case 0:
                return <MenstrualAndContraceptiveHistory />;
            case 1:
                return <PreviousIllness />;
            case 2:
                return <FamilyHistory />;
            default:
                return <Typography>Unknown step</Typography>;
        }
    };

    return (
        <Container>
            <Paper elevation={3} sx={{ p: 3, mt: 9 }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}><StepLabel>{label}</StepLabel></Step>
                ))}
            </Stepper>

            <Box sx={{ mt: 4 }}>
                {activeStep === steps.length ? (
                    <Box textAlign="center">
                        <Typography variant="h6" gutterBottom>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                ) : (
                    <>
                        {renderStepContent(activeStep)}
                        <Box mt={3} display="flex" justifyContent="space-between">
                            <Button disabled={activeStep === 0} onClick={handleBack}>
                                Back
                            </Button>
                            <Button variant="contained" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </>
                )}
            </Box>
        </Paper>
        </Container>
    );
};

export default History;