import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  renderDish(dish) {
    return dish == null ? <div className="row col-12 col-md-5 m-1"></div> :
      <div className="row col-12 col-md-5 m-1">
        <Card>
          <CardImg width='100%' src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
  }

  render() {
    const { dish } = this.props;
    return (this.renderDish(dish));
  }
}

export default DishDetailComponent;