import { FlatList, Image, Platform, ScrollView, StyleSheet, View } from 'react-native';

// import ParallaxScrollView from '@/components/parallax-scroll-view';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@/components/ui/text';
import { Bell, LogOut, X } from 'lucide-react-native';
import { AnimatedDot } from '@/components/AnimateDot';

const matches = [
  { id: 1, title: 'Pertandingan 1', date: 'April 18, 2025', red: 12, blue: 20 },
  { id: 2, title: 'Pertandingan 2', date: 'April 19, 2025', red: 15, blue: 30 },
  { id: 3, title: 'Pertandingan 3', date: 'April 20, 2025', red: 22, blue: 18 },
  { id: 4, title: 'Pertandingan 4', date: 'April 21, 2025', red: 40, blue: 35 },
  { id: 5, title: 'Pertandingan 5', date: 'April 22, 2025', red: 22, blue: 50 },
];

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#111112]" edges={['top', 'left', 'right', 'bottom']}>
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}>
        <View className="mt-5 flex flex-row justify-between">
          <View className="h-5 w-20">
            <Image className="h-full w-full" source={require('@/assets/images/g-tag.png')} />
          </View>
          <View className="flex-row items-center justify-center">
            <View className="flex rounded-full bg-white p-2">
              <Bell size={15} color="#000" />
            </View>
            {/* <View className="rounded-full bg-white p-2">
            <LogOut size={24} color="#000" />
          </View> */}
          </View>
        </View>
        <View className="mt-10 flex h-56 w-full items-center justify-center">
          <View className="h-[150px] w-[150px] overflow-hidden rounded-full bg-white">
            <Image className="h-full w-full" source={require('@/assets/images/profile.png')} />
          </View>
          <View>
            <Text className="mt-3 text-center font-sans-bold text-2xl">Halo, Reza Adhim!</Text>
            <Text className="text-center font-sans text-lg">Peringkat #1</Text>
          </View>
        </View>
        <View className="gap-3">
          <View className="mt-5 flex-row items-center">
            <Text className="font-sans-bold text-xl">Pertandingan Langsung</Text>
            {/* <AnimatedDot /> */}
          </View>
          <View className="relative h-[158px] w-full flex-row overflow-hidden rounded-md">
            <View className="w-1/2 flex-row items-center justify-center gap-5 bg-[#FF383C] pr-5">
              <View className="flex items-center justify-center">
                <View className="h-[46px] w-[46px] overflow-hidden rounded-full bg-white">
                  <Image
                    className="h-full w-full"
                    source={require('@/assets/images/profile.png')}
                  />
                </View>
                <Text className="mt-2 font-sans-bold text-xs">Red Team</Text>
              </View>
              <Text className="font-sans-bold text-3xl text-white">50</Text>
            </View>
            <View className="w-1/2 flex-row items-center justify-center gap-5 bg-[#0088FF] pl-5">
              <Text className="font-sans-bold text-3xl text-white">38</Text>
              <View className="flex items-center justify-center">
                <View className="h-[46px] w-[46px] overflow-hidden rounded-full bg-white">
                  <Image
                    className="h-full w-full"
                    source={require('@/assets/images/profile.png')}
                  />
                </View>
                <Text className="mt-2 font-sans-bold text-xs">Blue Team</Text>
              </View>
            </View>
            <View className="absolute left-1/2 top-1/2 flex h-9 w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white">
              <Text className="text-center font-sans-bold text-sm text-black">01:20</Text>
            </View>
          </View>
        </View>

        <View className="gap-3">
          <View className="mt-5 flex-row">
            <Text className="font-sans-bold text-xl">Histori Pertandingan</Text>
            <View className="inline-flex rounded-full bg-sky-400 opacity-75"></View>
          </View>
          <FlatList
            data={matches}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ gap: 12, paddingBottom: 40 }}
            renderItem={({ item }) => (
              <View className="h-[82px] w-full flex-row items-center justify-between rounded-md border border-[#B8B8B84D] bg-[#272727] px-5">
                {/* Kiri */}
                <View className="flex-row items-center justify-center gap-3">
                  <View className="flex-row items-center justify-center rounded-full bg-[#50505080] p-3">
                    <View className="flex rounded-full bg-red-500 p-2">
                      <X size={15} color="#fff" />
                    </View>
                  </View>
                  <View>
                    <Text className="font-sans-bold text-lg text-white">{item.title}</Text>
                    <Text className="text-sm text-gray-300">{item.date}</Text>
                  </View>
                </View>

                {/* Kanan */}
                <View className="flex-row gap-2">
                  <View className="flex h-[29px] w-[38px] items-center justify-center rounded-md bg-[#FF383C]">
                    <Text className="font-sans-bold text-white">{item.red}</Text>
                  </View>
                  <Text className="text-white">-</Text>
                  <View className="flex h-[29px] w-[38px] items-center justify-center rounded-md bg-[#0088FF]">
                    <Text className="font-sans-bold text-white">{item.blue}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
