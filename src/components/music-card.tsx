import { BlurView } from 'expo-blur';
import { Link } from 'expo-router';
import { CassetteTape, FastForward, Play, Rewind } from 'phosphor-react-native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import world from '~/src/assets/images/world.png';

export function MusicCard() {
  return (
    <Link href={'/'} asChild>
      <TouchableOpacity activeOpacity={0.7} className="my-4">
        <BlurView
          intensity={30}
          tint="dark"
          className="p-8 px-6 rounded-lg overflow-hidden border-[1px] border-gray-800 items-center space-y-5">
          <View className="flex-row space-x-3 w-full justify-between">
            <View className="flex-row space-x-3">
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/pt/7/71/Sour_-_Olivia_Rodrigo.png',
                }}
                loadingIndicatorSource={world}
                className="h-20 w-20 rounded-2xl"
              />

              <View className="space-y-0 self-center">
                <Text className="text-gray-200 text-xl font-semibold" numberOfLines={1}>
                  Favorite crime
                </Text>
                <Text className="text-gray-400 text-sm" numberOfLines={1}>
                  Olivia Rodrigo - Sour
                </Text>
              </View>
            </View>

            <View className="items-center justify-center self-start">
              <CassetteTape color="#1F487E" weight="duotone" />
            </View>
          </View>

          <View className="w-full space-y-4">
            <View className="w-full h-1 bg-gray-200 rounded-xl">
              <View className="w-2/5 h-1 rounded-xl bg-blue-500" />
            </View>

            <View className="flex-row justify-around">
              <TouchableOpacity>
                <Rewind color="#FFF" weight="duotone" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Play color="#FFF" weight="duotone" />
              </TouchableOpacity>
              <TouchableOpacity>
                <FastForward color="#FFF" weight="duotone" />
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      </TouchableOpacity>
    </Link>
  );
}
