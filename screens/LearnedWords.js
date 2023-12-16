import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LearnedWords = () => {
  return (
    <View style={styles.container}>
      <Text>Boş Ekran</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LearnedWords;