import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Footer = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>Copyright</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: 'brown',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingBottom: 10,
      position: 'relative',
    },
    textStyle: {
      fontSize: 20,
      color: 'black',
      textAlign: 'center'
    }
};
export default Footer;
