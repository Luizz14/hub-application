import { BlurView } from 'expo-blur';
import { Link } from 'expo-router';
import { CaretLeft, SunDim } from 'phosphor-react-native';
import { Text, TouchableOpacity } from 'react-native';
import Animated, { SlideInUp, SlideOutUp, Easing } from 'react-native-reanimated';

import KeepAwake from 'expo-keep-awake';
import { useState } from 'react';

export function ClockHeader() {
  const [keepAwakeActivated, setKeepAwakeActivated] = useState(false);

  async function handleToggleKeepAwake() {
    if (keepAwakeActivated) {
      KeepAwake.deactivateKeepAwake();
      setKeepAwakeActivated(false);
    } else {
      await KeepAwake.activateKeepAwakeAsync();
      setKeepAwakeActivated(true);
    }
  }

  return (
    <Animated.View
      entering={SlideInUp.easing(Easing.out(Easing.exp))}
      exiting={SlideOutUp.easing(Easing.out(Easing.exp))}
      className={'w-full mb-10'}>
      <BlurView
        intensity={20}
        tint="dark"
        className="justify-between mx-4 p-4 rounded-lg overflow-hidden border-gray-700 border-[1px] flex-row">
        <Link href={'..'} asChild>
          <TouchableOpacity activeOpacity={0.7} className="flex-row items-center">
            <CaretLeft size={32} color="#FFF" />
            <Text className="text-gray-400 font-semibold">Voltar</Text>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-row items-center"
          onPress={handleToggleKeepAwake}>
          <SunDim size={32} color="#FFF" weight={keepAwakeActivated ? 'fill' : 'regular'} />
        </TouchableOpacity>
      </BlurView>
    </Animated.View>
  );
}
