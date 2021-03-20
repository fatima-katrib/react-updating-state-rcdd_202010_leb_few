// Code ClickityClick Component Here
import React from 'react';
export default class ClickityClick extends React.Component {
  
handleClick = () => {
  this.setState({
    hasBeenClicked: true
  }, () => console.log(this.state.hasBeenClicked))
  
 render() {
   
 }
}