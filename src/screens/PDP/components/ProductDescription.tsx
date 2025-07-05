import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';

const ProductDescription = ({ data }: any) => {
  return (
    <View style={styles.cardContainer}>
      {/* Header */}
      <View style={styles.topRow}>
        <Text style={styles.brandText}>Waldent</Text>
        <Text style={styles.referText}>Refer & Earn</Text>
      </View>

      <View style={styles.card}>
        {/* Title */}
        <Text style={styles.title}>{data?.name}</Text>

        {/* Price Row */}
        <View style={styles.priceRow}>
          <Text style={styles.price}>₹ {data?.pricing?.selling_price}</Text>
          <Text style={styles.strikePrice}> ₹ {data?.pricing?.price}</Text>
          <Text style={styles.discount}>{data?.pricing?.discount?.label}</Text>
        </View>

        {/* Coins Row */}
        <View style={styles.coinRow}>
          <Image
            source={require('../../../assets/png/coin.png')}
            style={styles.coinIcon}
          />
        </View>

        {/* Subtitle + Expiry + Add Button */}
        <View style={styles.bottomRow}>
          <View>
            <Text style={styles.subtitle}>Latex Examination Gloves</Text>
            <View style={styles.expiryRow}>
              <Text style={styles.expiryText}>Expiry Date : </Text>
              <Text style={styles.expiryDate}>October 2024</Text>
              {/* <Icon name="information-circle-outline" size={16} color="#144c7c" /> */}
            </View>
          </View>

          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addText}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 12,
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  brandText: {
    color: '#144c7c',
    fontWeight: '600',
    fontSize: 14,
  },
  referText: {
    color: '#007AFF',
    fontWeight: '500',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
    marginBottom: 6,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 4,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  strikePrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    fontSize: 14,
  },
  discount: {
    color: 'green',
    fontWeight: '600',
    fontSize: 14,
  },
  coinRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  coinIcon: {
    width: 35,
    height: 16,
    marginRight: 4,
  },
  coinText: {
    color: '#333',
    fontWeight: '600',
  },
  bottomRow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtitle: {
    color: '#555',
    fontSize: 13,
  },
  expiryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  expiryText: {
    color: '#666',
    fontSize: 12,
  },
  expiryDate: {
    color: '#007AFF',
    fontSize: 12,
    fontWeight: '500',
  },
  addBtn: {
    borderWidth: 1,
    borderColor: '#ff3c00',
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 6,
  },
  addText: {
    color: '#ff3c00',
    fontWeight: '600',
  },
});
