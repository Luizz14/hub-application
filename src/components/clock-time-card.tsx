import dayjs from 'dayjs';
import { BlurView } from 'expo-blur';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export function ClockTimeCard() {
  const [time, setTime] = useState(dayjs().format('HH:mm'));

  const date = dayjs(new Date()).format('dddd [,] DD');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format('HH:mm'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Link href={'/clock'} asChild>
      <TouchableOpacity activeOpacity={0.7}>
        <BlurView
          intensity={10}
          tint="dark"
          className="p-8 rounded-lg overflow-hidden border-[1px] border-gray-800 items-center">
          <Text className="text-gray-200 text-6xl font-semibold font-minecraft">{time}</Text>
          <Text className="text-gray-400 font-minecraft text-md">{date}</Text>
        </BlurView>
      </TouchableOpacity>
    </Link>
  );
}
