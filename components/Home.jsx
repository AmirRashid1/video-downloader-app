import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { ArrowDownTrayIcon, LinkIcon, MinusSmallIcon, ShareIcon, TrashIcon } from 'react-native-heroicons/outline'
import VideoDownloader from './VideoDownloader';
const Home = () => {



    return (
        <View className="h-full bg-white pt-10">
            {/* text input , download icon */}
            <View className="flex-row items-center justify-center my-2 shadow-md">
                <View className="-right-9 z-10">
                    <LinkIcon size={25} color="black" />
                </View>
                <TextInput placeholder="Paste link here..." placeholderColor="green" className="w-3/4 py-4 shadow-md text-black bg-slate-50 rounded-3xl pl-10 pr-4" />
                <TouchableOpacity className="bg-green-600 rounded-3xl p-2 mx-4" activeOpacity={0.7}>
                    <ArrowDownTrayIcon size={32} color="white" />
                </TouchableOpacity>
                {/* <TextInput placeholder="Paste link here..." placeholderColor="green" className="w-3/4 py-4 shadow-md bg-slate-50 rounded-3xl pl-10 pr-4" />
                <TouchableOpacity className="bg-green-600 rounded-3xl p-2 mx-4" activeOpacity={0.7}>
                    <ArrowDownTrayIcon size={32} color="white" />
                </TouchableOpacity> */}
            </View>


            <View className="bg-green-300 h-36">
                <VideoDownloader />
            </View>
            <ScrollView >
                <View className="flex-row  items-center justify-between mx-7 my-6">
                    <Text className="font-bold text-black">History By Applications</Text>
                    <View className="flex-row ">
                        <MinusSmallIcon size={10} />
                        <MinusSmallIcon size={10} />
                    </View>
                </View>
                {/* Social media logos */}
                <View className="flex-row justify-between mx-4 items-center">
                    <TouchableOpacity activeOpacity={0.7} className="shadow-lg shadow-gray-400 rounded-3xl bg-slate-100 p-2">
                        <Image source={require('../assets/images/facebook.png')} resizeMode="contain" className="w-9 h-8 " />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} className="shadow-lg shadow-gray-400 rounded-3xl bg-slate-100 p-2">
                        <Image source={require('../assets/images/instagram.png')} resizeMode="contain" className="w-9 h-8 " />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} className="shadow-lg shadow-gray-400 rounded-3xl bg-slate-100 p-2">
                        <Image source={require('../assets/images/twitter.png')} resizeMode="contain" className="w-9 h-8  " />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} className="shadow-lg shadow-gray-400 rounded-3xl bg-slate-100 p-2">
                        <Image source={require('../assets/images/youtube.png')} resizeMode="contain" className="w-8 h-8 " />
                    </TouchableOpacity>
                </View>
                {/* header of download files */}
                <View className="flex-row justify-between items-center mt-9 mx-4">
                    <Text className="font-semibold text-black">Downloads</Text>
                    <Text className="font-semibold text-xs text-black opacity-40">31 Files</Text>
                </View>
                {/* images */}
                <View className="mt-2 space-y-2">
                    <Image source={require('../assets/images/women.png')} resizeMode="cover" className="w-11/12 h-52  rounded-2xl mx-4" />
                    <View className="justify-between flex-row mx-4">
                        <View className="flex-row space-x-3">
                            <Image source={require('../assets/images/twitter.png')} className="w-8 h-7 bg-slate-200 rounded-2xl p-4" />
                            <View >
                                <Text className="font-bold text-xs text-black">Elijah M.Henderson</Text>
                                <Text className="text-xs text-black opacity-50">@elijahhenderson</Text>
                            </View>
                        </View>
                        <View className="flex-row space-x-3">
                            <ShareIcon size={25} color="black" />
                            <TrashIcon size={25} color="black" />
                        </View>
                    </View>
                </View>
                {/* images */}
                <View className="mt-2 space-y-2 mb-10">
                    <Image source={require('../assets/images/women.png')} resizeMode="cover" className="w-11/12 h-52  rounded-2xl mx-4" />
                    <View className="justify-between flex-row mx-4">
                        <View className="flex-row space-x-3">
                            <Image source={require('../assets/images/twitter.png')} className="w-8 h-7 bg-slate-200 rounded-2xl p-4" />
                            <View >
                                <Text className="font-bold text-xs text-black">Elijah M.Henderson</Text>
                                <Text className="text-xs text-black opacity-50">@elijahhenderson</Text>
                            </View>
                        </View>
                        <View className="flex-row space-x-3">
                            <ShareIcon size={25} color="black" />
                            <TrashIcon size={25} color="black" />
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}

export default Home;