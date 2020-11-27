import React from "react";
import {
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableBody
} from '@material-ui/core';

const expensesTable = () => {
    return (
        <Table stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Kind of expense
                    </TableCell>
                    <TableCell>
                        Date
                    </TableCell>
                    <TableCell>
                        Amount
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    expense.map((exp) => {
                        return (
                            <TableRow>
                                <TableCell>
                                    {exp.type}
                                </TableCell>
                                <TableCell>
                                    {exp.date}
                                </TableCell>
                                <TableCell>
                                    {exp.amount}
                                </TableCell>
                            </TableRow>
                        );
                    })
                }
            </TableBody>
        </Table>
    )
};

const expense = [
    {
        type: 'Essen',
        date: '2020-11-11',
        amount: '50',
    }
]

export default expensesTable;