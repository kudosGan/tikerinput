import React from 'react';
import { View, Button } from 'react-native';

const TickerComponent = ({ playTicker, stopTicker }) => {
  return (
    <View>
      <Button title="Play Ticker" onPress={playTicker} />
      <Button title="Stop Ticker" onPress={stopTicker} />
    </View>
  );
};

export default TickerComponent;
