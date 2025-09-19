import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { CalendarDays, Crown, Gamepad2, Home, Send, User } from 'lucide-react-native';

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
        headerShown: false,
        tabBarButton: HapticTab,
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
          tabBarIcon: ({ color }) => <User size={25} color={color} />,
        }}
      />
    </Tabs>
  );
}
