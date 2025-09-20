import { useState } from 'react';
import { Text } from '@/components/ui/text';
import { Bell } from 'lucide-react-native';
import { FlatList, View, Image } from 'react-native';
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from '@/components/ui/card';
import { LinearGradient } from 'expo-linear-gradient';

const initialLeaderboards = [
  { id: '1', name: 'Reza', rank: 4, avatar: 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png' },
  { id: '2', name: 'Faris', rank: 5, avatar: 'https://cdn-icons-png.flaticon.com/128/4322/4322991.png'},
  { id: '3', name: 'Rafi', rank: 6, avatar: 'https://cdn-icons-png.flaticon.com/128/924/924915.png'},
  { id: '4', name: 'Reza', rank: 7, avatar: 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png' },
  { id: '5', name: 'Faris', rank: 8, avatar: 'https://cdn-icons-png.flaticon.com/128/4322/4322991.png'},
  { id: '6', name: 'Rafi', rank: 9, avatar: 'https://cdn-icons-png.flaticon.com/128/924/924915.png'},
  { id: '7', name: 'Reza', rank: 10, avatar: 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png' },
  { id: '8', name: 'Faris', rank: 11, avatar: 'https://cdn-icons-png.flaticon.com/128/4322/4322991.png'},
  { id: '9', name: 'Rafi', rank: 12, avatar: 'https://cdn-icons-png.flaticon.com/128/924/924915.png'},
  { id: '10', name: 'Reza', rank: 13, avatar: 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png' },
  { id: '11', name: 'Faris', rank: 14, avatar: 'https://cdn-icons-png.flaticon.com/128/4322/4322991.png'},
  { id: '12', name: 'Rafi', rank: 15, avatar: 'https://cdn-icons-png.flaticon.com/128/924/924915.png'},
]

export default function Leaderboard() {
  const [ranks, setRanks] = useState(initialLeaderboards);
  const [refreshing, setRefreshing] = useState(false);
  const insets = useSafeAreaInsets();

  // const onRefresh = async () => {
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     setRanks((prev) => [
  //       ...prev,
  //       {
  //         id: String(prev.length + 1),
  //         name: `Pertandingan ${prev.length + 1}`,
  //         date: 'April 25, 2025',
  //         scoreA: Math.floor(Math.random() * 50),
  //         scoreB: Math.floor(Math.random() * 50),
  //       },
  //     ]);
  //     setRefreshing(false);
  //   }, 1500);
  // };

  const renderHeader = () => (
    <View className="">
      {/* Header Top */}
      {/* <View className="mt-5 flex flex-row justify-between">
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
      </View> */}

      {/* Peringkat */}
      <View className="mt-5 flex w-full items-center justify-center">
        <Text variant="h1">Peringkat</Text>
      </View>

      {/* Top 1, 2, 3 */}
      <View className="relative mt-5 w-full">
        {/* Gradient Background */}
        <LinearGradient
          colors={["rgba(255, 215, 85, 0.5)", "rgba(255, 215, 85, 0.39)", "rgba(255, 215, 85, 0)"]} 
          start={{ x: 0.5, y: 2.5 }}
          end={{ x: 0.5, y: 0.01 }}
          className="absolute h-full w-full rounded-full"
        />

        {/* Wrapper Top 3 */}
        <View className="flex-row items-end justify-center">
          {/* #3 */}
          <View className="justify-end h-auto items-center">
            <View>
              <Text variant='h1'>#3</Text>
            </View>
            <View className="mt-10 bg-[#202022] h-28 w-28 rounded-t-2xl items-center justify-start">
              <Image
                source={{ uri: "https://i.pravatar.cc/100?img=11" }}
                className="h-16 w-16 -mt-8 rounded-full border-2 border-red-500"
              />
              <Text className="mt-1 font-bold">#3</Text>
              <Text className="font-bold">Claire</Text>
              <Text className="text-gray-400 text-xs">@claire</Text>
            </View>
          </View>

          {/* #1 */}
          <View className="justify-end h-auto items-center">
            <View>
              <Text variant='h1'>#1</Text>
            </View>
            <View className="mt-10 bg-[#333333] h-48 w-28 rounded-t-2xl items-center justify-start">
              <Image
                source={{ uri: "https://i.pravatar.cc/100?img=12" }}
                className="h-20 w-20 -mt-10 rounded-full border-2 border-yellow-500"
              />
              <Text className="mt-2 font-bold">#1</Text>
              <Text className="font-bold">Reza</Text>
              <Text className="text-gray-400 text-xs">@rezaadhim</Text>
            </View>
          </View>

          {/* #2 */}
          <View className="justify-end h-auto items-center">
            <View className="">
              <Text variant='h1'>#2</Text>
            </View>
            <View className="mt-10 bg-[#202022] h-40 w-28 rounded-t-2xl items-center justify-start">
              <Image
                source={{ uri: "https://i.pravatar.cc/100?img=13" }}
                className="h-16 w-16 -mt-8 rounded-full border-2 border-purple-500"
              />
              <Text className="mt-2 font-bold">#2</Text>
              <Text className="font-bold">Ryuu</Text>
              <Text className="text-gray-400 text-xs">@ryuuxd</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Histori Title */}
      <View className="mt-5 flex-row px-4">
        <Text className="font-sans-bold text-xl">Pemain Lain</Text>
      </View>
    </View>
  );
  return (
    // <SafeAreaView className="flex-1 bg-[#111112]" edges={['top', 'left', 'right']}>
      <FlatList
        data={ranks}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={{ paddingTop: insets.top + 60, paddingBottom: 24, gap: 12 }}
        progressViewOffset={insets.top + 60}
        className=' bg-[#111112]'
        renderItem={({ item }) => (
          <View className=''>
            <Card className='mx-3 bg-[#252728] h-[52px] flex-row items-center justify-between '>
              <CardContent className='flex-row w-full gap-4 justify-between'>
                <View className='flex-row gap-4 items-center justify-start'>
                  <Text>{item.id}</Text>
                  <Avatar alt="Zach Nugent's Avatar">
                    <AvatarImage source={{ uri: item.avatar }} />
                    <AvatarFallback>
                      <Text>ZN</Text>
                    </AvatarFallback>
                  </Avatar>
                  <Text>{item.name}</Text>
                </View>
                <View>
                  <Text>#{item.rank}</Text>
                </View>
              </CardContent>
            </Card>
          </View>
        )}
      />
    // </SafeAreaView>
  );
}
