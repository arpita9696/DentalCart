import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
// components/PrimaryButton.tsx
import React from 'react';

interface PrimaryButtonProps {
  title: string;
  iconName?: string;
  backgroundColor?: string;
  color?: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  iconName,
  backgroundColor = '#144c7c',
  color = '#fff',
  onPress,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      onPress={onPress}
    >
      {iconName && (
        <Icon
          name={iconName}
          size={16}
          color={color}
          style={{ marginRight: 6 }}
        />
      )}
      <Text style={[styles.text, { color }, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  text: {
    fontWeight: '600',
    fontSize: 14,
  },
});
