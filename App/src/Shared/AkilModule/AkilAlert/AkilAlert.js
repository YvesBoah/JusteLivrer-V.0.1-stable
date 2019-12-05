import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class AkilAlert extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={[
          styles.container,
          styles[this.props.type] ? styles[this.props.type] : styles['success'],
        ]}>
        {this.props.title && (
          <Text style={styles.title}>{this.props.title}</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  error: {
    borderColor: '#f44336',
    backgroundColor: '#f44336',
  },
  success: {
    borderColor: '#087f23',
    backgroundColor: '#087f23',
  },
  container: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 8,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
  },
});
