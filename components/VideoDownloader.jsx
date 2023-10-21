
//working 90% //not saved in file manager or gallery //download successfully
// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert, Platform, Linking } from 'react-native';
// import * as MediaLibrary from 'expo-media-library';
// import { Video } from 'expo-av';
// import * as FileSystem from 'expo-file-system';
// const VideoDownloader = () => {
//   const [videoLink, setVideoLink] = useState('');
//   const [videoUri, setVideoUri] = useState('');
//   const [isDownloading, setIsDownloading] = useState(false);

//   const handleDownload = async () => {
//     try {
//       if (typeof videoLink !== 'string' || videoLink.trim() === '') {
//         throw new Error('Invalid video link');
//       }

//       setIsDownloading(true);

//       const videoFileName = 'downloaded_video.mp4';

//       // Download the video file
//       const downloadResumable = FileSystem.createDownloadResumable(
//         videoLink,
//         `${FileSystem.documentDirectory}${videoFileName}`
//       );
//       const { uri: tempUri } = await downloadResumable.downloadAsync();

//       // Save the video to the user's Photos app
//       // const moveRes = await FileSystem.moveAsync({
//       //     from: tempUri,
//       //     to: `${FileSystem.documentDirectory}${videoFileName}`,
//       // });

//       console.log('Video downloaded and saved successfully!');
//       console.log('Video saved at:', tempUri);

//       setVideoUri(tempUri); // Display the downloaded video in the app


//       setIsDownloading(false);

//       // Provide a link to the user to access the downloaded video
//       Alert.alert(
//         'Download Complete',
//         'The video has been downloaded and saved to the app\'s documents folder.',
//         [
//           {
//             text: 'OK',
//             onPress: () => {
//               // Open the iOS Files app to the app's document directory
//               if (Platform.OS === 'ios') {
//                 Linking.openURL('shareddocuments://');
//               }
//             },
//           },
//         ]
//       );


//     } catch (error) {
//       console.log('Error downloading the video:', error);

//       setIsDownloading(false);

//       if (Platform.OS === 'ios') {
//         Alert.alert('Download Failed', 'An error occurred while downloading the video.');
//       } else {
//         Alert.alert('Download Failed', 'An error occurred while downloading the video.', [
//           { text: 'OK', onPress: () => { } },
//         ]);
//       }
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
//       {videoUri ? (
//         <Video source={{ uri: videoUri }} style={{ width: 300, height: 200 }} useNativeControls />
//       ) : null}
//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16 }}
//         onChangeText={(text) => setVideoLink(text)}
//         placeholder="Paste video URL here"
//         value={videoLink}
//       />
//       <Button title={isDownloading ? 'Downloading...' : 'Download'} onPress={handleDownload} disabled={isDownloading} />
//     </View>
//   );
// };
// export default VideoDownloader;

// working 85%  //permission warning //not saved in file manager or gallery //download successfully
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { Video } from 'expo-av';
// import * as Permissions from 'expo-permissions';
// import * as FileSystem from 'expo-file-system';
// const VideoDownloader = () => {
//     const [videoLink, setVideoLink] = useState('');
//     const [videoUri, setVideoUri] = useState(null);
//     const [isDownloading, setIsDownloading] = useState(false);

//     useEffect(() => {
//         async function requestPermissions() {
//             const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.WRITE_EXTERNAL_STORAGE);
//             if (status !== 'granted') {
//                 Alert.alert('Permission Required', 'Please grant permission to access storage.');
//             }
//         }
//         requestPermissions();
//     }, []);

//     const handleDownload = async () => {
//         try {
//             if (!videoLink.trim()) {
//                 throw new Error('Invalid video link');
//             }

//             setIsDownloading(true);

//             const videoFileName = 'downloaded_video.mp4';
//             const fileUri = `${FileSystem.documentDirectory}${videoFileName}`;

//             // Download the video using Expo's FileSystem module
//             const downloadObject = FileSystem.createDownloadResumable(
//                 videoLink,
//                 fileUri
//             );

//             const { uri: tempUri } = await downloadObject.downloadAsync();

//             // Display the downloaded video in the app
//             setVideoUri(tempUri);

//             setIsDownloading(false);

//             Alert.alert('Download Complete', 'The video has been downloaded and saved to the device.', [
//                 { text: 'OK', onPress: () => Alert.alert('File Path', `Video saved to device.`) },
//             ]);

//         } catch (error) {
//             console.log('Error downloading the video:', error);

//             setIsDownloading(false);

//             Alert.alert('Download Failed', 'An error occurred while downloading the video.');
//         }
//     };

//     return (
//         <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
//             {videoUri && (
//                 <Video source={{ uri: videoUri }} style={{ width: 300, height: 200 }} useNativeControls />
//             )}
//             <TextInput
//                 style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16 }}
//                 onChangeText={(text) => setVideoLink(text)}
//                 placeholder="Paste video URL here"
//                 value={videoLink}
//             />
//             <TouchableOpacity
//                 style={{
//                     width: '100%',
//                     height: 50,
//                     backgroundColor: 'purple',
//                     borderRadius: 10,
//                     justifyContent: 'center',
//                     alignItems: 'center'
//                 }}
//                 onPress={handleDownload}
//                 disabled={isDownloading}
//             >
//                 <Text style={{ color: 'white', fontSize: 16 }}>
//                     {isDownloading ? 'Downloading...' : 'Download'}
//                 </Text>
//             </TouchableOpacity>
//         </View>
//     );
// };
// export default VideoDownloader;


// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { Video } from 'expo-av';
// import * as FileSystem from 'expo-file-system';
// import * as MediaLibrary from 'expo-media-library';

// const VideoDownloader = () => {
//     const [videoLink, setVideoLink] = useState('');
//     const [videoUri, setVideoUri] = useState(null);
//     const [isDownloading, setIsDownloading] = useState(false);

//     const handleDownload = async () => {
//         try {
//             if (!videoLink.trim()) {
//                 throw new Error('Invalid video link');
//             }

//             setIsDownloading(true);

//             const videoFileName = 'downloaded_video.mp4';
//             const fileUri = `${FileSystem.documentDirectory}${videoFileName}`;

//             // Download the video using Expo's FileSystem module
//             const downloadObject = FileSystem.createDownloadResumable(
//                 videoLink,
//                 fileUri
//             );

//             const { uri: tempUri } = await downloadObject.downloadAsync();

//             // Save the video to the device's filesystem
//             await FileSystem.moveAsync({ from: tempUri, to: fileUri });

//             // Save the video to the media library
//             const asset = await MediaLibrary.createAssetAsync(fileUri);
//             await MediaLibrary.createAlbumAsync('Downloaded Videos', asset, false);

//             setVideoUri(fileUri); // Display the downloaded video in the app

//             setIsDownloading(false);

//             Alert.alert('Download Complete', 'The video has been downloaded and saved to the device.', [
//                 { text: 'OK', onPress: () => Alert.alert('File Path', `Video saved to device.`) },
//             ]);

//         } catch (error) {
//             console.log('Error downloading the video:', error);

//             setIsDownloading(false);

//             Alert.alert('Download Failed', 'An error occurred while downloading the video.');
//         }
//     };

//     return (
//         <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
//             {videoUri && (
//                 <Video source={{ uri: videoUri }} style={{ width: 300, height: 200 }} useNativeControls />
//             )}
//             <TextInput
//                 style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16 }}
//                 onChangeText={(text) => setVideoLink(text)}
//                 placeholder="Paste video URL here"
//                 value={videoLink}
//             />
//             <TouchableOpacity
//                 style={{
//                     width: '100%',
//                     height: 50,
//                     backgroundColor: 'purple',
//                     borderRadius: 10,
//                     justifyContent: 'center',
//                     alignItems: 'center'
//                 }}
//                 onPress={handleDownload}
//                 disabled={isDownloading}
//             >
//                 <Text style={{ color: 'white', fontSize: 16 }}>
//                     {isDownloading ? 'Downloading...' : 'Download'}
//                 </Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// export default VideoDownloader;




// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert, Platform, Linking } from 'react-native';
// import RNFS from 'react-native-fs';
// import Video from 'react-native-video';

// const VideoDownloader = () => {
//   const [videoLink, setVideoLink] = useState('');
//   const [videoUri, setVideoUri] = useState('');
//   const [isDownloading, setIsDownloading] = useState(false);

//   const handleDownload = async () => {
//     try {
//       if (typeof videoLink !== 'string' || videoLink.trim() === '') {
//         throw new Error('Invalid video link');
//       }

//       setIsDownloading(true);

//       const videoFileName = 'downloaded_video.mp4';
//       const videoPath = `${RNFS.DocumentDirectoryPath}/${videoFileName}`;

//       const response = await RNFS.downloadFile({
//         fromUrl: videoLink,
//         toFile: videoPath,
//         progress: (res) => {
//           // Handle download progress if needed
//           console.log(`Downloaded: ${res.bytesWritten} / ${res.contentLength}`);
//         },
//       });

//       if (response.jobId) {
//         console.log('Video download started.');

//         response.promise.then((result) => {
//           if (result.statusCode === 200) {
//             console.log('Video downloaded successfully:', videoPath);

//             setVideoUri(videoPath);

//             setIsDownloading(false);

//             Alert.alert(
//               'Download Complete',
//               'The video has been downloaded and saved to the app\'s documents folder.',
//               [
//                 {
//                   text: 'OK',
//                   onPress: () => {
//                     // Open the video with the device's default media player
//                     Linking.openURL(videoPath);
//                   },
//                 },
//               ]
//             );
//           } else {
//             throw new Error(`Failed to download video. Status code: ${result.statusCode}`);
//           }
//         });
//       } else {
//         throw new Error('Failed to start the download.');
//       }
//     } catch (error) {
//       console.log('Error downloading the video:', error);

//       setIsDownloading(false);

//       Alert.alert('Download Failed', `An error occurred while downloading the video: ${error.message}`, [
//         { text: 'OK', onPress: () => { } },
//       ]);
//     }
//   };


//   return (
//     <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
//       {videoUri ? (
//         <Video
//           source={{ uri: videoUri }}
//           style={{ width: 300, height: 200 }}
//           controls={true}
//           paused={false}
//           resizeMode="contain"
//         />
//       ) : null}
//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16 }}
//         onChangeText={(text) => setVideoLink(text)}
//         placeholder="Paste video URL here"
//         value={videoLink}
//       />
//       <Button title={isDownloading ? 'Downloading...' : 'Download'} onPress={handleDownload} disabled={isDownloading} />
//     </View>
//   );
// };

// export default VideoDownloader;

import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, Platform, Linking } from 'react-native';
import axios from 'axios';
import RNFS from 'react-native-fs';
import VideoPlayer from 'react-native-video-controls';

const VideoDownloader = () => {
  const [videoLink, setVideoLink] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [videoInfo, setVideoInfo] = useState(null);
  const [videoUri, setVideoUri] = useState(null);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);

      if (typeof videoLink !== 'string' || videoLink.trim() === '') {
        throw new Error('Invalid video link');
      }

      // Make a GET request to the API
      const response = await axios.get(
        'https://vidsnap.p.rapidapi.com/fetch',
        {
          params: {
            url: videoLink,
          },
          headers: {
            'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Replace with your RapidAPI key
            'X-RapidAPI-Host': 'vidsnap.p.rapidapi.com',
            // Add any additional authentication headers here
            // For example, if the service requires an access token:
            // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
          },
        }
      );

      if (response.status !== 200) {
        throw new Error(`Failed to fetch video information: Status code ${response.status}`);
      }

      const apiResponse = response.data;
      console.log('API Response:', apiResponse);

      if (!apiResponse || !apiResponse.data || !apiResponse.data.url) {
        throw new Error(`Video URL not found in the API response: ${JSON.stringify(apiResponse)}`);
      }

      setVideoInfo(apiResponse.data);

      const downloadUrl = apiResponse.data.url;

      const videoFileName = `downloaded_video.mp4`;
      const downloadFolder =
        Platform.OS === 'ios'
          ? RNFS.DocumentDirectoryPath
          : RNFS.ExternalDirectoryPath;
      const videoPath = `${downloadFolder}/${videoFileName}`;

      const downloadResponse = await RNFS.downloadFile({
        fromUrl: downloadUrl,
        toFile: videoPath,
        headers: {
          // Add any necessary headers for video download authentication
          // For example, if the service requires an access token:
          // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        },
      });

      if (downloadResponse.statusCode !== 200) {
        throw new Error(`Failed to download video: Status code ${downloadResponse.statusCode}`);
      }

      setVideoUri(videoPath);

      Alert.alert(
        'Download Complete',
        'The video has been downloaded and saved to the default download folder.',
        [
          {
            text: 'OK',
            onPress: () => {
              if (Platform.OS === 'ios') {
                Linking.openURL('shareddocuments://');
              }
            },
          },
        ]
      );
    } catch (error) {
      console.log('Error downloading the video:', error);

      Alert.alert('Download Failed', `An error occurred while downloading the video: ${error.message}`, [
        { text: 'OK', onPress: () => { } },
      ]);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16 }}
        onChangeText={(text) => setVideoLink(text)}
        placeholder="Paste video URL here"
        value={videoLink}
      />
      <Button
        title={isDownloading ? 'Downloading...' : 'Download'}
        onPress={handleDownload}
        disabled={isDownloading}
      />
      {videoInfo && (
        <View>
          <VideoPlayer
            source={{ uri: videoUri }}
            paused={false}
            disableBack
            disableFullscreen
          />
        </View>
      )}
    </View>
  );
};

export default VideoDownloader;


