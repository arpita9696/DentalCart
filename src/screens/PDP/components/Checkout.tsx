import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import PrimaryButton from '../../../components/PrimaryButton';
// components/ProductActions.tsx
import React from 'react';

const ProductActions = () => {
  return (
    <View style={{ padding: 12 }}>
      {/* Buttons Row */}
      <View style={styles.buttonRow}>
        <PrimaryButton
          title="Add To Cart"
          iconName="cart-outline"
          backgroundColor="#144c7c"
          onPress={() => {}}
        />
        <PrimaryButton
          title="Buy Now"
          iconName="flash-outline"
          backgroundColor="#ff5f00"
          onPress={() => {}}
        />
      </View>

      {/* Pincode Input Row */}
      <View style={styles.pincodeContainer}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg' }}
          style={styles.flag}
        />
        <View style={styles.verticalDivider} />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Pincode"
          placeholderTextColor="#444"
          keyboardType="numeric"
        />
        <TouchableOpacity>
          <Text style={styles.checkText}>CHECK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductActions;

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  pincodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  flag: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
  verticalDivider: {
    width: 1,
    backgroundColor: '#ccc',
    height: 24,
    marginHorizontal: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  checkText: {
    fontWeight: '600',
    color: '#333',
    paddingLeft: 10,
  },
});
