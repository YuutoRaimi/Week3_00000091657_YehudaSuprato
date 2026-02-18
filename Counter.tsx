import {Button, Text, View} from 'react-native';

interface iCounter{
    handleIncrement: () => void;
    handleDecrement: () => void;
    value: number;
}

const Counter = ({
    handleIncrement,
    handleDecrement,
    value
}: iCounter) => {
    return <View>
        <Text>{value}</Text>
        <Button title='Increment' onPress={handleIncrement} />
        <Button title='Decrement' onPress={handleDecrement} />
    </View>
};

export default Counter;