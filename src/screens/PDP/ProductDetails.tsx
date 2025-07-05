import {
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import DentalBenefitsAndPayments from './components/DentalBenefitsAndPayments';
import MediaCarousel from './components/ProductCrousel';
import ProductActions from './components/Checkout';
import ProductDescription from './components/ProductDescription';
import ProductHighlights from './components/Producthighlights';
import ProductInfoAccordion from './components/ProdcutKey';
import React from 'react';
import { useProduct } from '../../hooks/useProduct';

const ProductDetails = () => {
  const { product, loading, } = useProduct();
  console.log(product,'proooo')
  if (loading) return <ActivityIndicator size="large" color="blue" />;
  // if (error) return <Text style={{ color: 'red' }}>{error}</Text>; 
  return (
    <ScrollView style={{ flex: 1 }}>
      <MediaCarousel data={product?.media} />
      <ProductDescription data={product}/>
      <ProductActions />
      <ProductHighlights />``
      <ProductInfoAccordion />
      <DentalBenefitsAndPayments />
    </ScrollView>
  );
};

export default ProductDetails;

