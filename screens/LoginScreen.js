import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { colors } from '../styles/colors';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerImageContainer}>
           {/* Placeholder for the image in the design */}
           <View style={styles.headerPlaceholder}>
              <Text style={styles.logoText}>H</Text>
           </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.welcomeText}>Welcome, Donors!</Text>
          <Text style={styles.loginTitle}>Login to continue</Text>

          <CustomInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
          />
          <CustomInput
            placeholder="Enter your Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.forgotPasswordContainer} onPress={() => navigation.navigate('ForgotPasswordStep1')}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <CustomButton title="Login" onPress={() => navigation.replace('Home')} />

          <View style={styles.signupContainer}>
             <Text style={styles.signupText}>Don't have an account? </Text>
             <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={[styles.signupText, styles.signupLink]}>Sign up now!</Text>
             </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headerImageContainer: {
    height: 250,
    backgroundColor: '#9e5a5a', // Darker shade for the top part
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerPlaceholder: {
     width: 50,
     height: 50,
     backgroundColor: 'rgba(255,255,255,0.3)',
     justifyContent: 'center',
     alignItems: 'center',
     borderRadius: 10,
  },
  logoText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: 'bold',
  },
  contentContainer: {
    paddingHorizontal: 30,
    paddingTop: 30,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.darkText,
    marginBottom: 40,
  },
  loginTitle: {
    fontSize: 18,
    color: colors.darkText,
    alignSelf: 'flex-start',
    marginBottom: 10,
    fontWeight: '600',
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: colors.darkText,
    fontSize: 12,
    fontWeight: '600',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: colors.darkText,
    paddingTop: 20,
    width: '100%',
    justifyContent: 'center',
  },
  signupText: {
    color: colors.darkText,
    fontSize: 12,
  },
  signupLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  }
});

export default LoginScreen;
