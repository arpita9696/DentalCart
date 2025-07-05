import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const benefits = [
  {
    label: 'Hassle Free\nCancellation',
    icon: 'document-text-outline',
    bg: '#ffe3d5',
  },
  { label: 'Free\nShipping', icon: 'cash-outline', bg: '#ffe3eb' },
  { label: '10 Day\nReplacement', icon: 'copy-outline', bg: '#e3f0ff' },
  {
    label: '100% Genuine\nProducts',
    icon: 'checkmark-circle-outline',
    bg: '#e0fafa',
  },
];

const payments = [
  { label: 'COD', icon: 'cash-outline' },
  { label: 'Net Banking', icon: 'business-outline' },
  { label: 'UPI', icon: 'logo-usd' },
  { label: 'Pay Later', icon: 'time-outline' },
  { label: 'Cards', icon: 'card-outline' },
  { label: 'EMI', icon: 'card' },
];

const DentalBenefitsAndPayments = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Benefits */}
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>DentalKart Benefits</Text>
        <TouchableOpacity style={styles.knowMore}>
          <Text style={styles.knowMoreText}>Know More</Text>
          <Icon name="chevron-forward" size={16} color="#ff5f00" />
        </TouchableOpacity>
      </View>

      <View style={styles.benefitsRow}>
        {benefits.map((item, index) => (
          <View key={index} style={styles.benefitItem}>
            <View style={[styles.iconCircle, { backgroundColor: item.bg }]}>
              <Icon name={item.icon} size={20} color="#000" />
            </View>
            <Text style={styles.benefitLabel}>{item.label}</Text>
          </View>
        ))}
      </View>

      {/* Payment Options */}
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentTitle}>Payment Options</Text>
        <View style={styles.paymentGrid}>
          {payments.map((item, index) => (
            <View key={index} style={styles.paymentItem}>
              <Icon name={item.icon} size={18} color="#333" />
              <Text style={styles.paymentLabel}>{item.label}</Text>
              <Icon name="information-circle-outline" size={12} color="#666" />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default DentalBenefitsAndPayments;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#000',
  },
  knowMore: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  knowMoreText: {
    color: '#ff5f00',
    fontWeight: '600',
    fontSize: 13,
  },
  benefitsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  benefitItem: {
    alignItems: 'center',
    width: '23%',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  benefitLabel: {
    textAlign: 'center',
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
  },
  paymentContainer: {
    marginTop: 24,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
  },
  paymentTitle: {
    fontWeight: '700',
    fontSize: 15,
    color: '#000',
    marginBottom: 10,
  },
  paymentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  paymentItem: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  paymentLabel: {
    fontSize: 13,
    color: '#333',
    flex: 1,
  },
});
