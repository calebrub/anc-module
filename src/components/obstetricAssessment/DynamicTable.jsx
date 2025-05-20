import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow, TextField} from '@mui/material';

const DynamicTable = ({ numRows = 7 }) => {
    const headers = ['Immunisation Status', 'Birth Weight', 'Sex', 'SBBN Alive', 'Third Stage of Delivery', 'Place of Delivery', 'Type of Delivery', 'Pre Mature', 'Abortion Below 12 wks', 'Year', 'Pregnancy', 'Comments'];

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {headers.map((header, index) => (
                        <TableCell key={index}>{header}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {Array.from({ length: numRows }, (_, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {headers.map((_, cellIndex) => (
                            <TableCell key={cellIndex}>
                                <TextField variant="outlined" size="small" fullWidth />
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default DynamicTable;