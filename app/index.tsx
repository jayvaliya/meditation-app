import { ImageBackground, View, Text } from "react-native";
import Home from "@/components/Home";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";
// @ts-ignore
import beachImage from '@/assets/meditation-images/beach.webp';
import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";


export default function Index() {
  const router = useRouter();
  return (
    <View className="h-full">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.9)']}
          className="flex-1"
        >
          <SafeAreaView edges={['top']} className="flex-1 mx-5 mb-8 justify-between">
            <View className='flex-1 py-10' >
              <Text className=' text-white text-3xl font-bold text-center'>Simple Maditation</Text>
              <Text className='text-white text-center text-xl mt-2'>Simplifying Maditation for Everyone</Text>
            </View>
            <View>
              <CustomButton title='Get Started' onPress={() => { router.push('/nature-meditate') }} />
            </View>
          </SafeAreaView>
        </LinearGradient>
        <StatusBar backgroundColor="black" animated={true} />
      </ImageBackground>
    </View>
  );
}
