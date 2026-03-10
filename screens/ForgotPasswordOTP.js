import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native';
import CustomButton from '../components/CustomButton';
import { colors } from '../styles/colors';

const ForgotPasswordOTP = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    // Logic to move to next input could be added here
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerImageContainer}>
           <View style={styles.headerPlaceholder}>
              <Text style={styles.logoText}>H</Text>
           </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Forgot Password?</Text>

          <View style={styles.inputSection}>
            <Text style={styles.label}>Enter the OTP sent to your email or phone number</Text>
            <View style={styles.otpRow}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  style={styles.otpInput}
                  value={digit}
                  onChangeText={(text) => handleChange(text, index)}
                  keyboardType="numeric"
                  maxLength={1}
                />
              ))}
            </View>
          </View>

          <CustomButton
            title="Continue"
            onPress={() => navigation.navigate('ForgotPasswordReset')}
          />
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
    height: 150,
    backgroundColor: '#9e5a5a',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerPlaceholder: {
     width: 40,
     height: 40,
     backgroundColor: 'rgba(255,255,255,0.3)',
     justifyContent: 'center',
     alignItems: 'center',
     borderRadius: 8,
  },
  logoText: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
  },
  contentContainer: {
    paddingHorizontal: 30,
    paddingTop: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.darkText,
    marginBottom: 60,
    alignSelf: 'flex-start',
  },
  inputSection: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: colors.darkText,
    fontWeight: '600',
    marginBottom: 20,
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  otpInput: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.darkText,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});

export default ForgotPasswordOTP;
