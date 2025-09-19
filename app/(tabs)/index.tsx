import { useState } from 'react';
import { FlatList, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@/components/ui/text';
import { Bell, X } from 'lucide-react-native';
import { AnimatedDot } from '@/components/AnimateDot';

const initialMatches = [
  { id: '1', title: 'Pertandingan 1', date: 'April 20, 2025', scoreA: 10, scoreB: 20 },
  { id: '2', title: 'Pertandingan 2', date: 'April 21, 2025', scoreA: 15, scoreB: 25 },
  { id: '3', title: 'Pertandingan 3', date: 'April 22, 2025', scoreA: 22, scoreB: 50 },
  { id: '4', title: 'Pertandingan 4', date: 'April 23, 2025', scoreA: 30, scoreB: 45 },
  { id: '5', title: 'Pertandingan 5', date: 'April 24, 2025', scoreA: 12, scoreB: 18 },
];

export default function HomeScreen() {
  const [matches, setMatches] = useState(initialMatches);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    setTimeout(() => {
      setMatches((prev) => [
        ...prev,
        {
          id: String(prev.length + 1),
          title: `Pertandingan ${prev.length + 1}`,
          date: 'April 25, 2025',
          scoreA: Math.floor(Math.random() * 50),
          scoreB: Math.floor(Math.random() * 50),
        },
      ]);
      setRefreshing(false);
    }, 1500);
  };

  const renderHeader = () => (
    <View className="border border-white px-5">
      {/* Header Top */}
      <View className="mt-5 flex flex-row justify-between">
        <View className="h-5 w-20">
          <Image
            className="h-full w-full"
            source={require('@/assets/images/g-tag.png')}
          />
        </View>
        <View className="flex-row items-center justify-center">
          <View className="flex rounded-full bg-white p-2">
            <Bell size={15} color="#000" />
          </View>
        </View>
      </View>

      {/* Profil */}
      <View className="mt-10 flex h-56 w-full items-center justify-center">
        <View className="h-[150px] w-[150px] overflow-hidden rounded-full bg-white">
          <Image
            className="h-full w-full"
            source={require('@/assets/images/profile.png')}
          />
        </View>
        <View>
          <Text className="mt-3 text-center font-sans-bold text-2xl">
            Halo, Reza Adhim!
          </Text>
          <Text className="text-center font-sans text-lg">Peringkat #1</Text>
        </View>
      </View>

      {/* Pertandingan Langsung */}
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
              <Text className="mt-2 font-sans-bold text-xs text-white">
                Red Team
              </Text>
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
              <Text className="mt-2 font-sans-bold text-xs text-white">
                Blue Team
              </Text>
            </View>
          </View>
          <View className="absolute left-1/2 top-1/2 flex h-9 w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white">
            <Text className="text-center font-sans-bold text-sm text-black">
              01:20
            </Text>
          </View>
        </View>
      </View>

      {/* Histori Title */}
      <View className="mt-5 flex-row">
        <Text className="font-sans-bold text-xl">Histori Pertandingan</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#111112]">
      <FlatList
        data={matches}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={{ paddingBottom: 24, gap: 12 }}
        renderItem={({ item }) => (
          <View className="mx-5 h-[82px] flex-row items-center justify-between rounded-md border border-[#B8B8B84D] bg-[#272727] px-5">
            <View className="flex-row items-center justify-center gap-3">
              <View className="flex-row items-center justify-center rounded-full bg-[#50505080] p-3">
                <View className="flex rounded-full bg-red-500 p-2">
                  <X size={15} color="#fff" />
                </View>
              </View>
              <View>
                <Text className="font-sans-bold  text-white">
                  {item.title}
                </Text>
                <Text className="text-xs text-gray-300">{item.date}</Text>
              </View>
            </View>

            <View className="flex-row gap-2">
              <View className="flex h-[29px] w-[38px] items-center justify-center rounded-md bg-[#FF383C]">
                <Text className="font-sans-bold text-white">{item.scoreA}</Text>
              </View>
              <Text className="text-white">-</Text>
              <View className="flex h-[29px] w-[38px] items-center justify-center rounded-md bg-[#0088FF]">
                <Text className="font-sans-bold text-white">{item.scoreB}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
