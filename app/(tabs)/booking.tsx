import { useState } from 'react';
import { FlatList, View, Image } from 'react-native';
import { Text } from '@/components/ui/text'
import React from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from '@/components/ui/card';
import { Star } from 'lucide-react-native';

const initialPlaces = [
  { id: '1', tempat: 'Tactical Field 1', lokasi: 'Bandung, Jawa Barat', stars: '5', reviews: 999, harga: '150.000', status: 'Available'}
];

export default function Booking() {
  const [places, setPlaces] = useState(initialPlaces);

  const insets = useSafeAreaInsets();

  const renderHeader = () => (
    <View>
      {/* Place Title */}
      <View className="mt-16 flex-row px-4">
        <Text className="font-sans-bold text-xl">Tempat Tersedia</Text>
      </View>
    </View>
  );


  return (
    // <SafeAreaView className="flex-1 bg-[#111112]" edges={['top', 'left', 'right']}>
      <FlatList
        data={places}
        keyExtractor={(item => item.id)}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={{ paddingTop: insets.top + 60, paddingBottom: 24, gap: 12 }}
        progressViewOffset={insets.top + 60}
        className=' bg-[#111112]'
        renderItem={({ item }) => (
          // Card
          <View className="mx-3 mt-5">
            <Card className="rounded-2xl overflow-hidden shadow-md">
              {/* Header Image */}
              <View className="relative">
                <Image
                  className="h-40 w-full"
                  source={require("@/assets/images/profile.png")}
                  resizeMode="cover"
                />
                {/* Status Badge */}
                <View className="absolute top-2 right-2 rounded-full bg-blue-500 px-3 py-1">
                  <Text className="text-xs font-bold text-white">{item.status}</Text>
                </View>
              </View>

              {/* Content */}
              <CardContent className="p-3">
                <View className='flex-row justify-between'>
                  <CardTitle className="text-base">{item.tempat}</CardTitle>
                  {/* Rating */}
                  <View className="flex-row items-center space-x-1">
                    <Star size={14} color="gold" fill="gold" />
                    <Text className="text-sm font-semibold">
                      {item.stars} <Text className="text-gray-500">({item.reviews} reviews)</Text>
                    </Text>
                  </View>
                </View>
                <CardDescription>{item.lokasi}</CardDescription>
              </CardContent>

              {/* Footer */}
              <CardFooter className="flex-row items-center px-4">
                {/* Price */}
                <Text className="font-bold text-base">
                  Rp. {item.harga} <Text className="font-normal text-sm">per jam</Text>
                </Text>
              </CardFooter>
            </Card>
          </View>
        )}
      />
    // </SafeAreaView>
  );
}
