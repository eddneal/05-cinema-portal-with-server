import React, {Component} from 'react';
import {
  Container,
  Header,
  Segment,
  Divider,
  Item
} from 'semantic-ui-react';
import PayButton from './buttons/PayButton';
import Order from './Order';
import OrdersService from './service/OrdersService';
import Price from './utils/Price';

class Checkout extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoading: false,
      orders: []
    };
  }

  /*
    TODO:

    When this component is rendered, use OrderService to get all orders
    and render them

    Would be also nice to show loading while orders are being fetched,
    hint: http://react.semantic-ui.com/elements/loader#loader-example-text
   */

  handlePay () {
    OrdersService.clear(() => {
      console.log('TODO');
      // TODO: redirect to Homepage
    })
  }

  renderOrder (order) {
    return (
      <Order key={order.id} order={order} />
    );
  }

  render() {
    /*
     * TODO
     * Get real orders from OrdersService when component is shown from OrdersService:
     *
     * OrdersService.getAll(callback);
     *
     * callback is then called with two arguments:
     *  - error (loading may fail from time to time)
     *  - array of orders
     */
    const orders = [{id: 1}, {id: 2}].map(this.renderOrder);

    return (
      <Container>
        <Header as='h2' attached='top'>
          Your orders
        </Header>
        <Segment attached>
          <Item.Group>
            {orders}
          </Item.Group>
          <Divider section/>
          <div style={{float: 'right'}}>
            <Price price={NaN} label='Total amount' />
            <PayButton onClick={this.handlePay} />
          </div>
          <div style={{clear: 'both'}}></div>
        </Segment>
      </Container>
    );
  }
}

export default Checkout;