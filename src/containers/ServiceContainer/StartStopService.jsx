import React, {Component} from 'react';
import NavItem from 'react-bootstrap/lib/NavItem';
import Service from '../../components/Service/Service';


export default class StartStopService extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    if (this.props.serviceState == true) {
      return <Service serviceState={true} toggleService={this.props.toggleService}/>
    }
    else {
      return <Service serviceState={false} toggleService={this.props.toggleService}/>
    }
  }
}