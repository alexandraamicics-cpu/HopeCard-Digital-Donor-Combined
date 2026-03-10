import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { colors } from '../styles/colors';

const SignupScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerImageContainer}>
           <View style={styles.headerPlaceholder}>
              <Text style={styles.logoText}>H</Text>
           </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.signupTitle}>Sign up</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Create Account</Text>
            <CustomInput
              placeholder="Name or nickname"
              value={formData.fullName}
              onChangeText={(text) => setFormData({...formData, fullName: text})}
            />
            <CustomInput
              placeholder="Enter your email"
              value={formData.email}
              onChangeText={(text) => setFormData({...formData, email: text})}
            />
            <CustomInput
              placeholder="Enter your phone number"
              value={formData.phone}
              onChangeText={(text) => setFormData({...formData, phone: text})}
            />
            <CustomInput
              placeholder="Enter your password"
              value={formData.password}
              onChangeText={(text) => setFormData({...formData, password: text})}
              secureTextEntry
            />
            <CustomInput
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChangeText={(text) => setFormData({...formData, confirmPassword: text})}
              secureTextEntry
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Upload ID for Verification</Text>
            <View style={styles.uploadRow}>
              <View style={styles.uploadBox}>
                <Text style={styles.uploadLabel}>1 Front page of ID</Text>
                <TouchableOpacity style={styles.uploadArea}>
                   <View style={styles.uploadIconPlaceholder} />
                   <Text style={styles.uploadSubtext}>Upload a photo of your identification card (e.g., ID, DL, Passport)</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.uploadBox}>
                <Text style={styles.uploadLabel}>2 Back page of ID</Text>
                <TouchableOpacity style={styles.uploadArea}>
                   <View style={styles.uploadIconPlaceholder} />
                   <Text style={styles.uploadSubtext}>Upload a photo of your identification card (e.g., ID, DL, Passport)</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <CustomButton title="Finish" onPress={() => {}} />

          <View style={styles.loginContainer}>
             <Text style={styles.loginText}>Already have an account? </Text>
             <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.loginText, styles.loginLink]}>Login here!</Text>
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
    height: 120,
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
    paddingHorizontal: 25,
    paddingTop: 20,
    alignItems: 'center',
  },
  signupTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.darkText,
    marginBottom: 20,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: colors.darkText,
    fontWeight: '700',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  uploadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uploadBox: {
    width: '48%',
  },
  uploadLabel: {
    fontSize: 12,
    color: colors.darkText,
    marginBottom: 5,
  },
  uploadArea: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadIconPlaceholder: {
    width: 30,
    height: 30,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginBottom: 5,
  },
  uploadSubtext: {
    fontSize: 8,
    color: '#999',
    textAlign: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 30,
  },
  loginText: {
    color: colors.darkText,
    fontSize: 12,
  },
  loginLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  }
});

export default SignupScreen;
