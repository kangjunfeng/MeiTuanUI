import React,{Component}from 'react';
import {
    AppRegistry,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text,
    View
}from 'react-native';


var Dimensions =require('Dimensions');
var {Width,Height} = Dimensions.get('window');

var TopData =require('../../LocalData/TopMenu.json');
var TopListView =require('./HomeTopListView');


var  MenuScrollerView =React.createClass({
    getInitialState(){
        return{
            activePage: 0
        }
    },


    render() {
        return (
            <View style={menuStyles.container}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.onScrollAnimationEnd}
                >
                    {this.renderScrollerItem()}
                </ScrollView>
                <View style={menuStyles.indicatorStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        )
    },


    onScrollAnimationEnd(e){
        var currentPage =Math.floor(e.nativeEvent.contentOffset.x/Width);

        this.setState({
            activePage:currentPage
        });

    },

    renderScrollerItem(){
        var listItem =[];
        var dataArray =TopData.data;
        for(var i=0; i<dataArray.length; i++){
            listItem.push(
                <TopListView key={i} dataArr={dataArray[i]}/>
            );
        }
        // 返回组件数组
        return listItem;
    },

    renderIndicator(){
        var indicatorArr =[],style;
        for(var i =0;i<2; i++){
            style=(i === this.state.activePage)?{color:'orange'}:{color:"gray"};
            indicatorArr.push(
                <Text key={i} style={[{fontSize:25},style]}/>
            )
        }
        return indicatorArr;
    }
});

const menuStyles =StyleSheet.create({
    container: {
        backgroundColor:'white',
    },

    indicatorStyle:{
        flexDirection:'row',
        justifyContent:'center'
    }
});

module.exports = MenuScrollerView;