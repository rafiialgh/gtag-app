import { Text } from '@/components/ui/text'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Booking() {
  return (
    <SafeAreaView 
          className="flex-1 bg-[#111112]" 
          edges={['top', 'left', 'right', 'bottom']}
        >
      <Text>Booking</Text>
    </SafeAreaView>
  )
}
