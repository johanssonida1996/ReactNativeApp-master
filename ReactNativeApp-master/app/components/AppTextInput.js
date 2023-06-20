import React, { useRef, useState } from 'react';
import { TextInput, View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';


function AppTextInput({ icon, width = "100%", ...otherProps }) {
  const inputRef = useRef();
  const [isFocused, setIsFocused] = useState(false);

  const handlePress = () => {
    inputRef.current.focus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Keyboard.dismiss();
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

    return (
      <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.container, { width }]}>
        {icon && 
        <MaterialCommunityIcons 
        name={icon} 
        size={20} 
        color={defaultStyles.colors.medium} 
        style={styles.icon} />}
        <TextInput
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor={defaultStyles.colors.medium}
         style={defaultStyles.text} 
         {...otherProps} />
      </View> 
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    },
    icon:{
        marginRight: 10
    }
})

export default AppTextInput;