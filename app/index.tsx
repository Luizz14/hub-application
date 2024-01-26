import { BlurView } from 'expo-blur';
import { Stack, Link } from 'expo-router';

import backgroundCity from '~/src/assets/images/world.png';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Clock } from '~/src/components/clock';
import { ClockTimeCard } from '~/src/components/clock-time-card';

export default function Page() {
  return (
    <View className={`bg-black flex-1`}>
      <Image source={backgroundCity} className="absolute right-0 left-0 top-0 bottom-0" />

      <BlurView intensity={40} tint="dark" className="flex-1 px-6 pt-[60px]">
        <Text className="text-white font-minecraft text-3xl font-bold my-4">Home</Text>

        <ClockTimeCard />
      </BlurView>
    </View>
  );
}
