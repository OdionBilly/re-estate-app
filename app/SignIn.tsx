import { View, Text, ScrollView,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { } from 'react-native'
import images from '@/constants/images'
import icons from '@/constants/icons'

const SignIn = () => {
  const handleLogin = () => {};
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView>
        <Image source={images.onboarding} className='w-full h-4/6'resizeMode='contain'/>
        <View className='p-10'>
          <Text className='text-base text-center uppercase font-rubik text-Black-200'
          >Welcome to Restate</Text>
          <Text className='text-3xl font-rubik-Bold text-Black-300 text-center mt-2'
          >Let's get you closer to {'\n'}
            <Text className='text-primary-300'>Your Ideal Home</Text>
          </Text>
          <Text className='text-lg font-rubik text-Black-200 text-center mt-9'>Login to restate with Google</Text>
          <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-Zink-300 rounded-full width-full py-4 mt-5'>
          <view className='flex flex-grow items-center justify-center '>
            <Image 
             source={icons.google}
             className='w-5 h-5'
             resizeMode='contain'
             />

             <Text className='text-lg ml-2 text-Black-300'>
              continue with google 
             </Text>

          </view>
          </TouchableOpacity>

         </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn