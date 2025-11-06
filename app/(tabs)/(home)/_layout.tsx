import { Platform } from 'react-native';
import { Stack } from 'expo-router';
import { colors } from '@/styles/commonStyles';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: Platform.OS === 'ios',
          title: 'Kenyan Stocks'
        }}
      />
      <Stack.Screen
        name="[stockId]"
        options={{
          title: 'Stock Details',
          headerBackTitleVisible: false,
          headerTintColor: colors.text,
        }}
      />
    </Stack>
  );
}
