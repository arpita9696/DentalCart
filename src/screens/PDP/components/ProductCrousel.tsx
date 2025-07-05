import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/Ionicons'; // Make sure you have this installed
import Video from 'react-native-video';

const { width } = Dimensions.get('window');

type MediaItem = {
  file: string;
  media_type: 'image' | 'video';
};

interface MediaCarouselProps {
  data: MediaItem[];
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  const renderItem = ({ item }: { item: MediaItem }) => (
    <View style={styles.slide}>
      {item.media_type === 'image' ? (
        <Image
          source={{
            uri: 'https://images.dentalkart.com/media/catalog/product/' + item.file,
          }}
          style={styles.media}
          resizeMode="cover"
        />
      ) : (
        <Video
          source={{
            uri: 'https://images.dentalkart.com/media/catalog/product/' + item.file,
          }}
          style={styles.media}
          resizeMode="cover"
          paused
          controls
        />
      )}

      {/* Top Left - Best Seller */}
      <View style={styles.ribbon}>
        <Text style={styles.ribbonText}>Best Seller</Text>
      </View>

      {/* Top Right Icons */}
      <View style={styles.topRightIcons}>
        <TouchableOpacity>
          <Icon name="heart-outline" size={22} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 10 }}>
          <Icon name="share-social-outline" size={22} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Bottom Left - Express Delivery */}
      <View style={styles.bottomLeft}>
        <Text style={styles.deliveryText}>Express Delivery</Text>
      </View>

      {/* Bottom Right - Rating */}
      <View style={styles.bottomRight}>
        <Text style={styles.ratingText}>
          4.9 <Text style={{ color: 'green' }}>★</Text> 21.9k
        </Text>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onScroll={onScroll}
      />
      {/* Carousel Dots */}
      <View style={styles.dots}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default MediaCarousel;

const styles = StyleSheet.create({
  slide: {
    width,
    height: 250,
    position: 'relative',
  },
  media: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  ribbon: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#D0021B',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderTopLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  ribbonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  topRightIcons: {
    position: 'absolute',
    top: 10,
    right: 10,
    alignItems: 'center',
  },
  bottomLeft: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#E6F0FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  deliveryText: {
    color: '#2A64F8',
    fontWeight: '500',
    fontSize: 12,
  },
  bottomRight: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    elevation: 1,
  },
  ratingText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '500',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000',
  },
});
