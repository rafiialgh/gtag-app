import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Bell, CalendarDays, Crown, Gamepad2, Home, Send, User } from 'lucide-react-native';
import { Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function GlobalHeader() {
  return (
    <SafeAreaView className="flex-1 bg-[#111112] pb-12 pt-3" edges={['top', 'left', 'right']}>
    <View className="flex-row justify-between items-center px-5 py-3 bg-[#111112]">
      <Image
        className="h-5 w-20"
        source={require("@/assets/images/g-tag.png")}
      />
      <TouchableOpacity className="rounded-full bg-white p-2">
        <Bell size={18} color="#000" />
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#00BF63',
        tabBarStyle: {
          backgroundColor: '#202022',
          height: 90,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 9,
        },
        // headerShown: false,
        tabBarButton: HapticTab,
        header: () => <GlobalHeader />
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: 'Peringkat',
          tabBarIcon: ({ color }) => <Crown size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: 'Pemesanan',
          tabBarIcon: ({ color }) => <CalendarDays size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="match"
        options={{
          title: 'Pertandingan',
          tabBarIcon: ({ color }) => <Gamepad2 size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          headerShown: false,
          tabBarIcon: ({ color }) => <User size={25} color={color} />,
        }}
      />
    </Tabs>
  );
}
