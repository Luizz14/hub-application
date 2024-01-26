import dayjs from 'dayjs';
import { BlurView } from 'expo-blur';
import { requestPermissionsAsync, setSystemBrightnessAsync } from 'expo-brightness';
import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import Animated, { Layout, SlideInUp } from 'react-native-reanimated';

import backgroundCity from '~/src/assets/images/world.png';
import { ClockHeader } from '~/src/components/clock-header';

export default function Clock() {
  const [hour, setHour] = useState(dayjs().format('HH'));
  const [minutes, setMinutes] = useState(dayjs().format('mm'));
  const [showHeader, setShowHeader] = useState(false);

  const date = dayjs(new Date()).format('dddd[,] DD');

  function handleShowHeader() {
    if (showHeader) return setShowHeader(false);
    setShowHeader(true);

    const timer = setTimeout(() => {
      setShowHeader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setHour(dayjs().format('HH'));
      setMinutes(dayjs().format('mm'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await requestPermissionsAsync();
      if (status === 'granted') {
        if (parseInt(hour) >= 18 || parseInt(hour) <= 6) return setSystemBrightnessAsync(1);
        setSystemBrightnessAsync(0.5);
      }
    })();
  }, []);

  return (
    <View>
      <Image source={backgroundCity} className="absolute right-0 left-0 top-0 bottom-0" />

      <Animated.View
        layout={Layout.stiffness(100)}
        className="h-full pt-[60px] items-center space-y-0">
        {showHeader && <ClockHeader />}

        <Animated.View
          layout={Layout.damping(20)}
          className="my-10 pt-10 w-full justify-center items-center"
          onTouchStart={() => handleShowHeader()}>
          <Text className="text-gray-200 text-9xl font-minecraft -mb-16">{hour}</Text>
          <Text className="text-gray-200 text-9xl -my-2 -ml-1 font-minecraft">. .</Text>
          <Text className="text-gray-200 text-9xl font-minecraft">{minutes}</Text>
          <BlurView
            tint="dark"
            intensity={20}
            className="p-2 rounded-lg overflow-hidden items-center justify-center">
            <Text className="text-gray-400 text-xl font-minecraft">{date}</Text>
          </BlurView>
        </Animated.View>
      </Animated.View>
    </View>
  );
}
