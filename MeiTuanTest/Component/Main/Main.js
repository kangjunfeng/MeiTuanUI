/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Platform,   // 判断当前运行的系统
    Navigator
}from 'react-native';

import Home from '../Home/Home';
import Merchant from '../Merchant/Merchant';
import Mine from '../Mine/Mine';
import Misc from '../Misc/Misc';


export default class Main  extends  Component{
    constructor(prop){
        super(prop);
        this.state ={
            selectedTab:"home"
        }
    }

    render(){
        return(
            <TabNavigator>
                {/*{首页}*/}
                {this.renderTabBarItem("首页",'icon_tabbar_homepage','icon_tabbar_homepage_selected',"home",<Home/>)}

                {/*{商家}*/}
                {this.renderTabBarItem("商家",'icon_tabbar_merchant_normal','icon_tabbar_merchant_selected',"merchant",<Merchant/>)}

                {/*{我的}*/}
                {this.renderTabBarItem("我的",'icon_tabbar_merchant_normal','icon_tabbar_merchant_selected',"mine",<Mine/>)}

                {/*{更多}*/}
                {this.renderTabBarItem("更多",'icon_tabbar_misc','icon_tabbar_misc_selectedg',"misc",<Misc/>)}

            </TabNavigator>
        )
    }

    renderTabBarItem(title, iconName, selectedIconName, selectedTab, componentName){
        return(
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                titleStyle={styles.tabNormalStyle}
                selectedTitleStyle={styles.tabSelectedStyle}
                renderIcon={() => <Image style={styles.iconStyle} source={{uri:iconName}} />}
                renderSelectedIcon={() => <Image style={styles.iconStyle} source={{uri:selectedIconName}} />}
                onPress={() => this.setState({ selectedTab: selectedTab })}
            >
                {componentName}
            </TabNavigator.Item>
        )
    }

};

const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25
    },

    tabNormalStyle:{
        color:'black'
    },

    tabSelectedStyle:{
        color:'orange'
    }
});

