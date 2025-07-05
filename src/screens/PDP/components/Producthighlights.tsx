import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
// components/ProductHighlights.tsx
import React from 'react';

const features = [
  'Non-Sterile',
  'Ambidextrous Latex Examination Gloves With Smooth Surface',
  'High Tear Resistance',
  'Dusted With Adsorbable Corn-Starch Powder',
];

const ProductHighlights = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Product Highlights</Text>
      <Text style={styles.subheading}>Features</Text>

      <FlatList
        data={features}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.bulletItem}>
            <Text style={styles.bulletText}>•</Text>
            <Text style={styles.featureText}>{item}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.viewMoreBtn}>
        <LinearGradient
          colors={['#ff5f00', '#ffffff']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1.5, y: 0 }}
          style={styles.gradient}
        >
          <Text style={styles.viewMoreText}>View More</Text>
          {/* <Icon name="chevron-forward-outline" size={18} color="#000" /> */}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default ProductHighlights;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ff5f00',
    borderRadius: 12,
    padding: 14,
    margin: 12,
    backgroundColor: '#fff',
  },
  heading: {
    fontWeight: '700',
    fontSize: 16,
    color: '#000',
    marginBottom: 6,
  },
  subheading: {
    fontWeight: '600',
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  bulletText: {
    fontSize: 18,
    marginRight: 6,
    color: '#555',
    lineHeight: 20,
  },
  featureText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  viewMoreBtn: {
    marginTop: 10,
    overflow: 'hidden',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  viewMoreText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ff5f00',
  },
});
