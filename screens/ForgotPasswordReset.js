import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { colors } from '../styles/colors';

const ForgotPasswordReset = ({ navigation }) => {
  const [password, setPassword] = useState('');

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
            <Text style={styles.label}>Re-enter New Password</Text>
            <CustomInput
              placeholder="Enter your Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <CustomButton
            title="Continue"
            onPress={() => navigation.navigate('Login')}
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
    marginBottom: 10,
  },
});

export default ForgotPasswordReset;
