import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import TickerComponent from './Components/TickerComponent';

const App = () => {
  const [tickerInput, setTickerInput] = useState('');

  const handleTickerSubmit = () => {
    // Assuming your Vmix HTTP URL is stored in a variable called `vmixUrl`
    const vmixUrl = 'YOUR_VMIX_HTTP_URL';
    axios
      .post(vmixUrl, { tickerText: tickerInput })
      .then(response => {
        // Handle successful ticker submission
        Alert.alert('Ticker submitted successfully!');
      })
      .catch(error => {
        // Handle error
        console.error('Error submitting ticker:', error);
      });
  };

  const handleTickerDelete = () => {
    // Assuming your Vmix HTTP URL for deleting the ticker is stored in a variable called `vmixDeleteUrl`
    const vmixDeleteUrl = 'YOUR_VMIX_DELETE_URL';
    axios
      .delete(vmixDeleteUrl)
      .then(response => {
        // Handle successful ticker deletion
        Alert.alert('Ticker deleted successfully!');
      })
      .catch(error => {
        // Handle error
        console.error('Error deleting ticker:', error);
      });
  };

  const handlePlayTicker = () => {
    // Assuming your Vmix HTTP URL for playing the ticker overlay is stored in a variable called `vmixPlayTickerUrl`
    const vmixPlayTickerUrl = 'YOUR_VMIX_PLAY_TICKER_URL';
    axios
      .get(vmixPlayTickerUrl)
      .then(response => {
        // Handle successful ticker play
        Alert.alert('Ticker started playing!');
      })
      .catch(error => {
        // Handle error
        console.error('Error playing ticker:', error);
      });
  };

  const handleStopTicker = () => {
    // Assuming your Vmix HTTP URL for stopping the ticker overlay is stored in a variable called `vmixStopTickerUrl`
    const vmixStopTickerUrl = 'YOUR_VMIX_STOP_TICKER_URL';
    axios
      .get(vmixStopTickerUrl)
      .then(response => {
        // Handle successful ticker stop
        Alert.alert('Ticker stopped playing!');
      })
      .catch(error => {
        // Handle error
        console.error('Error stopping ticker:', error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Please Enter your message here "
          value={tickerInput}
          onChangeText={text => setTickerInput(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Submit Ticker" onPress={handleTickerSubmit} />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Delete Ticker" onPress={handleTickerDelete} />
      </View>
      <View style={styles.buttonContainer}>
         <TickerComponent playTicker={handlePlayTicker}/>
      </View>
      <View style={styles.buttonContainer}>
         <TickerComponent stopTicker={handleStopTicker} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    textAlign: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
  },
  buttonContainer: {
    marginTop: 10,
    width: 200,
  },
  button: {
    marginBottom: 10,
  },
});

export default App;

