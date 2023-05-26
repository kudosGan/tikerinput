import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const App = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://192.168.7.10:8088/API/?Function=OverlayInput4In&input=DoNotEdit', { message: inputText });// http://192.168.7.10:8088/API/?Function=OverlayInput4In&input=DoNotEdit
      if (response.status === 200) {
        Alert.alert('Submitted', inputText);
        setInputText('');
      } else {
        Alert.alert('Error', 'Failed to submit');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleDelete = () => {
    setInputText('');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ width: '80%', height: 40, borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Enter text"
        value={inputText}
        onChangeText={handleInputChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};

export default App;