import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchResult from '../components/SearchResult';
import {useDebounceValue} from '../hooks/useDebounceValue';
import useSearchMovie from '../hooks/useSearchMovie';

export default function SearchScreen() {
  const [textValue, setTextValue] = useState('');
  const deboncedValue = useDebounceValue(textValue);
  const {movieResults} = useSearchMovie(deboncedValue);

  return (
    <KeyboardAvoidingView style={styles.keyboard} keyboardVerticalOffset={150}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerInput}>
          <TextInput
            placeholder="Buscar película..."
            style={styles.input}
            placeholderTextColor="#fff"
            autoFocus
            value={textValue}
            onChangeText={setTextValue}
          />
          <Icon size={20} name="search" style={styles.icon} />
        </View>
      </ScrollView>
      <FlatList
        data={movieResults}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <SearchResult movies={item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  containerInput: {
    marginTop: 10,
    marginHorizontal: 26,
    marginBottom: 40,
  },
  input: {
    borderRadius: 10,
    height: 42,
    borderWidth: 2,
    borderColor: '#ffffff32',
    paddingLeft: 12,
    letterSpacing: 0.5,
    fontSize: 12,
    fontWeight: '600',
    opacity: 0.5,
    color: '#fff',
  },
  icon: {
    position: 'absolute',
    right: 12,
    top: 12,
    color: '#fff',
    opacity: 0.5,
  },
});
