import React from 'react';
import { Table } from 'react-bootstrap';
export const Tablee = (props) => 
<Table striped bordered hover>
    {props.children}
</Table>