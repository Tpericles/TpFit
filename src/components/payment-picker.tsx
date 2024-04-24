import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { View, Text } from 'react-native';

const paymentMethods = ['Cartão de crédito', 'Cartão de débito', 'Dinheiro', 'Pix'];

export default function PaymentPicker({...rest}) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  return (
    <View>
      <Text>Selecione uma forma de pagamento:</Text>
      <Picker
        selectedValue={selectedPaymentMethod}
        onValueChange={(itemValue) =>
          setSelectedPaymentMethod(itemValue)
        }>
        {paymentMethods.map((method, index) => (
          <Picker.Item key={index} label={method} value={method} />
        ))}
      </Picker>
    </View>
  );
}

