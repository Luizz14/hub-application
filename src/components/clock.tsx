import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export function Clock() {
  const [time, setTime] = useState(dayjs().format('HH:mm'));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format('HH:mm'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View className="bg-white">
      <Text className="text-white text-6xl font-semibold font-minecraft">11:00</Text>
      <Text className="text-gray-400 font-minecraft text-md">Qua, 24</Text>
    </View>
  );
}
