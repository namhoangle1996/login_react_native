import React from 'react';
import {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView, ScrollView
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

export default class Main extends Component {
  state = {
    isLogin: true,
  };
  _loginOrRegister = async () => {
    if (this.state.isLogin == true) {
      // alert("is login")
    } else {

        }
  }
    render() {
        const isLogin = this.state.isLogin ;
        return (
            <ImageBackground blurRadius={5} source={require('../images/logo1.jpg')} style={{width: '100%', height: '100%', }}>
            <SafeAreaView style={styles.areaView}>
                  <ScrollView style={styles.scrollView}>

                <View style = {styles.container}>
                <Image source={require('../images/logo1.png')} style={styles.logo}></Image>
                <Text style={{color : 'white'}}>Bring the world into your home</Text>
                <View style={styles.viewLoginRegister}>
                    <View style={styles.viewLogin}>
                        <TouchableOpacity onPress={() => {
                            this.setState({isLogin : true})
                            this._loginOrRegister()
                        }}>
                            <Text style={[styles.btnSignIn, {borderBottomColor : isLogin == true ? 'white' : '#ab9b9b26'}]}> Sign in</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewRegister}>
                        <TouchableOpacity onPress={() => {
                            this.setState({isLogin : false})
                            this._loginOrRegister()
                        }}>
                            <Text style={[styles.btnSignIn, {borderBottomColor : isLogin == false ? 'white' : '#ab9b9b26'}]}> Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.viewEmail}>
                    <View style={styles.viewInput}>
                       <Icons size={20} name="envelope" color={"white"} backgroundColor="#3b5998" style={{paddingLeft : 20}}  />
                        <TextInput placeholderTextColor="white" keyboardType="email-address"  placeholder="Email"  secureTextEntry style={styles.input}></TextInput>
                    </View>
                    <View style={styles.viewInput}>
                       <Icons size={20} name="lock" color={"white"} backgroundColor="#3b5998" style={{paddingLeft : 20}}  />
                        <TextInput placeholderTextColor="white" keyboardType="visible-password"  placeholder="Password"  secureTextEntry style={styles.input}></TextInput>
                    </View>
                    {isLogin === false && 
                    <View style={styles.viewInput}>
                       <Icons size={20} name="lock" color={"white"} backgroundColor="#3b5998" style={{paddingLeft : 20}}  />
                        <TextInput placeholderTextColor="white" keyboardType="visible-password"  placeholder="Retype Password"  secureTextEntry style={styles.input}></TextInput>
                    </View>
                    }
                </View>
                {isLogin === true && 
                <View style={{height: 30, width: '90%'}}>
                    <TouchableOpacity style={{position: 'absolute', right: 0}}>
                        <Text style={{textAlign: 'right', alignSelf:'stretch'}}>
                        FORGOT PASSWORD?
                        </Text>
                    </TouchableOpacity>
                </View>
                }

                <TouchableOpacity>
                    <Text>
                        {isLogin == true ? "SIGN IN" : "SIGN UP"}
                    </Text>
                </TouchableOpacity>
            </View>
               </ScrollView >
            </SafeAreaView  >
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    areaView : {
        flex: 1,
        marginTop : 10
    },
    scrollView : {
        marginHorizontal: 20,
    },
    container :{
        flex : 1,
        paddingTop: 150,
        alignItems : 'center',
        flexDirection : 'column'
    },
    logo: {
        width: 100,
        height: 100,
//        marginBottom : 20,
        borderRadius : 50,
    },
    viewLoginRegister :{
        height: 60,
        alignSelf : 'stretch',
        flexDirection: 'row',
        margin : 20,
        borderBottomColor : '#80808054',
        borderBottomWidth : 0.1,
    },
    viewLogin : {
        // backgroundColor : 'blue',
        width:  '50%',
        height : '100%',
    },
    viewRegister : {
        // backgroundColor : 'green',
        width:  '50%',
        height : '100%',
    },
    btnSignIn :{
       fontSize : 16,
       textAlign : 'center',
       height : '100%',
       lineHeight : 60,
        color : 'white',
        borderBottomWidth : 1,
        borderBottomColor : 'red'
    },
    viewEmail  : {
        width : '100%',
        flexDirection : 'column',
        height : 140,
        padding : 20,
        margin: 20,
        justifyContent : 'center',
        

    },
  viewInput: {
    flexDirection: 'row',
    backgroundColor : '#ffffff50',
        alignItems: 'center',
        marginTop : 10,
        borderColor : 'black',
        height : 55,
        borderRadius : 50,
      width : '100%',
      color : 'white',

    },
    input : {
        fontSize: 14,
        borderRadius : 5,
        height : 40,
         width: '100%'
    },



})
