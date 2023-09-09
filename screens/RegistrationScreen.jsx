import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react'

const RegistrationScreen = ({navigation}) => {
    return (
        <View>
            <View>
            <Text
                style={{
                    fontFamily: 'Roboto-Medium',
                    fontSize: 28,
                    fontWeight: '500',
                    color: '#333',
                    marginBottom: 30,
                }}>
                Register
            </Text>
            </View>

            <View style = {{
                flexDirection: 'row', 
                borderBottomColor:'#ccc', 
                borderBottomWidth:1,
                paddingBottom: 8,
                marginBottom: 25}}>
                <TextInput
                    placeholder="email"
                    keyboardType="email-address"
                />
            </View>
            <View style = {{
                flexDirection: 'row', 
                borderBottomColor:'#ccc', 
                borderBottomWidth:1,
                paddingBottom: 8,
                marginBottom: 8}}>
                <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                />
            </View>
            
            <TouchableOpacity
                onPress={() => navigation.navigate('Bottom Navigation')}
                style={{
                    backgroundColor: '#AD40AF',
                    padding: 20,
                    borderRadius: 10,
                    marginBottom: 30,
                }}>
                <Text
                    style={{
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: 16,
                    color: '#fff',
                    }}>
                    Register
                </Text>
            </TouchableOpacity>

            <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Already Registered?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Login</Text>
          </TouchableOpacity>
        </View>

        </View>
    )
}

export default RegistrationScreen

// const styles = StyleSheet.create({})