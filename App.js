import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './Counter';

export default function App() {
  const [count, setCount] = useState(0);
  const hadleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Counter value={count}
        handleDecrement={handleDecrement}
        handleIncrement={hadleIncrement}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});