import React from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const AddCustomer = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
        {/* <Image 
        source={{uri: 'https://img.freepik.com/premium-vector/login-concept-illustration_65141-421.jpg'}} 
        style={styles.illustration} 
      /> */}
      <Text style={styles.title}>Add Customer</Text>
      <Text style={styles.label}>Customer ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter ID"
        placeholderTextColor="#888"
      />
      <Text style={styles.label}>Customer Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        placeholderTextColor="#888"
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        placeholderTextColor="#888"
        secureTextEntry
      />
      <Text style={styles.label}>Gender</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Gender"
        placeholderTextColor="#888"
        secureTextEntry
      />
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Address"
        placeholderTextColor="#888"
        secureTextEntry
      />
       <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>

      

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    // backgroundColor: '#fff',
    marginTop:25
  },
  illustration: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    // textAlign: 'center',
    marginBottom: 24,
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});

export default AddCustomer;
