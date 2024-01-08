import React, {useState} from 'react';
import {Text, TextInput, ScrollView} from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <ScrollView>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={(t) => setText(t)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 64}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </ScrollView>
  );
};

export default PizzaTranslator;
