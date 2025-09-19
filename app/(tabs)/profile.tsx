import { Text } from '@/components/ui/text';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  LogOut,
  Settings,
  Edit,
  Mail,
  AtSign,
  Phone,
  MapPin,
  History,
  Headset,
  ChevronRightIcon,
} from 'lucide-react-native';
import React from 'react';

export default function Profile() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="w-full flex-1 bg-[#111112]" edges={['top', 'left', 'right']}>
      <ScrollView
        className="px-5"
        contentContainerStyle={{
          paddingTop: insets.top,
          paddingBottom: 24,
          gap: 24,
        }}
        showsVerticalScrollIndicator={false}>
        <View className="flex h-56 w-full items-center justify-center">
          <View className="h-[150px] w-[150px] overflow-hidden rounded-full bg-white">
            <Image className="h-full w-full" source={require('@/assets/images/profile.png')} />
          </View>
          <View>
            <Text className="mt-3 text-center font-sans-bold text-2xl text-white">
              Halo, Reza Adhim!
            </Text>
            <Text className="text-center font-sans text-sm text-gray-400">
              Aktif sejak 19 Juli 2025
            </Text>
          </View>
        </View>

        <View className="flex gap-3">
          <Text className="font-sans-bold text-base">Informasi Pribadi</Text>

          <View className="h-fit w-full rounded-md bg-[#252728]">
            <View className="">
              <View className="h-14 flex-row items-center gap-5 px-4">
                <Mail size={20} color={'#fff'} />
                <View className="h-full flex-1 flex-row items-center justify-between border-b border-[#50505080]">
                  <Text className="text-[#B8B8B8]">Email</Text>
                  <Text>rezadhm@gmail.com</Text>
                </View>
              </View>
              <View className="h-14 flex-row items-center gap-5 px-4">
                <AtSign size={20} color={'#fff'} />
                <View className="h-full flex-1 flex-row items-center justify-between border-b border-[#50505080]">
                  <Text className="text-[#B8B8B8]">Username</Text>
                  <Text>rezaadhim</Text>
                </View>
              </View>
              <View className="h-14 flex-row items-center gap-5 px-4">
                <Phone size={20} color={'#fff'} />
                <View className="h-full flex-1 flex-row items-center justify-between border-b border-[#50505080]">
                  <Text className="text-[#B8B8B8]">No. Telepon</Text>
                  <Text>08123456789</Text>
                </View>
              </View>
              <View className="h-14 flex-row items-center gap-5 px-4">
                <MapPin size={20} color={'#fff'} />
                <View className="h-full flex-1 flex-row items-center justify-between">
                  <Text className="text-[#B8B8B8]">Lokasi</Text>
                  <Text>Indonesia</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="flex gap-3">
          <Text className="font-sans-bold text-base">Utilitas</Text>

          <View className="h-fit w-full rounded-md bg-[#252728]">
            <View className="">
              <View className="h-14 flex-row items-center gap-5 px-4">
                <History size={20} color={'#fff'} />
                <View className="h-full flex-1 flex-row items-center justify-between border-b border-[#50505080]">
                  <Text className="text-[#B8B8B8]">Log History</Text>
                  <ChevronRightIcon color={'#fff'} />
                </View>
              </View>
              <View className="h-14 flex-row items-center gap-5 px-4">
                <Headset size={20} color={'#fff'} />
                <View className="h-full flex-1 flex-row items-center justify-between">
                  <Text className="text-[#B8B8B8]">Bantuan Umum</Text>
                  <Text>
                    <ChevronRightIcon color={'#fff'} />
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="w-full gap-4">
          <TouchableOpacity className="flex-row items-center gap-3 rounded-xl bg-[#1c1c1e] px-4 py-3">
            <Edit size={20} color="white" />
            <Text className="font-sans text-white">Edit Profil</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity className="flex-row items-center gap-3 rounded-xl bg-[#1c1c1e] px-4 py-3">
            <Settings size={20} color="white" />
            <Text className="font-sans text-white">Pengaturan</Text>
          </TouchableOpacity> */}

          <TouchableOpacity className="flex-row items-center gap-3 rounded-xl bg-red-600 px-4 py-3">
            <LogOut size={20} color="white" />
            <Text className="font-sans text-white">Keluar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
