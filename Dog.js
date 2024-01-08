import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const Mood = {
	Playful: "playful",
	Hungry: "hungry",
	Unknown: "unknown"
}

type DogProps = {
  name: string;
  initialMood: Mood;
};

  const Dog = (props: DogProps) => {
  const [mood, setMood] = useState(props.initialMood);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {mood}!
      </Text>
      <Button
        onPress={() => {
          if(mood == Mood.Hungry){
              setMood(Mood.Playful);
            }
            else if(mood == Mood.Playful) {
              setMood(Mood.Hungry);
            }
          }}
        title={mood == Mood.Hungry ? 'Give me a treat, please!' : mood == Mood.Playful ? 'Take me for a walk, please!' : mood}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <>
      <Dog name="Woofie" initialMood={Mood.Playful} />
      <Dog name="Fuffy"  initialMood={Mood.Hungry} />
    </>
  );
};

export default Cafe;