// Example usage of FinalCarousel component
// Copy this into your React Native app to get started

import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SmartSuggestionsCarousel, suggestionCategories } from './index';

const ExampleApp = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Basic usage with default data */}
      <SmartSuggestionsCarousel 
        title="Smart Suggestions"
        categories={suggestionCategories}
      />
      
      {/* Custom usage with subset of categories */}
      <SmartSuggestionsCarousel 
        title="Quick Tips"
        categories={suggestionCategories.filter(cat => 
          ['app_guides', 'city_tips'].includes(cat.id)
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFE',
  },
});

export default ExampleApp;
