import React, { Component } from 'react';
// import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Menu from "./MenuComponent";
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Dishdetail from './DishdetailComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter(dish => dish.featured)[0]}
          leader={this.props.leaders.filter(leader => leader.featured)[0]}
          promotion={this.props.promotions.filter(promotions => promotions.featured)[0]}

        />
      )
    };

    const DishWithId = ({ match }) => {
      const dishId = parseInt(match.params.dishId);
      return (
        <Dishdetail
          dish={this.props.dishes.filter(dish => dish.id === dishId)[0]}
          comments={this.props.comments.filter(comment => comment.dishId === dishId)}
        />
      )
    }



    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu/" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
          <Route exact path="/contactus" component={() => <Contact />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );

  }
}

export default withRouter(connect(mapStateToProps)(Main));
