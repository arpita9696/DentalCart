import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import React, { useState } from 'react';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const sections = [
  {
    title: 'Key Specification',
    content: [
      'Material: Natural Rubber Latex',
      'Colour: Natural\n        White',
      'Sizes: Small\n        Medium\n        Large\n        Extra Large',
      'Design: Flat And Ambidextrous',
      'Cuff: Rolled Rim',
      'Finish: Micro Rough',
      'STORAGE\n  • Store In A Cool & Dry Place.\n  • Protect From Sunlight.',
    ],
  },
  {
    title: 'Description',
    content: [
      'Material: Natural Rubber Latex',
      'Colour: Natural\n        White',
      'Sizes: Small\n        Medium\n        Large\n        Extra Large',
      'Design: Flat And Ambidextrous',
      'Cuff: Rolled Rim',
      'Finish: Micro Rough',
      'STORAGE\n  • Store In A Cool & Dry Place.\n  • Protect From Sunlight.',
    ],
  },
  {
    title: 'How To Use',
    content: [
      'Material: Natural Rubber Latex',
      'Colour: Natural\n        White',
      'Sizes: Small\n        Medium\n        Large\n        Extra Large',
      'Design: Flat And Ambidextrous',
      'Cuff: Rolled Rim',
      'Finish: Micro Rough',
      'STORAGE\n  • Store In A Cool & Dry Place.\n  • Protect From Sunlight.',
    ],
  },
  { title: 'Warranty', content: [] },
  { title: 'Packaging', content: [] },
];

const ProductInfoAccordion = () => {
  const [activeSection, setActiveSection] = useState(0); // index of opened section

  const toggleSection = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActiveSection(prev => (prev === index ? -1 : index));
  };

  const renderBulletText = (text: string, index: number) => {
    const lines = text.split('\n');
    return lines.map((line, i) => (
      <View key={`${index}-${i}`} style={styles.bulletItem}>
        <Text style={styles.bullet}>{i === 0 ? '•' : ''}</Text>
        <Text style={styles.text}>{line.trim()}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      {sections.map((section, index) => (
        <View key={index}>
          <TouchableOpacity
            style={styles.header}
            onPress={() => toggleSection(index)}
          >
            <Text style={styles.title}>{section.title}</Text>
            {/* <Icon
              name={
                activeSection === index
                  ? 'chevron-up-outline'
                  : 'chevron-forward-outline'
              }
              size={20}
              color="#000"
            /> */}
            <Text>{activeSection === index ? 'up' : 'down'}</Text>
          </TouchableOpacity>

          {activeSection === index && (
            <View style={styles.content}>
              {section.content.length === 0 ? (
                <Text style={styles.placeholderText}>
                  Content not available.
                </Text>
              ) : (
                section.content.map((item, i) => (
                  <View key={i}>{renderBulletText(item, i)}</View>
                ))
              )}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default ProductInfoAccordion;

const styles = StyleSheet.create({
  container: {
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: 10,
    margin: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderBottomWidth: 0.6,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
    color: '#000',
  },
  content: {
    paddingHorizontal: 14,
    paddingBottom: 10,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  bullet: {
    width: 12,
    fontSize: 18,
    color: '#333',
    lineHeight: 20,
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  placeholderText: {
    fontSize: 14,
    color: '#999',
    paddingVertical: 6,
  },
});
