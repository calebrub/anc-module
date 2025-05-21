import React from 'react'
import {Box, Button, Divider, Grid, TextField, Typography} from '@mui/material';
import {useFormik} from 'formik';
import * as Yup from 'yup';

function GeneralExamination() {
    const formik = useFormik({
        initialValues: {
            oralThrush: '',
            anaemia: '',
            teeth: '',
            eyes: '',
            neck: '',
            nails: '',
            breasts: '',
            palms: '',
            legs: '',
            jaundice: '',
            deformities: '',
            heart: '',
            lymphNodes: '',
            lungs: '',
            herpesZoster: '',
            vulva: '',
            cervix: '',
            vagina: '',
            abnormalDischarge: ''
        },
        validationSchema: Yup.object({
            oralThrush: Yup.string().required('Required'),
            anaemia: Yup.string().required('Required'),
            teeth: Yup.string().required('Required'),
            eyes: Yup.string().required('Required'),
            neck: Yup.string().required('Required'),
            nails: Yup.string().required('Required'),
            breasts: Yup.string().required('Required'),
            palms: Yup.string().required('Required'),
            legs: Yup.string().required('Required'),
            jaundice: Yup.string().required('Required'),
            deformities: Yup.string().required('Required'),
            heart: Yup.string().required('Required'),
            lymphNodes: Yup.string().required('Required'),
            lungs: Yup.string().required('Required'),
            herpesZoster: Yup.string().required('Required'),
            vulva: Yup.string().required('Required'),
            cervix: Yup.string().required('Required'),
            vagina: Yup.string().required('Required'),
            abnormalDischarge: Yup.string().required('Required')
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

    return (
        <Box mb={5}>
            <form onSubmit={handleSubmit}>
                <Typography fontWeight={'bold'} mt={2} mb={3} variant="body1">Examine and Comment on the following</Typography>
                <Grid container spacing={2} mb={2}>

                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Oral thrush:</Typography>
                            <TextField 
                                name="oralThrush"
                                variant="outlined" 
                                value={values.oralThrush}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.oralThrush && Boolean(errors.oralThrush)}
                                helperText={touched.oralThrush && errors.oralThrush}
                                fullWidth 
                            />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Anaemia</Typography>
                            <TextField 
                                name="anaemia"
                                variant="outlined" 
                                value={values.anaemia}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.anaemia && Boolean(errors.anaemia)}
                                helperText={touched.anaemia && errors.anaemia}
                                fullWidth 
                            />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Teeth:</Typography>
                            <TextField 
                                name="teeth"
                                variant="outlined" 
                                value={values.teeth}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.teeth && Boolean(errors.teeth)}
                                helperText={touched.teeth && errors.teeth}
                                fullWidth 
                            />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Eyes:</Typography>
                            <TextField 
                                name="eyes"
                                variant="outlined" 
                                value={values.eyes}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.eyes && Boolean(errors.eyes)}
                                helperText={touched.eyes && errors.eyes}
                                fullWidth 
                            />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Neck:</Typography>
                            <TextField 
                                name="neck"
                                variant="outlined" 
                                value={values.neck}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.neck && Boolean(errors.neck)}
                                helperText={touched.neck && errors.neck}
                                fullWidth 
                            />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Nails:</Typography>
                            <TextField 
                                name="nails"
                                variant="outlined" 
                                value={values.nails}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.nails && Boolean(errors.nails)}
                                helperText={touched.nails && errors.nails}
                                fullWidth 
                            />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Breasts:</Typography>
                            <TextField 
                                name="breasts"
                                variant="outlined" 
                                value={values.breasts}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.breasts && Boolean(errors.breasts)}
                                helperText={touched.breasts && errors.breasts}
                                fullWidth 
                            />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Palms:</Typography>
                            <TextField 
                                name="palms"
                                variant="outlined" 
                                value={values.palms}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.palms && Boolean(errors.palms)}
                                helperText={touched.palms && errors.palms}
                                fullWidth 
                            />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Legs:</Typography>
                            <TextField 
                                name="legs"
                                variant="outlined" 
                                value={values.legs}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.legs && Boolean(errors.legs)}
                                helperText={touched.legs && errors.legs}
                                fullWidth 
                            />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Jaundice:</Typography>
                            <TextField 
                                name="jaundice"
                                variant="outlined" 
                                value={values.jaundice}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.jaundice && Boolean(errors.jaundice)}
                                helperText={touched.jaundice && errors.jaundice}
                                fullWidth 
                            />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Deformities:</Typography>
                            <TextField 
                                name="deformities"
                                variant="outlined" 
                                value={values.deformities}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.deformities && Boolean(errors.deformities)}
                                helperText={touched.deformities && errors.deformities}
                                fullWidth 
                            />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Heart:</Typography>
                            <TextField 
                                name="heart"
                                variant="outlined" 
                                value={values.heart}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.heart && Boolean(errors.heart)}
                                helperText={touched.heart && errors.heart}
                                fullWidth 
                            />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Lymph Nodes:</Typography>
                            <TextField 
                                name="lymphNodes"
                                variant="outlined" 
                                value={values.lymphNodes}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.lymphNodes && Boolean(errors.lymphNodes)}
                                helperText={touched.lymphNodes && errors.lymphNodes}
                                fullWidth 
                            />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Lungs:</Typography>
                            <TextField 
                                name="lungs"
                                variant="outlined" 
                                value={values.lungs}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.lungs && Boolean(errors.lungs)}
                                helperText={touched.lungs && errors.lungs}
                                fullWidth 
                            />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Herpes zoster:</Typography>
                            <TextField 
                                name="herpesZoster"
                                variant="outlined" 
                                value={values.herpesZoster}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.herpesZoster && Boolean(errors.herpesZoster)}
                                helperText={touched.herpesZoster && errors.herpesZoster}
                                fullWidth 
                            />
                        </Box>
                    </Grid>

                </Grid>

                <Divider/>

                <Typography mt={2} mb={2} fontWeight={'bold'} variant="body1">Pelvic Examination</Typography>
                <Grid container spacing={2} mb={2}>

                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Vulva:</Typography>
                            <TextField 
                                name="vulva"
                                variant="outlined" 
                                value={values.vulva}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.vulva && Boolean(errors.vulva)}
                                helperText={touched.vulva && errors.vulva}
                                fullWidth 
                            />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Cervix:</Typography>
                            <TextField 
                                name="cervix"
                                variant="outlined" 
                                value={values.cervix}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.cervix && Boolean(errors.cervix)}
                                helperText={touched.cervix && errors.cervix}
                                fullWidth 
                            />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Vagina:</Typography>
                            <TextField 
                                name="vagina"
                                variant="outlined" 
                                value={values.vagina}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.vagina && Boolean(errors.vagina)}
                                helperText={touched.vagina && errors.vagina}
                                fullWidth 
                            />
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Box>
                            <Typography variant="body1">Abnormal vaginal discharge (specify):</Typography>
                            <TextField 
                                name="abnormalDischarge"
                                variant="outlined" 
                                value={values.abnormalDischarge}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.abnormalDischarge && Boolean(errors.abnormalDischarge)}
                                helperText={touched.abnormalDischarge && errors.abnormalDischarge}
                                fullWidth 
                            />
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

export default GeneralExamination;
