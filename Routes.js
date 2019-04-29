import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import StatsShow from '/Users/briancurran/personalProjects/nativeProjects/bankApp/Screens/StatsShow.js';
import AccountShow from '/Users/briancurran/personalProjects/nativeProjects/bankApp/Screens/AccountShow.js';
const Project = createStackNavigator({
  AccountShow: {
    screen: AccountShow,
  },
  StatsShow: {
    screen: StatsShow,
  },
});
export default createAppContainer(Project);
