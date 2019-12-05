import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AkilIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Icon {...this.props} />;
  }
}
