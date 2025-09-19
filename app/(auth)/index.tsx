import { Text } from '@/components/ui/text';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '@/context/AuthContext';
import { Link, useRouter } from 'expo-router';
import { LoginForm, loginSchema } from '@/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import * as Haptics from 'expo-haptics';
import { Button } from '@/components/ui/button';

const { height: screenHeight } = Dimensions.get('window');

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  const [checked, setChecked] = React.useState(false);

  function onCheckedChange(checked: boolean) {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setChecked(checked);
  }

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginForm) => {
    console.log('Data form yang valid:', data);
    login();
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView className="flex-1 bg-[#111112]" edges={['top', 'left', 'right']}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            minHeight: screenHeight * 0.5,
            paddingHorizontal: 20,
          }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          bounces={false}>
          <View className="h-20 w-32 pt-10">
            <Image className="h-full w-full" source={require('@/assets/images/g-tag.png')} />
          </View>

          <View className="mb-5 mt-5 flex gap-1">
            <Text className="font-sans-bold text-3xl font-bold text-white">Halo!</Text>
            <Text className="font-sans text-xl text-white">
              Masuk lebih aman dengan email dan password Anda.
            </Text>
          </View>

          <View className="">
            <View className="gap-4 py-10">
              <View className="gap-2">
                <Label className='font-sans'>Username</Label>
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                      <Input
                        placeholder="Username"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholderTextColor="#9CA3AF"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        returnKeyType="next"
                        blurOnSubmit={false}
                      />
                      {errors.email && (
                        <Text className="mt-2 text-red-500">{errors.email.message}</Text>
                      )}
                    </View>
                  )}
                />
              </View>

              <View className="gap-2">
                <Label className='font-sans'>Password</Label>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                      <Input
                        placeholder="Password"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholderTextColor="#9CA3AF"
                        autoCapitalize="none"
                        secureTextEntry
                        returnKeyType="done"
                        onSubmitEditing={handleSubmit(onSubmit)}
                      />
                      {errors.password && (
                        <Text className="mt-2 text-red-500">{errors.password.message}</Text>
                      )}
                    </View>
                  )}
                />
              </View>

              <View className="flex-row justify-between">
                <View className="flex-row items-center gap-2">
                  <Checkbox
                    aria-labelledby="terms-checkbox"
                    id="terms-checkbox"
                    checked={checked}
                    onCheckedChange={onCheckedChange}
                  />
                  <Text className="font-sans text-sm">Ingat saya?</Text>
                </View>
                <View>
                  <Link href="/forgot-password" asChild>
                    <TouchableOpacity>
                      <Text className="font-sans text-sm text-blue-500">Lupa Password?</Text>
                    </TouchableOpacity>
                  </Link>
                </View>
              </View>

              <Button
                onPress={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                size={'lg'}
                className="mt-2 flex-row items-center justify-center rounded-lg bg-blue-600">
                {isSubmitting ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text className="text-white font-sant">Login</Text>
                )}
              </Button>
              <View>
                <Link href="/forgot-password" asChild>
                  <TouchableOpacity className="flex items-center justify-center">
                    <Text className="font-sans text-sm">
                      Belum punya akun?{' '}
                      <Text className="text-sm font-sans text-blue-500">Daftar di sini!</Text>
                    </Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          </View>

          {/* Bottom Spacer untuk memastikan form tidak tertutup keyboard */}
          <View style={{ height: 100 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
