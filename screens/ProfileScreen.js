import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { colors } from '../styles/colors';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Donor Profile</Text>
        <View style={styles.profilePicContainer}>
          <View style={styles.profilePicPlaceholder}>
             {/* Placeholder for profile image */}
          </View>
          <TouchableOpacity style={styles.editIconContainer}>
             <Text style={styles.editIcon}>✎</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Information</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Username</Text>
            <CustomInput placeholder="Username" value="Username Here" />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <CustomInput placeholder="Full Name" value="Full Name" />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Age / Birthday</Text>
            <CustomInput placeholder="Age / Birthday" value="Age / Birthday" />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Gender / Blood</Text>
            <CustomInput placeholder="Gender / Blood" value="Gender / Blood" />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Update Contact</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <CustomInput placeholder="Phone Number" value="+63 123 456 789" />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email</Text>
            <CustomInput placeholder="Email" value="jane.doe@example.net" />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Update Password</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Old Password</Text>
            <CustomInput placeholder="Old Password" secureTextEntry />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>New Password</Text>
            <CustomInput placeholder="New Password" secureTextEntry />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Confirm New Password</Text>
            <CustomInput placeholder="Confirm New Password" secureTextEntry />
          </View>
        </View>

        <CustomButton title="Update" onPress={() => {}} style={styles.updateButton} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    backgroundColor: colors.primary,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profilePicContainer: {
    position: 'relative',
    bottom: -30,
  },
  profilePicPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ddd',
    borderWidth: 3,
    borderColor: colors.white,
  },
  editIconContainer: {
    position: 'absolute',
    right: 0,
    bottom: 5,
    backgroundColor: colors.white,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  editIcon: {
    fontSize: 14,
    color: colors.darkText,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darkText,
    marginBottom: 15,
  },
  inputGroup: {
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
    marginLeft: 5,
  },
  updateButton: {
    marginTop: 10,
    width: '60%',
    alignSelf: 'center',
  }
});

export default ProfileScreen;
