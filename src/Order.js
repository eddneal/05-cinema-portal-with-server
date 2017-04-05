import React from 'react';
import { Item } from 'semantic-ui-react';

const Order = ({order}) => {
  return (
    <Item>
      <Item.Image size='tiny' src='http://www.hans-zimmer.com/~hybrid/zimmer/12YEARSASLAVE.jpg' />

      <Item.Content>
        <Item.Header as='a'>Movie title</Item.Header>
        <Item.Meta>Price: ###</Item.Meta>
        <Item.Extra>
          Date: DD. MM. YYYY HH:ii
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default Order;