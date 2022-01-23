import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Main from './src/components';
import customData from './data';

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Main contactsData={customData} title={'Contacts'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
});

export default App;
