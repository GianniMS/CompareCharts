import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RadarChart } from 'react-native-gifted-charts';

const labels = ['Performance', 'Substance', 'Production', 'Versatility', 'Sentiment'];

const authorData = [8, 7, 9, 6, 8];  // Example rating from author
const userData = [6, 8, 7, 9, 7];    // Example rating from viewer

export default function RatingComparison() {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Album Rating Comparison</Text>

      <View style={styles.chartWrapper}>
        <RadarChart
          data={authorData}
          labels={labels}
          maxValue={10}
          polygonConfig={{
            stroke: 'rgba(255,99,132,0.6)',
            fill: 'rgba(255,99,132,0.3)',
          }}
          chartSize={240}
        />
        {showComparison && (
          <View style={StyleSheet.absoluteFill}>
            <RadarChart
              data={userData}
              labels={labels}
              maxValue={10}
              polygonConfig={{
                stroke: 'rgba(54,162,235,0.6)',
                fill: 'rgba(54,162,235,0.3)',
              }}
              chartSize={240}
            />
          </View>
        )}
      </View>

      <Button
        title={showComparison ? 'Hide Comparison' : 'Compare With My Rating'}
        onPress={() => setShowComparison(!showComparison)}
        color="#00ff8b"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121613' },
  title: { fontSize: 20, marginBottom: 20, color: 'white' },
  chartWrapper: { height: 260, justifyContent: 'center', alignItems: 'center' },
});
