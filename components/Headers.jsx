import { View, Text, TouchableOpacity, Image } from 'react-native'
import { BellAlertIcon, BellIcon, ChevronDownIcon, ChevronRightIcon, CircleStackIcon, LockClosedIcon, RectangleGroupIcon, SunIcon, XMarkIcon } from 'react-native-heroicons/outline';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import { useState } from 'react'
export const Menu = ({ onMenuToggle }) => {
    const [menu, setMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleMenuToggle = () => {
        setMenu(prevMenu => !prevMenu);
        onMenuToggle(); // Ensure this function is being called
    };


    return (

        <View className=" pr-20">
            <View className="flex-row items-center justify-between">
                <TouchableOpacity activeOpacity={0.7} onPress={handleMenuToggle} className=" shadow-xl  w-9 items-center"  >
                    {menu ? <View className="w-10 my-3"><MaterialIcons size={38} name="menu-open" color="gray" /></View> : <MaterialIcons size={35} name="menu" color="gray" />}
                </TouchableOpacity>
                {menu ? <Text className="text-black font-bold text-[15px]">Video & MP3 Downloader</Text> : ''}
            </View>
            {menu && (
                <View className=" min-h-screen w-fit  rounded-r-xl shadow  bg-gray-100">

                    <View className="flex-row ml-6 mt-6 mr-7 items-center shadow shadow-gray-300 bg-white px-6 py-3 rounded-3xl space-x-6">
                        <Image source={require('../assets/images/women.png')} resizeMode="cover" className="w-9 h-9 rounded-2xl " />
                        <View >
                            <Text className="text-xs text-black font-bold">Anastasya</Text>
                            <Text className="text-xs  font-semibold text-gray-500">Social Addict</Text>
                        </View>
                        <ChevronDownIcon size={20} />
                    </View>



                    <View className="ml-6 mt-6 space-y-8 w-fit">
                        {/* Category */}
                        <View className="flex-row space-x-2">
                            <RectangleGroupIcon size={25} color="#43adb3" />
                            <View className="space-y-1">
                                <Text className="font-semibold text-black">Category Download</Text>
                                <TouchableOpacity>
                                    <Text className="text-xs text-black" >See all category downloaded</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Security */}
                        <View className="flex-row space-x-2">
                            <LockClosedIcon size={25} color="#43adb3" />
                            <View className="space-y-1">
                                <Text className="font-semibold text-black">Security Access</Text>
                                <TouchableOpacity>
                                    <Text className="text-xs text-black" >Set your security access</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Storage Folder */}
                        <View className="flex-row space-x-2">
                            <CircleStackIcon size={25} color="#43adb3" />
                            <View className="space-y-1">
                                <Text className="font-semibold text-black">Storage Folder</Text>
                                <TouchableOpacity>
                                    <Text className="text-xs text-black" >Internal storage / Downloaded</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Push Notofication */}
                        <View className="flex-row space-x-2">
                            <BellAlertIcon size={25} color="#43adb3" />
                            <View className="space-y-1">
                                <Text className="font-semibold text-black">Push Notofication</Text>
                                <View className="flex-row space-x-3">
                                    <Text className="text-xs text-black" >Set up Your push nitif..</Text>
                                    <Text>push</Text>
                                </View>
                            </View>
                        </View>

                        {/* Dark Mode */}
                        <View className="flex-row justify-between mr-6">
                            <View className="flex-row  space-x-2">
                                {darkMode ? <MaterialIcons size={25} color="#43adb3" name="dark-mode" /> : <MaterialIcons size={25} color="#43adb3" name="light-mode" />}
                                <View className="space-y-1">

                                    {darkMode ? <Text className="font-semibold text-black">Dark Mode</Text> : <Text className="font-semibold text-black">White Mode</Text>}
                                    <View className="flex-row space-x-3">
                                        <Text className="text-xs text-black" >theme for this app</Text>

                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => setDarkMode(prev => !prev)}>
                                {darkMode ? <MaterialCommunityIcons name="toggle-switch" color="black" size={33} /> : <MaterialCommunityIcons name="toggle-switch-off" color="black" size={33} />}
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Logout */}
                    <View className=" absolute bottom-28 mx-10 flex-row space-x-6 bg-green-700 py-2.5 px-5 items-center rounded-3xl">
                        <Text className="font-semibold text-white">Log out</Text>
                        <View className="bg-yellow-300 rounded-2xl p-1">
                            <MaterialIcons name="logout" size={20} color="red" />
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
}

export const Notification = () => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.7} className="bg-gray-200 p-1 rounded-3xl">
                <MaterialCommunityIcons color="black" size={27} name="bell-badge" />
            </TouchableOpacity>
        </View>
    )
}
