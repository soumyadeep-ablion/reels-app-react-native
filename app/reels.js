import React, { useRef, useState } from 'react';
import { ScrollView, View, Dimensions, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const { height } = Dimensions.get('window');

const videos = [
  {
      "id": 0,
      "video": 'https://videos.pexels.com/video-files/6740278/6740278-sd_360_640_25fps.mp4',
      "title": 'Video custom header here',
      "text": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry . . .',
      "comments": [
          {
              "name": "Agatha Brown",
              "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
              "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          },
          {
              "name": "Shiv mukherjee",
              "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
              "image": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          },
      ],
  },
  {
      "id": 1,
      "video": "https://videos.pexels.com/video-files/19596979/19596979-sd_360_640_25fps.mp4",
      "title": 'Video custom header here',
      "text": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry . . .',
      "comments": [
          {
              "name": "Cat",
              "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
              "image": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          },
          {
              "name": "Cat 01",
              "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
              "image": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          },
      ],
  },
  {
      "id": 2,
      "video": "https://videos.pexels.com/video-files/11760755/11760755-sd_506_960_30fps.mp4",
      "title": 'Video custom header here',
      "text": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry . . .',
      "comments": [
          {
              "text": "Comment_03",
          },
      ],
  },
  {
      "id": 3,
      "video": "https://videos.pexels.com/video-files/17244754/17244754-sd_360_640_30fps.mp4",
      "title": 'Video custom header here',
      "text": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry . . .',
      "comments": [
          {
              "text": "Comment_04",
          },
      ],
  },
];

export default function Reels() {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showIcon, setShowIcon] = useState(false);

  const swipe = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const newIndex = Math.round(scrollY / height);

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const togglePlayback = () => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pauseAsync();
      } else {
        currentVideo.playAsync();
      }
      setIsPlaying(!isPlaying);
      setShowIcon(true);
      setTimeout(() => {
        setShowIcon(false);
      }, 300);
    }
  };

  const goProfile =()=> {
    navigation.navigate('profile')
  }

  return (
    <>
        <SafeAreaView style={{ flex: 1, position: 'relative' }}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Reels</Text>
            <TouchableOpacity style={styles.profileImg} onPress={goProfile}></TouchableOpacity>
          </View>
          <ScrollView
            ref={scrollViewRef}
            pagingEnabled
            showsVerticalScrollIndicator={false}
            onScroll={swipe}
            scrollEventThrottle={16}
          >        
            {videos.map((video, index) => (
              <View key={video.id} style={styles.videoContainer}>
                <Video
                  ref={(ref) => (videoRefs.current[index] = ref)}
                  source={{ uri: video.video }}
                  style={styles.video}
                  resizeMode="cover"
                  shouldPlay={currentIndex === index && isPlaying}
                  isLooping
                />
                <TouchableOpacity onPress={togglePlayback} style={styles.overlay}>
                  {
                    showIcon ? 
                    <Text>{isPlaying ? <Ionicons name="play" size={102} color="#fff" /> : <Ionicons name="pause" size={102} color="#fff" />}</Text>
                    :null
                  }              
                </TouchableOpacity>
                <View style={styles.article}>
                  <Text style={styles.title}>{video.title}</Text>
                  <Text style={styles.description}>{video.text}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  videoContainer: {
    height,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#000',
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 99,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    height: '100%',
    width: '100%',
  },
  header: {
    width: '100%',
    height: 55,
    position: 'absolute',
    top: 40,
    left: 0,
    zIndex: 999,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 23,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileImg: {
    width: 52,
    height: 52,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  article: {
    width: '100%',
    position: 'absolute',
    bottom: 60,
    paddingHorizontal: 20,
    zIndex: 99,
  },
  title: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '600',
  },
  description: {
    color: '#fff',
    marginTop: 13,
    fontWeight: '400',
    lineHeight: 20,
  },
});
