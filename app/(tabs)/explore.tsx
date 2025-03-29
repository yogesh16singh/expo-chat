// DiscoverScreen.js
import React from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const stories = [
  { id: 1, name: 'Emma Wilson', image: require('../../assets/images/avatar.png') },
  { id: 2, name: 'James Chen', image: require('../../assets/images/avatar.png') },
  { id: 3, name: 'Priya Sharma', image: require('../../assets/images/avatar.png') },
  { id: 4, name: 'Marcus Lee', image: require('../../assets/images/avatar.png') },
];

const posts = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Product Designer',
    avatar: require('../../assets/images/avatar.png'),
    text: 'Just launched our new design system! Check out how we’re improving consistency across our product suite. #DesignSystem #UX',
    image: require('../../assets/images/avatar.png'),
    likes: 248,
    comments: 42,
  },
  {
    id: 2,
    name: 'David Anderson',
    role: 'Tech Lead',
    avatar: require('../../assets/images/avatar.png'),
    text: 'Excited to announce our upcoming virtual tech conference! Join us for three days of inspiring talks, workshops, and networking.',
    image: null,
    event: {
      title: 'Virtual Tech Conference 2024',
      date: 'March 15-17, 2024',
      button: 'Register Now',
    },
    likes: 156,
    comments: 28,
  },
];

export default function DiscoverScreen() {
  return (
    <ScrollView style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search posts, people & more" />
      
      {/* Stories Section */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
        {stories.map(story => (
          <View key={story.id} style={styles.storyItem}>
            <Image source={story.image} style={styles.storyImage} />
            <Text style={styles.storyText}>{story.name}</Text>
          </View>
        ))}
      </ScrollView>
      
      {/* Posts Section */}
      {posts.map(post => (
        <View key={post.id} style={styles.postContainer}>
          <View style={styles.postHeader}>
            <Image source={post.avatar} style={styles.avatar} />
            <View>
              <Text style={styles.name}>{post.name}</Text>
              <Text style={styles.role}>{post.role}</Text>
            </View>
          </View>
          <Text style={styles.postText}>{post.text}</Text>
          {post.image && <Image source={post.image} style={styles.postImage} />}
          {post.event && (
            <View style={styles.eventContainer}>
              <Text style={styles.eventTitle}>{post.event.title}</Text>
              <Text style={styles.eventDate}>{post.event.date}</Text>
              <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>{post.event.button}</Text></TouchableOpacity>
            </View>
          )}
          <View style={styles.postFooter}>
            <Text>❤️ {post.likes}</Text>
            <Text>💬 {post.comments}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15,marginTop: 20 },
  searchBar: { backgroundColor: '#eee', padding: 10, borderRadius: 10, marginBottom: 15 },
  storiesContainer: { flexDirection: 'row', marginBottom: 20 },
  storyItem: { alignItems: 'center', marginRight: 15 },
  storyImage: { width: 60, height: 60, borderRadius: 30 },
  storyText: { fontSize: 12, marginTop: 5 },
  postContainer: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15 },
  postHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  name: { fontWeight: 'bold' },
  role: { color: 'gray', fontSize: 12 },
  postText: { marginBottom: 10 },
  postImage: { width: '100%', height: 200, borderRadius: 10 },
  eventContainer: { backgroundColor: '#f3f3f3', padding: 10, borderRadius: 10, marginTop: 10 },
  eventTitle: { fontWeight: 'bold' },
  eventDate: { color: 'gray', fontSize: 12 },
  button: { backgroundColor: '#007bff', padding: 10, marginTop: 5, borderRadius: 5 },
  buttonText: { color: '#fff', textAlign: 'center' },
  postFooter: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, fontSize: 12 },
});
