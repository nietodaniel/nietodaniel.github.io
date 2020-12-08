import React from 'react';
import DashboardRoutes from './DashboardRoutes';


class MainContainer extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.AllowReRender(nextProps, this.props);
  }
  
  render() {
    return (
      <DashboardRoutes locale={this.props.locale} />
    );
  }
} 

export default MainContainer;
