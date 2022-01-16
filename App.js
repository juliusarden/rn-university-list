/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  NativeModules,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  StatusBar,
  SafeAreaView,
} from 'react-native';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      descriptionText: null,
      locationText: '',
      universities: [
        // Dummy data for now
        {
          country: 'United States',
          web_page: 'http://www.harvard.edu/',
          domain: 'harvard.edu',
          name: 'Harvard University',
          alpha_two_code: 'US',
          estYear: '1984',
        },
        {
          country: 'United States',
          web_page: 'http://web.mit.edu/',
          domain: 'mit.edu',
          name: 'Massachusetts Institute of Technology',
          alpha_two_code: 'US',
          estYear: '1986',
        },
      ],
    };

    this.onChangeText('');
  }

  onChangeText(text) {
    // Search logic here
  }

  render() {
    return (
      <SafeAreaView
        style={styles.container}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)">
        <StatusBar
          animated={true}
          backgroundColor="white"
          barStyle="dark-content"
          hidden={false}
        />
        <Text style={styles.header}>Universities</Text>
        <TextInput
          onChangeText={text => {
            this.onChangeText(text);
          }}
          placeholder="Search by University Name or Domain Url"
          style={styles.input}
        />
        <View style={styles.list}>
          <FlatList
            data={this.state.universities}
            renderItem={({ item }) => {
              return (
                <View style={styles.item}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.subtitle}>{item.domain}</Text>
                </View>
              );
            }}
            style={styles.list}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white',
    padding: 12,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#eaeaea',
  },
  list: {
    flex: 1,
    width: '100%',
  },
  item: {
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    color: 'black',
  },
  subtitle: {
    fontSize: 18,
    color: 'grey',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
});

const App = () => {
  return <Search />;
};

export default App;
