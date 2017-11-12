/**
 * React Native App calculator
 * https://github.com/facebook/RNcalculator
 * authored by omar hassan
 */

import React, { Component } from 'react'
import { Text, StyleSheet, TouchableHighlight } from 'react-native'

export default class InputButton extends Component {
   render() {
      return (
         <TouchableHighlight
            style={[
               Style.inputButton,
               this.props.highlight ? Style.inputButtonHighlighted : null
            ]}
         >
            <Text style={Style.inputButtonText}>{this.props.value}</Text>
         </TouchableHighlight>
      )
   }
}

const Style = StyleSheet.create({
   inputButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0.5,
      borderColor: '#91AA9D'
   },

   inputButtonText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'white'
   },
   inputButtonHighlighted: {
      backgroundColor: '#193441'
   }
})
