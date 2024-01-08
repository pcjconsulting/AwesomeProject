import {useMemo} from 'react';
import {useStyles, createStyleSheet} from 'styles';
import {View, Text} from 'react-native';

export interface InputProps {
  state: 'Active' | 'Selected' | 'Error' | 'Filled' | 'Inactive',
  type: 'Text' | 'Dropdown',
  testID?: string,
}

export function Input(props: InputProps) {
  const {styles, theme} = useStyles(stylesheet);

  const _stateActive = props.state === 'Active';
  const _stateError = props.state === 'Error';
  const _stateFilled = props.state === 'Filled';
  const _stateInactive = props.state === 'Inactive';
  const _stateSelected = props.state === 'Selected';
  const _typeDropdown = props.type === 'Dropdown';
  const _typeText = props.type === 'Text';

  const classes = useMemo(() => ({
    root: [
      styles.root,
      _typeDropdown && _stateActive && styles.rootTypeDropdownStateActive,
      _typeText && _stateSelected && styles.rootTypeTextStateSelected,
      _typeDropdown && _stateSelected && styles.rootTypeDropdownStateSelected,
      _typeDropdown && _stateError && styles.rootTypeDropdownStateError,
      _typeText && _stateFilled && styles.rootTypeTextStateFilled,
      _typeDropdown && _stateFilled && styles.rootTypeDropdownStateFilled,
      _typeText && _stateInactive && styles.rootTypeTextStateInactive,
      _typeDropdown && _stateInactive && styles.rootTypeDropdownStateInactive,
      _typeText && _stateError && styles.rootTypeTextStateError,
    ],
    label: [
      styles.label,
      _typeDropdown && _stateActive && styles.labelTypeDropdownStateActive,
      _typeText && _stateSelected && styles.labelTypeTextStateSelected,
      _typeDropdown && _stateSelected && styles.labelTypeDropdownStateSelected,
      _typeDropdown && _stateError && styles.labelTypeDropdownStateError,
      _typeText && _stateFilled && styles.labelTypeTextStateFilled,
      _typeDropdown && _stateFilled && styles.labelTypeDropdownStateFilled,
      _typeText && _stateInactive && styles.labelTypeTextStateInactive,
      _typeDropdown && _stateInactive && styles.labelTypeDropdownStateInactive,
      _typeText && _stateError && styles.labelTypeTextStateError,
    ],
    dropdownFieldData: [
      styles.dropdownFieldData,
      _typeDropdown && _stateActive && styles.dropdownFieldDataTypeDropdownStateActive,
      _typeDropdown && _stateSelected && styles.dropdownFieldDataTypeDropdownStateSelected,
      _typeDropdown && _stateError && styles.dropdownFieldDataTypeDropdownStateError,
      _typeDropdown && _stateFilled && styles.dropdownFieldDataTypeDropdownStateFilled,
      _typeDropdown && _stateInactive && styles.dropdownFieldDataTypeDropdownStateInactive,
    ],
    dropdownBox: [
      styles.dropdownBox,
      _typeDropdown && _stateActive && styles.dropdownBoxTypeDropdownStateActive,
      _typeDropdown && _stateSelected && styles.dropdownBoxTypeDropdownStateSelected,
      _typeDropdown && _stateError && styles.dropdownBoxTypeDropdownStateError,
      _typeDropdown && _stateFilled && styles.dropdownBoxTypeDropdownStateFilled,
      _typeDropdown && _stateInactive && styles.dropdownBoxTypeDropdownStateInactive,
    ],
    textFieldData: [
      styles.textFieldData,
      _typeText && _stateSelected && styles.textFieldDataTypeTextStateSelected,
      _typeText && _stateFilled && styles.textFieldDataTypeTextStateFilled,
      _typeText && _stateInactive && styles.textFieldDataTypeTextStateInactive,
      _typeText && _stateError && styles.textFieldDataTypeTextStateError,
    ],
    rectangle1: [
      styles.rectangle1,
      _typeText && _stateSelected && styles.rectangle1TypeTextStateSelected,
    ],
    textbox: [
      styles.textbox,
      _typeText && _stateSelected && styles.textboxTypeTextStateSelected,
      _typeText && _stateFilled && styles.textboxTypeTextStateFilled,
      _typeText && _stateInactive && styles.textboxTypeTextStateInactive,
      _typeText && _stateError && styles.textboxTypeTextStateError,
    ],
    container: [
      styles.container,
      _typeDropdown && _stateSelected && styles.containerTypeDropdownStateSelected,
    ],
    optionData: [
      styles.optionData,
      _typeDropdown && _stateSelected && styles.optionDataTypeDropdownStateSelected,
    ],
    dropdown: [
      styles.dropdown,
      _typeDropdown && _stateSelected && styles.dropdownTypeDropdownStateSelected,
    ],
    textFields: [
      styles.textFields,
      _typeDropdown && _stateSelected && styles.textFieldsTypeDropdownStateSelected,
    ],
    scrollbar: [
      styles.scrollbar,
      _typeDropdown && _stateSelected && styles.scrollbarTypeDropdownStateSelected,
    ],
  }), [styles, props.type, props.state]);

  const colors = useMemo(() => ({
    chevron: [
      theme.colors.primaryForeground,
      _typeDropdown && _stateActive && undefined,
      _typeDropdown && _stateSelected && undefined,
      _typeDropdown && _stateError && undefined,
      _typeDropdown && _stateFilled && undefined,
      _typeDropdown && _stateInactive && undefined,
    ].filter(Boolean).pop(),
    state: [
      theme.colors.primaryForeground,
      _typeDropdown && _stateError && undefined,
      _typeText && _stateFilled && "#ffffff",
      _typeText && _stateError && "#ffffff",
    ].filter(Boolean).pop(),
  }), [props.type, props.state]);

  return (
    <View style={classes.root} testID={props.testID}>
      <Text style={classes.label} testID="6:230">
        {`Label`}
      </Text>
      <View style={classes.textbox} testID="6:231">
        <Text style={classes.textFieldData} testID="6:232">
          {`Text field data`}
        </Text>
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    width: 200,
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 4,
    columnGap: 4,
  },
  label: {
    color: theme.colors.black,
    fontFamily: 'Roboto',
    fontSize: 9,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 1.8,
    textTransform: 'uppercase',
  },
  labelTypeTextStateInactive: {
    color: theme.colors.lightGray,
  },
  labelTypeDropdownStateInactive: {
    color: theme.colors.lightGray,
  },
  textFieldData: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    color: theme.colors.gray,
    fontFamily: 'Roboto',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  textFieldDataTypeTextStateSelected: {
    flex: 'unset',
    color: theme.colors.falseBlack,
  },
  textFieldDataTypeTextStateFilled: {
    color: theme.colors.falseBlack,
  },
  textFieldDataTypeTextStateInactive: {
    color: theme.colors.lightGray,
  },
  textFieldDataTypeTextStateError: {
    color: theme.colors.falseBlack,
  },
  textbox: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    rowGap: 10,
    columnGap: 10,
    alignSelf: 'stretch',
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.white,
  },
  textboxTypeTextStateSelected: {
    paddingTop: 7,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 7,
    rowGap: 1,
    columnGap: 1,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: theme.colors.blue,
  },
  textboxTypeTextStateFilled: {
    rowGap: 8,
    columnGap: 8,
  },
  textboxTypeTextStateInactive: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.lightGray,
  },
  textboxTypeTextStateError: {
    rowGap: 8,
    columnGap: 8,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: theme.colors.red,
  },
}));

