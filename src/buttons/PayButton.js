import React from 'react';
import { Button } from 'semantic-ui-react';

const PayButton = (props) => {
  return (
    <Button primary onClick={props.onClick}>Pay</Button>
  );
};

export default PayButton;