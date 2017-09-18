import React ,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Text,
}from 'react-native';


var Dimensions =require('Dimensions');
var {Width,Height} = Dimensions.get('window');

var MiddleData = require('../../LocalData/HomeTopMiddleLeft.json');
var CommonMiddleView = require('./HomeCommonMiddleView');

var MiddleView = React.createClass({
    render(){
      return(
          <View style={styles.container}>
              {/*{左边}*/}
              {this._renderLeft()}
              {/*{右边}*/}
              <View>
                  {this._renderRight()}
              </View>
          </View>
      )
    },


    _renderLeft() {

        // 拿到对应的数据
        var data = MiddleData.dataLeft[0];

        return(
            <TouchableOpacity onPress={()=>{alert('0')}}>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:data.img1}} style={styles.leftImageStyle}/>
                    <Image source={{uri:data.img2}} style={styles.leftImageStyle} />
                    <Text style={{color:'gray'}}>{data.title}</Text>
                    <View style={{flexDirection:'row', marginTop:5}}>
                        <Text style={{color: 'blue', marginRight:5}}>{data.price}</Text>
                        <Text style={{color: 'orange', backgroundColor:'yellow'}}>{data.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },


    _renderRight(){
        var rightData =MiddleData.dataRight;
        var  itemArr =[];


        for(var i =0;i<rightData.length;i++) {
           itemArr.push(
               <CommonMiddleView
                   title ={rightData[i].title}
                   subTitle={rightData[i].subTitle}
                   rightIcon={rightData[i].rightImage}
                   titleColor={rightData[i].titleColor}
                   key={i}/>
           )
        }

        return itemArr;
    }

});

const styles =StyleSheet.create({
    container:{
        marginTop:15,
        // 改变主轴的方向
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',

        backgroundColor:'white'
    },

    leftViewStyle:{
        width:Width * 0.5,
        height:119,
        marginRight:1,

        // 水平居中
        alignItems:'center',
        justifyContent:'center'
    },

    leftImageStyle:{
        width:120,
        height:30,

        // 内容模式
        resizeMode:'contain',
    }
});

module.exports =MiddleView;