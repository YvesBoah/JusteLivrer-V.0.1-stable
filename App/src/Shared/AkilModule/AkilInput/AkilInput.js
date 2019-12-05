import React from 'react';
import {TextInput, View, Text, StyleSheet, Alert} from 'react-native';
import {Button} from 'native-base';
import AkilIcon from '../AkilIcon/AkilIcon';

const FOCUS = 'focus';
const BLUR = 'blur';
const STATUS = {
  BORDER_INVALID: 'borderInvalid',
  BORDER_VALID: 'borderValid',
  TEXT_INVALID: 'textInvalid',
  TEXT_VALID: 'textValid',
};
export default class AkilInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: true,
      style: BLUR,
      border: STATUS.BORDER_VALID,
      text: STATUS.TEXT_VALID,
      password: this.props.password,
      click: 0,
    };
  }

  onFocus(status) {
    if (this.props.value) {
      this.setState({style: FOCUS});
    } else {
      this.setState({style: status});
    }
    this.validateInput();
  }

  validateInput() {
    if (this.state.click === 0) {
      this.state.click++;
    } else {
      if (
        this.props.required &&
        (this.props.value === null || this.props.value === '')
      ) {
        this.setState({
          border: STATUS.BORDER_INVALID,
          text: STATUS.TEXT_INVALID,
        });
      } else {
        this.setState({border: STATUS.BORDER_VALID, text: STATUS.TEXT_VALID});
      }
    }
  }

  toggle() {
    this.setState({password: !this.state.password});
  }

  render() {
    return (
      <View style={[styles.inputBorder, styles[this.state.border]]}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <AkilIcon style={styles.icon} name={this.props.icon} />
          </View>
          <View style={styles.inputConainter}>
            <View style={styles[this.state.style]}>
              <Text style={styles[this.state.text]}>{this.props.title}</Text>
            </View>
            <TextInput
              {...this.props}
              onFocus={() => this.onFocus(FOCUS)}
              onBlur={() => this.onFocus(BLUR)}
              secureTextEntry={
                this.props.password ? this.state.password : false
              }
            />
          </View>
          {this.props.eyes && (
            <View style={styles.iconRightContainer}>
              <Button onPress={() => this.toggle()} transparent>
                <AkilIcon style={styles.eye} name={'eye-slash'} />
              </Button>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBorder: {
    height: 60,
    borderWidth: 1.5,
    borderRadius: 6,
    margin: 5,
  },
  borderValid: {
    borderColor: '#C8D7D8',
  },
  borderInvalid: {
    borderColor: '#FC252C',
  },
  textValid: {
    color: '#434343',
  },
  textInvalid: {
    color: '#FC252C',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  iconRightContainer: {
    width: '10%',
  },
  iconContainer: {
    width: '10%',
    alignItems: 'flex-end',
  },
  inputConainter: {
    width: '80%',
  },
  eye: {fontSize: 20, top: 5, right: 5},
  icon: {fontSize: 20, top: 16, right: 5},
  focus: {
    top: -12,
    position: 'absolute',
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  blur: {
    top: 15,
    position: 'absolute',
  },
});
