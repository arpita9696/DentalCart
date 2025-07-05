import {
  Alert,
  Image,
  Linking,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

import OutlinedInput from '../../components/OutlinedInput';
import { useLogin } from '../../hooks/useAuth';

const LoginScreen = () => {
  const [email, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const { login } = useLogin();
  const handleLogin = async () => {
    try {
      const data = await login({
        recipient: email,
        action: 'login',
        verification_type: 'password',
        authentication_type: 'email',
        credential: password,
        new_password: '',
      });
      Alert.alert('Success', JSON.stringify(data.message));
    } catch (err: any) {
      Alert.alert('Error', err.message);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FF712B'} />
      <Image
        source={require('../../assets/png/background.png')}
        style={{ height: '60%', backgroundColor: '#FF712B', width: '100%' }}
        resizeMode="stretch"
      />
      <View
        style={{
          position: 'absolute',
          height: '40%',
          bottom: 120,
          backgroundColor: 'white',
          width: '100%',
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../../assets/png/l2.png')}
            style={{ height: 69, width: 177 }}
          />
          <Image
            source={require('../../assets/png/l1.png')}
            style={{ height: 44, width: 245 }}
          />

          <View style={{ width: '90%', marginTop: 20 }}>
            <OutlinedInput
              label="Mobile Number"
              placeholder="Enter mobile number"
              value={email}
              onChangeText={setMobile}
              keyboardType="number-pad"
            />
            <OutlinedInput
              label="Password"
              placeholder="Password"
              secureTextEntry={secure}
              value={password}
              onChangeText={setPassword}
              // keyboardType="number-pad"
            />
          </View>
          <View style={styles.optionsRow}>
            <TouchableOpacity>
              <Text style={styles.linkText}>Use OTP</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.linkText}>Forgot password</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
          <View style={styles.helpText}>
            <Text>Need help? </Text>
            <Text
              style={styles.linkText}
              onPress={() => Linking.openURL('https://wa.me/')}
            >
              Connect with us 💬
            </Text>
          </View>

          <Text style={styles.termsText}>
            By logging or signing up, you agree to our{' '}
            <Text style={styles.linkText}>Terms & Policy</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
    color: '#144c7c',
  },
  subHeading: {
    textAlign: 'center',
    marginBottom: 20,
  },
  coinText: {
    fontWeight: 'bold',
    color: '#0066cc',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  linkText: {
    color: '#1e90ff',
  },
  button: {
    backgroundColor: '#144c7c',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 25,
    width: '90%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  helpText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  termsText: {
    textAlign: 'center',
    color: '#555',
    fontSize: 12,
  },
});
