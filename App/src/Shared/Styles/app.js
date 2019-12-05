const appStyle = new (class StyleProvider {
  getStyle() {
    return {
      icon: {
        color: 'white',
        fontSize: 22,
      },
      bloc1: {
        height: 300,
        backgroundColor: '#E33F3F',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 5,
      },
      imageBackground: {
        width: '100%',
      },
      squareIcon: {
        width: 18,
        height: 20,
        top: 5,
        left: -9,
      },
      containerModal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalBloc: {
        height: 320,
        width: 320,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
          width: 20,
          height: 20,
        },
        shadowColor: 'black',
        shadowOpacity: 2,
        elevation: 3,
        backgroundColor: 'white',
        borderRadius: 10,
      },
      textCenter: {
        textAlign: 'center',
      },
      button: {
        width: 200,
        height: 40,
        alignSelf: 'center',
      },
      textButton: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      colorWhite: {
        color: 'white',
      },
      buttonTransparentRegister: {
        backgroundColor: '#00AC7B',
        marginTop: 20,
      },
      bold: {
        fontWeight: 'bold',
      },
      sideBar: {
        head: {
          marginTop: 20,
        },
        list: {
          borderBottomWidth: 0,
          marginTop: -10,
        },
        icon: {
          fontSize: 18,
          top: 5,
          left: -8,
        },
        text: {
          fontSize: 14,
          top: 6,
        },
      },
      errorInput: {
        color: 'red',
        fontSize: 13,
        top: 3,
        left: 15,
        fontStyle: 'italic',
      },
      color1: {
        color: '#F7941E',
      },
      color2: {
        color: '#00AC7B',
      },
      color4: {
        color: '#78849D',
      },
      textConfirmation: {
        textAlign: 'center',
        color: '#A4A4A4',
        width: 250,
        marginTop: 20,
        fontSize: 18,
      },
      textModal: {
        textAlign: 'center',
        color: '#A4A4A4',
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 18,
      },
      containerConfirmation: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      justifyContent: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    };
  }
})();
export default appStyle;
