import React, { useState } from "react";
import { Stack, Link } from "expo-router";
import { FlatList, Pressable, StyleSheet, View, Text, Platform, TextInput } from "react-native";
import { IconSymbol } from "@/components/IconSymbol";
import { colors } from "@/styles/commonStyles";
import { stocks } from "@/data/stocks";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStocks = stocks.filter(stock =>
    stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderStockItem = ({ item }: { item: typeof stocks[0] }) => {
    const isPositive = item.change >= 0;
    const changeColor = isPositive ? colors.accent : '#dc3545';

    return (
      <Link href={`/(tabs)/(home)/${item.id}`} asChild>
        <Pressable style={styles.stockCard}>
          <View style={styles.stockHeader}>
            <View style={styles.stockInfo}>
              <Text style={[styles.stockSymbol, { color: colors.text }]}>
                {item.symbol}
              </Text>
              <Text style={[styles.stockName, { color: colors.textSecondary }]}>
                {item.name}
              </Text>
            </View>
            <View style={styles.stockPrice}>
              <Text style={[styles.price, { color: colors.text }]}>
                KES {item.price.toFixed(2)}
              </Text>
              <View style={[styles.changeContainer, { backgroundColor: isPositive ? '#d4edda' : '#f8d7da' }]}>
                <IconSymbol
                  name={isPositive ? "arrow.up" : "arrow.down"}
                  color={changeColor}
                  size={12}
                />
                <Text style={[styles.change, { color: changeColor }]}>
                  {isPositive ? '+' : ''}{item.change.toFixed(2)}%
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.recommendationBar}>
            <View style={[styles.recommendationBadge, { backgroundColor: item.recommendation === 'buy' ? colors.accent : item.recommendation === 'sell' ? '#dc3545' : colors.highlight }]}>
              <Text style={[styles.recommendationText, { color: colors.text }]}>
                {item.recommendation.toUpperCase()}
              </Text>
            </View>
          </View>
        </Pressable>
      </Link>
    );
  };

  const renderHeaderRight = () => (
    <Pressable style={styles.headerButtonContainer}>
      <IconSymbol name="bell" color={colors.text} size={20} />
    </Pressable>
  );

  return (
    <>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: "Kenyan Stocks",
            headerRight: renderHeaderRight,
          }}
        />
      )}
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.searchContainer}>
          <IconSymbol name="magnifyingglass" color={colors.textSecondary} size={18} />
          <TextInput
            style={[styles.searchInput, { color: colors.text }]}
            placeholder="Search stocks..."
            placeholderTextColor={colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <FlatList
          data={filteredStocks}
          renderItem={renderStockItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={[
            styles.listContainer,
            Platform.OS !== 'ios' && styles.listContainerWithTabBar
          ]}
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: colors.card,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  listContainerWithTabBar: {
    paddingBottom: 100,
  },
  stockCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  stockHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  stockInfo: {
    flex: 1,
  },
  stockSymbol: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  stockName: {
    fontSize: 13,
  },
  stockPrice: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    gap: 4,
  },
  change: {
    fontSize: 12,
    fontWeight: '600',
  },
  recommendationBar: {
    flexDirection: 'row',
    gap: 8,
  },
  recommendationBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  recommendationText: {
    fontSize: 12,
    fontWeight: '600',
  },
  headerButtonContainer: {
    padding: 8,
  },
});
