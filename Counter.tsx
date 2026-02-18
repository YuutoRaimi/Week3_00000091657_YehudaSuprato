import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

interface iCounter {
  handleIncrement: () => void;
  handleDecrement: () => void;
  value: number;
}

const Counter = ({
  handleIncrement,
  handleDecrement,
  value
}: iCounter) => {
  return (
    <View style={styles.counterContainer}>
      <Text style={styles.valueText}>{value}</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleIncrement}>
        <Text style={styles.buttonText}>INCREMENT</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={handleDecrement}>
        <Text style={styles.buttonText}>DECREMENT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    alignItems: 'center',
    width: 150,
  },
  valueText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000000',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 1,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  }
});

export default Counter;