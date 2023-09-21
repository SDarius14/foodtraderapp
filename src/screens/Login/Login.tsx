import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Button, Icon, Input, Text } from '@ui-kitten/components';

const wfcLogo = require('../../assets/images/wfc-logo.jpeg');
const banner = require('../../assets/images/banner1.png');

const AlertIcon = props => <Icon {...props} name="alert-circle-outline" />;

const Login = () => {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>
          Should contain at least 8 symbols
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: 'orange',
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity>
          <Icon
            style={{ height: 30, padding: 10, tintColor: '#F6F1E9' }}
            name="menu-2-outline"
          />
        </TouchableOpacity>
        <View
          style={{
            height: 60,
            width: 60,
            backgroundColor: 'white',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            style={{
              height: 40,
              width: 40,
              backgroundColor: 'white',
              padding: 10,
            }}
            source={wfcLogo}
          />
        </View>
        <TouchableOpacity>
          <Icon
            style={{ height: 30, padding: 10, tintColor: '#F6F1E9' }}
            name="shopping-cart-outline"
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.5 }}>
        <ImageBackground
          source={banner}
          resizeMode="cover"
          style={{ flex: 1 }}
        ></ImageBackground>
      </View>
      <View style={styles.loginContainer}>
        <View
          style={{
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text category="h1">Login</Text>
          <Text category="s1">Please sign in to continue</Text>
        </View>

        <Input
          value={value}
          label="Email"
          placeholder="Please enter your email address"
          onChangeText={nextValue => setValue(nextValue)}
          style={{ backgroundColor: '#F4F4F4' }}
        />
        <Input
          value={value2}
          label="Password"
          placeholder="Please enter your password"
          caption={renderCaption}
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={nextValue => setValue2(nextValue)}
          style={{ backgroundColor: '#F4F4F4' }}
        />
        <Button style={{ marginTop: 10 }} status="warning">
          Login
        </Button>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text category="p1">Don't have an account?</Text>
          <Text style={{ color: 'orange' }} category="p1">
            {' '}
            Register here!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'opensans-regular',
    color: '#8F9BB3',
  },
  loginContainer: {
    flex: 1,
    backgroundColor: 'white', // Background color of the login container
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 20, // Optional: Adjust these values to style your container
    borderTopRightRadius: 20, // Optional: Adjust these values to style your container
    marginTop: -20,
    gap: 5,
  },
});

export default Login;
