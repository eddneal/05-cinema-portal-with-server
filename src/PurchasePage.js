import React, {Component, PropTypes} from 'react';
import {
  Container,
  Grid,
  Image,
  Segment,
  Header,
  Input,
  Divider
} from 'semantic-ui-react';
import BuyButton from './buttons/BuyButton';
import Price from './utils/Price';
// import OrdersService from './service/OrdersService';

/**
 * TODO
 *
 * - Use "id" from url to show correct movie
 * - Handle situations where user decides to buy more than one ticket
 * - Try to disallow buying more seats than it's available for the movie
 */

class PurchasePage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      noOfTickets: 1
    };
  }

  handleBuy () {
    console.log('TODO', 'buy');
    /*
     TODO handle clicking on BUY button

     save order by calling OrdersService.save(order, callback)
     and then redirect to the homepage

     Order object should look like this:

     const order = {
        movie: {
          id,
          title,
          image
        },
        price,
        date
     };
     */
  }

  render () {
    const {
      noOfTickets
    } = this.state;

    return (
      <Container>
        <Header as='h2' attached='top'>
          Movie title
        </Header>
        <Segment attached>
          <Grid>
            <Grid.Column width={4}>
              <Image
                src='https://react.semantic-ui.com/assets/images/wireframe/image.png'/>
            </Grid.Column>
            <Grid.Column width={8}>
              <Image
                src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png'/>
            </Grid.Column>
            <Grid.Column width={4}>
              <div>
                <Input
                  value={noOfTickets}
                  onChange={(e) => console.log('TODO', e.target.value)}
                  size='mini'
                  action={<BuyButton onClick={this.handleBuy}/>}
                  type='number'
                />
              </div>
              <Divider hidden/>
              <div>
                <Price price={NaN}/>
              </div>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

PurchasePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default PurchasePage;
