import axios from 'axios';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();

  const register = async () => {
    if (email === '' || password === '' || phone === '') {
      Alert.alert(
        'Invalid Details',
        'Please enter all the credentials',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );
    } else {
      try {
        const response = await axios.post('/register', {
          email,
          name,
          password,
          phone
        });
        console.log(response.data); 
        navigation.navigate('Login');
      } catch (error) {
        console.error(error);
        Alert.alert(
          'Registration Failed',
          'Please try again later',
          [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed')
            }
          ],
          { cancelable: false }
        );
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={'position'} style={{ flex: 1 }}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Register</Text>
          <Text style={styles.subtitle}>Create an Account</Text>
        </View>

        <View style={styles.formContainer}>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter your email"
              style={styles.input}
            />
          </View>

          <View>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              value={name}
              onChangeText={(text) => setFullName(text)}
              placeholder="Enter your full name"
              style={styles.input}
            />
          </View>

          <View>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Enter your phone number"
              style={styles.input}
            />
          </View>

          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Enter your password"
              secureTextEntry={true}
              style={styles.input}
            />
          </View>
        </View>

        <Pressable onPress={register} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>

        <Pressable onPress={() => navigation.goBack()} style={styles.link}>
          <Text style={styles.linkText}>Already have an account? Sign In</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
    alignItems: 'center'
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  title: {
    color: '#003580',
    fontSize: 17,
    fontWeight: '700'
  },
  subtitle: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: '500'
  },
  formContainer: {
    marginTop: 50
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: 'gray'
  },
  input: {
    fontSize: 18,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 10,
    width: 300
  },
  button: {
    width: 200,
    backgroundColor: '#003580',
    padding: 15,
    borderRadius: 7,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  },
  link: {
    marginTop: 20
  },
  linkText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 17
  }
});

export default RegisterScreen;