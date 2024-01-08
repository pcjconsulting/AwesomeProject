import {useMemo} from 'react';
import {useStyles, createStyleSheet} from 'styles';
import {View} from 'react-native';
import Ellipse8Stroke from 'assets/vectors/Ellipse8Stroke.svg';

export interface LoaderAnimProps {
  state: '$1' | '$10' | '$11' | '$12' | '$13' | '$14' | '$15' | '$16' | '$17' | '$18' | '$19' | '$2' | '$20' | '$21' | '$22' | '$23' | '$24' | '$3' | '$4' | '$5' | '$6' | '$7' | '$8' | '$9',
  testID?: string,
}

export function LoaderAnim(props: LoaderAnimProps) {
  const {styles, theme} = useStyles(stylesheet);

  const _state10 = props.state === '$10';
  const _state11 = props.state === '$11';
  const _state12 = props.state === '$12';
  const _state13 = props.state === '$13';
  const _state14 = props.state === '$14';
  const _state15 = props.state === '$15';
  const _state16 = props.state === '$16';
  const _state17 = props.state === '$17';
  const _state18 = props.state === '$18';
  const _state19 = props.state === '$19';
  const _state2 = props.state === '$2';
  const _state20 = props.state === '$20';
  const _state21 = props.state === '$21';
  const _state22 = props.state === '$22';
  const _state23 = props.state === '$23';
  const _state24 = props.state === '$24';
  const _state3 = props.state === '$3';
  const _state4 = props.state === '$4';
  const _state5 = props.state === '$5';
  const _state6 = props.state === '$6';
  const _state7 = props.state === '$7';
  const _state8 = props.state === '$8';
  const _state9 = props.state === '$9';

  const classes = useMemo(() => ({
    root: [
      styles.root,
      _state2 && styles.rootState2,
      _state3 && styles.rootState3,
      _state4 && styles.rootState4,
      _state5 && styles.rootState5,
      _state6 && styles.rootState6,
      _state7 && styles.rootState7,
      _state8 && styles.rootState8,
      _state9 && styles.rootState9,
      _state10 && styles.rootState10,
      _state11 && styles.rootState11,
      _state12 && styles.rootState12,
      _state13 && styles.rootState13,
      _state14 && styles.rootState14,
      _state15 && styles.rootState15,
      _state16 && styles.rootState16,
      _state17 && styles.rootState17,
      _state18 && styles.rootState18,
      _state19 && styles.rootState19,
      _state20 && styles.rootState20,
      _state21 && styles.rootState21,
      _state22 && styles.rootState22,
      _state23 && styles.rootState23,
      _state24 && styles.rootState24,
    ],
  }), [styles, props.state]);

  return (
    <View style={classes.root} testID={props.testID}>
      <Ellipse8Stroke/>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    width: 24,
    height: 24,
    flexShrink: 0,
  },
}));

