import React, { Component } from "react";
import BottomTabNavigator from "./components/BottomTabNavigator";
import * as Font from 'expo-font';
import {Rajdhani_600SemiBold} from '@expo-google-fonts/rajdhani';


export default class App extends Component {
  constructor(){
    super()
    this.state={
      fontLoaded:false
    }
  }
  async loadsFont(){
    await Font.loadAsync({
      Rajdhani_600SemiBold:Rajdhani_600SemiBold
    })
    this.setState({fontLoaded:true})
  }
  componentDidMount(){
    this.loadsFont();
  }
  render() {
    const {fontLoaded} =this.state
    if(fontLoaded){
      return <BottomTabNavigator />;
    }
   return null;
  }
}
