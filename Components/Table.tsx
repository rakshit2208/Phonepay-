import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Modal, Text, Pressable, TouchableOpacity } from 'react-native';
import { DataTable, Button } from 'react-native-paper';

const Table: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [page, setPage] = useState(0);
  const itemsPerPage = 9; // Number of items per page

  // Example data
  const data = [
    { id: 1, name: 'Radhika', phone: '1234567891', address: 'Durg', status: 'Active' },
    { id: 2, name: 'Krishna', phone: '2345678912', address: 'Delhi', status: 'Active' },
    { id: 3, name: 'Vanshika', phone: '3456789123', address: 'Mumbai', status: 'Inactive' },
    { id: 4, name: 'Teena', phone: '4567891234', address: 'Pune', status: 'Active' },
    { id: 4, name: 'Teena', phone: '4567891234', address: 'Pune', status: 'Active' },
    { id: 1, name: 'Radhika', phone: '1234567891', address: 'Durg', status: 'Active' },
    { id: 2, name: 'Krishna', phone: '2345678912', address: 'Delhi', status: 'Active' },
    { id: 3, name: 'Vanshika', phone: '3456789123', address: 'Mumbai', status: 'Inactive' },
    { id: 4, name: 'Teena', phone: '4567891234', address: 'Pune', status: 'Active' },
    { id: 4, name: 'Teena', phone: '4567891234', address: 'Pune', status: 'Active' },
  ];

  // Calculate number of pages based on data length and items per page
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Function to render rows based on current page
  const renderRows = () => {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex).map((item, index) => (
      <DataTable.Row key={index}>
        <DataTable.Cell style={styles.column}>{item.id}</DataTable.Cell>
        <DataTable.Cell style={styles.column}>{item.name}</DataTable.Cell>
        <DataTable.Cell style={styles.column}>{item.phone}</DataTable.Cell>
        <DataTable.Cell style={styles.column}>{item.address}</DataTable.Cell>
        <DataTable.Cell style={styles.column}>{item.status}</DataTable.Cell>
      </DataTable.Row>
    ));
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.searchAddRow}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Button mode="contained" onPress={() => setModalVisible(true)}>
          Add
        </Button>
      </View>
      <ScrollView horizontal>
        <View style={styles.borderContainer}>
          <DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title textStyle={styles.headerText} style={styles.column}>ID</DataTable.Title>
              <DataTable.Title textStyle={styles.headerText} style={styles.column}>Name</DataTable.Title>
              <DataTable.Title textStyle={styles.headerText} style={styles.column}>Phone No.</DataTable.Title>
              <DataTable.Title textStyle={styles.headerText} style={styles.column}>Address</DataTable.Title>
              <DataTable.Title textStyle={styles.headerText} style={styles.column}>Status</DataTable.Title>
            </DataTable.Header>

            {renderRows()}

          </DataTable>
        </View>
      </ScrollView>

      {/* Pagination controls */}
      <View style={styles.pagination}>
        <Button mode="contained" disabled={page === 0} onPress={() => setPage(page - 1)}>
          Prev
        </Button>
        <Text style={styles.pageText}>
          Page {page + 1} of {totalPages}
        </Text>
        <Button mode="contained" disabled={page === totalPages - 1} onPress={() => setPage(page + 1)}>
          Next
        </Button>
      </View>

      {/* Modal for Adding Customer */}
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              <View style={styles.header}>
                <Text style={styles.title}>Add Customer</Text>
                <Pressable
                  style={styles.closeButton}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.closeButtonText}>X</Text>
                </Pressable>
              </View>
              <View style={styles.container}>
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
                />
                <Text style={styles.label}>Gender</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Gender"
                  placeholderTextColor="#888"
                />
                <Text style={styles.label}>Address</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Address"
                  placeholderTextColor="#888"
                />
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Text style={styles.buttonText}>ADD</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  searchAddRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  borderContainer: {
    // borderWidth: 1,
    // borderColor: 'black',
  },
  container: {
    padding: 10,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
  column: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    width: '90%',
    alignItems: 'stretch', // Align items to stretch to full width
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
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
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#007FFF',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  pageText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
