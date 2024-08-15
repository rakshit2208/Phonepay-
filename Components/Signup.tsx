import React from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const Signup = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
        {/* <Image 
        source={{uri: 'https://img.freepik.com/premium-vector/login-concept-illustration_65141-421.jpg'}} 
        style={styles.illustration} 
      /> */}
      <Text style={styles.title}>Signup</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#888"
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#888"
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        placeholderTextColor="#888"
        secureTextEntry
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#888"
        secureTextEntry
      />
       <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.footerLink}>Login</Text>
        </TouchableOpacity>
      </View>

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
    marginTop:40
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  footerText: {
    fontSize: 16,
    color: '#333',
  },
  footerLink: {
    fontSize: 16,
    color: '#007BFF',
    marginLeft: 4,
  },
});

export default Signup;
