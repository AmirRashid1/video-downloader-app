import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import { Menu, Notification } from './components/Headers';
import { useState } from 'react';
import { Text, View } from 'react-native';
const Stack = createNativeStackNavigator();
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);  //used for menu bar in Menu.jsx
  const [menu, setMenu] = useState(false);

  // const handleMenuToggle = () => {
  //     setMenu(prevMenu => !prevMenu);
  //     onMenuToggle(); // Ensure this function is being called
  // };
  const handleMenuToggle = () => {
    setMenu((prevMenu) => !prevMenu);
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Home' component={Home}
          options={{
            headerShadowVisible: false, headerTitle: () => (<Text className="text-black font-bold text-[15px]" onPress={() => menu}> {menu ? '' : 'Video & MP3 Downloader'}</Text>),
            headerBackVisible: false, headerLeft: () => (<Menu onMenuToggle={handleMenuToggle} />), headerRight: () => <View onPress={() => menu}>{menu ? '' : (<Notification />)}</View>,
            // headerStyle: { backgroundColor: '#63d3ff' },
            // headerTitleStyle: { fontSize: 14, fontWeight: '500' }
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

