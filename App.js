import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  TextInput, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import Counter from './Counter';
import Profile from './Profile'; 

export default function App() {
  const [name, setName] = useState('Anonymous');
  const [age, setAge] = useState(0);
  
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handlePassValue = () => {
    if (inputText.trim() !== '') {
      setName(inputText);
    } else {
      setName('Your Name');
    }
    
    setAge(count);
    setInputText('');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      
      <Profile 
        name={name} 
        age={age} 
      />

      <Counter 
        value={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />

      <TouchableOpacity style={styles.passValueButton} onPress={handlePassValue}>
        <Text style={styles.buttonText}>PASS VALUE</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Input your name here"
        placeholderTextColor="#999"
        value={inputText}
        onChangeText={setInputText}
      />
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  passValueButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    width: 150,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 200,
    color: '#000',
    backgroundColor: '#fff',
  },
});