import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Container} from "@mui/material";
import PhysicalExamination from "./PhysicalExaminiation/index.jsx";
import GeneralExamination from "./GeneralExamination/index.jsx";

export default function Examination() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box mt={9} width={'100%'}>
            <Container>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">

                            <Tab label="Physical Examination" sx={{textDecoration: 'none'}} value="1" />
                            <Tab label="General Examination" sx={{textDecoration: 'none'}} value="2" />

                        </TabList>
                    </Box>
                    <TabPanel value="1"><PhysicalExamination/></TabPanel>
                    <TabPanel value="2"><GeneralExamination/></TabPanel>
                </TabContext>
            </Container>
        </Box>
    );
}