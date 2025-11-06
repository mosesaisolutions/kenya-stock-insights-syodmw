
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { colors } from '@/styles/commonStyles';
import { stocks } from '@/data/stocks';
import { IconSymbol } from '@/components/IconSymbol';

export default function StockDetailScreen() {
  const { stockId } = useLocalSearchParams();
  const stock = stocks.find(s => s.id === stockId);

  if (!stock) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.errorText, { color: colors.text }]}>Stock not found</Text>
      </View>
    );
  }

  const isPositive = stock.change >= 0;
  const changeColor = isPositive ? colors.accent : '#dc3545';

  return (
    <>
      <Stack.Screen
        options={{
          title: stock.symbol,
          headerBackTitleVisible: false,
          headerTintColor: colors.text,
        }}
      />
      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Price Header */}
        <View style={[styles.priceCard, { backgroundColor: colors.card }]}>
          <View style={styles.priceHeader}>
            <View>
              <Text style={[styles.stockSymbol, { color: colors.text }]}>
                {stock.symbol}
              </Text>
              <Text style={[styles.stockName, { color: colors.textSecondary }]}>
                {stock.name}
              </Text>
            </View>
            <View style={styles.priceSection}>
              <Text style={[styles.price, { color: colors.text }]}>
                KES {stock.price.toFixed(2)}
              </Text>
              <View style={[styles.changeContainer, { backgroundColor: isPositive ? '#d4edda' : '#f8d7da' }]}>
                <IconSymbol
                  name={isPositive ? 'arrow.up' : 'arrow.down'}
                  color={changeColor}
                  size={14}
                />
                <Text style={[styles.change, { color: changeColor }]}>
                  {isPositive ? '+' : ''}{stock.change.toFixed(2)}%
                </Text>
              </View>
            </View>
          </View>

          {/* Recommendation */}
          <View style={styles.recommendationSection}>
            <Text style={[styles.sectionLabel, { color: colors.textSecondary }]}>
              Recommendation
            </Text>
            <View style={[
              styles.recommendationBadge,
              {
                backgroundColor: stock.recommendation === 'buy'
                  ? colors.accent
                  : stock.recommendation === 'sell'
                  ? '#dc3545'
                  : colors.highlight
              }
            ]}>
              <Text style={[styles.recommendationText, { color: colors.text }]}>
                {stock.recommendation.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>

        {/* Key Metrics */}
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Key Metrics
          </Text>
          <View style={styles.metricsGrid}>
            <View style={styles.metricItem}>
              <Text style={[styles.metricLabel, { color: colors.textSecondary }]}>
                P/E Ratio
              </Text>
              <Text style={[styles.metricValue, { color: colors.text }]}>
                {stock.peRatio.toFixed(1)}
              </Text>
            </View>
            <View style={styles.metricItem}>
              <Text style={[styles.metricLabel, { color: colors.textSecondary }]}>
                Dividend Yield
              </Text>
              <Text style={[styles.metricValue, { color: colors.text }]}>
                {stock.dividendYield.toFixed(1)}%
              </Text>
            </View>
            <View style={styles.metricItem}>
              <Text style={[styles.metricLabel, { color: colors.textSecondary }]}>
                Sector
              </Text>
              <Text style={[styles.metricValue, { color: colors.text }]}>
                {stock.sector}
              </Text>
            </View>
            <View style={styles.metricItem}>
              <Text style={[styles.metricLabel, { color: colors.textSecondary }]}>
                Market Cap
              </Text>
              <Text style={[styles.metricValue, { color: colors.text }]}>
                {(stock.marketCap / 1000000000).toFixed(0)}B
              </Text>
            </View>
          </View>
        </View>

        {/* Company Performance */}
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Company Performance
          </Text>
          <View style={styles.performanceList}>
            <View style={styles.performanceItem}>
              <Text style={[styles.performanceLabel, { color: colors.textSecondary }]}>
                Revenue
              </Text>
              <Text style={[styles.performanceValue, { color: colors.text }]}>
                KES {(stock.companyPerformance.revenue / 1000000000).toFixed(1)}B
              </Text>
            </View>
            <View style={styles.performanceItem}>
              <Text style={[styles.performanceLabel, { color: colors.textSecondary }]}>
                Profit Margin
              </Text>
              <Text style={[styles.performanceValue, { color: colors.text }]}>
                {(stock.companyPerformance.profitMargin * 100).toFixed(1)}%
              </Text>
            </View>
            <View style={styles.performanceItem}>
              <Text style={[styles.performanceLabel, { color: colors.textSecondary }]}>
                ROE
              </Text>
              <Text style={[styles.performanceValue, { color: colors.text }]}>
                {(stock.companyPerformance.roe * 100).toFixed(1)}%
              </Text>
            </View>
            <View style={styles.performanceItem}>
              <Text style={[styles.performanceLabel, { color: colors.textSecondary }]}>
                Debt to Equity
              </Text>
              <Text style={[styles.performanceValue, { color: colors.text }]}>
                {stock.companyPerformance.debtToEquity.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>

        {/* Economic Indicators */}
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Economic Indicators
          </Text>
          <View style={styles.indicatorsList}>
            {stock.economicIndicators.map((indicator, index) => (
              <View key={index} style={styles.indicatorItem}>
                <View style={[styles.indicatorDot, { backgroundColor: colors.primary }]} />
                <Text style={[styles.indicatorText, { color: colors.text }]}>
                  {indicator}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Political Factors */}
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Political Factors
          </Text>
          <View style={styles.indicatorsList}>
            {stock.politicalFactors.map((factor, index) => (
              <View key={index} style={styles.indicatorItem}>
                <View style={[styles.indicatorDot, { backgroundColor: colors.primary }]} />
                <Text style={[styles.indicatorText, { color: colors.text }]}>
                  {factor}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Description */}
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            About
          </Text>
          <Text style={[styles.descriptionText, { color: colors.textSecondary }]}>
            {stock.description}
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: Platform.OS !== 'ios' ? 100 : 16,
  },
  priceCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  priceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  stockSymbol: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  stockName: {
    fontSize: 14,
  },
  priceSection: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    gap: 4,
  },
  change: {
    fontSize: 14,
    fontWeight: '600',
  },
  recommendationSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  recommendationBadge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  recommendationText: {
    fontSize: 13,
    fontWeight: '700',
  },
  section: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  metricItem: {
    flex: 1,
    minWidth: '45%',
    paddingVertical: 8,
  },
  metricLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  performanceList: {
    gap: 12,
  },
  performanceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  performanceLabel: {
    fontSize: 14,
  },
  performanceValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  indicatorsList: {
    gap: 10,
  },
  indicatorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  indicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  indicatorText: {
    fontSize: 14,
    flex: 1,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
