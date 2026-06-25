import { useEffect, useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';


export default function HomeScreen() {

  const [age, setAge] = useState('');
  const [submitage, setSubmitage] = useState('');
  const [isGrid, setIsGrid] = useState(false);
  let [count, setcount] = useState(0);
  const ageInput = Number(age);
  const handleAge = () => {

    if (ageInput > 100) {
      Alert.alert('Invalid input', 'please enter valid age');
      return;
    }
    setSubmitage(age);
    setIsGrid(!isGrid)
  }
  const ageIncrement = () => {
    if (ageInput < 50) {
      setcount(ageInput => ageInput + 1)
      return;
    }
  }

  useEffect(() => {
    ageIncrement;
  }, [count]);

  const Detail = [
    { id: 1, name: 'varshitha', job: 'Software Engineer' },
    { id: 2, name: 'shalini', job: 'Software QA Engineer' },
    { id: 3, name: 'sudha', job: 'Software Developer' }
  ];



  return (
    <View style={styles.titleContainer}>
      <Text>Name: Varshitha</Text>
      <Text>Role: React Native Developer</Text>
      <Text>Experience: ReactJS</Text>
      <TextInput placeholder='enter your age'
        style={styles.input}
        keyboardType='numeric'
        value={age}
        onChangeText={setAge}
      ></TextInput>
      <Button title={isGrid ? 'submit' : 'change'} onPress={handleAge} />
      {
        submitage ? (
          <Text>your age is {submitage}</Text>
        ) : null
      }

      <FlatList
        data={Detail}
        key={isGrid ? 'list' : 'grid'}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 20 }}>
            {`${item.name} --> ${item.job}`}
            {/* {item.name} --> {item.job} */}
          </Text>
        )}
        keyExtractor={(item) => item.id}
        // horizontal
        numColumns={isGrid ? 2 : 1}
      />

      <Button title='age increment' onPress={ageIncrement} />
      <Text>{`age is increased to ${count}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
    marginTop: 30
  },
  input: {
    width: 200,
    borderWidth: 1,
    padding: 5,
    borderRadius: 3

  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
