// DiscoverScreen.js
import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const stories = [
  {
    id: 1,
    name: "Rajat Kumar",
    image: require("../../assets/images/rp-1.jpg"),
  },
  {
    id: 2,
    name: "Anjali Verma",
    image: require("../../assets/images/rp-2.png"),
  },
  {
    id: 3,
    name: "Priya Sharma",
    image: require("../../assets/images/rp-3.jpg"),
  },
  {
    id: 4,
    name: "Rahul Singh",
    image: require("../../assets/images/rp-4.jpg"),
  },
  {
    id: 5,
    name: "Sneha Patel",
    image: require("../../assets/images/rp-5.jpg"),
  },
  {
    id: 6,
    name: "Amit Gupta",
    image: require("../../assets/images/rp-6.jpg"),
  },
];

const posts = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Product Designer",
    avatar: require("../../assets/images/avatar.png"),
    text: "Just launched our new design system! Check out how we’re improving consistency across our product suite. #DesignSystem #UX",
    image: require("../../assets/images/avatar.png"),
    likes: 248,
    comments: 42,
  },
  {
    id: 2,
    name: "David Anderson",
    role: "Tech Lead",
    avatar: require("../../assets/images/avatar.png"),
    text: "Excited to announce our upcoming virtual tech conference! Join us for three days of inspiring talks, workshops, and networking.",
    image: null,
    event: {
      title: "Virtual Tech Conference 2024",
      date: "March 15-17, 2024",
      button: "Register Now",
    },
    likes: 156,
    comments: 28,
  },
];

export default function DiscoverScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Discover</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="person-circle" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="gray"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchBar}
          placeholder="Search posts, people & more"
          placeholderTextColor="gray"
        />
      </View>

      {/* Stories Section */}
      <View style={styles.storiesHeader}>
        <Text style={styles.storiesTitle}>Stories</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.storiesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {stories.map((story) => (
            <View key={story.id} style={styles.storyItem}>
              <Image source={story.image} style={styles.storyImage} />
              <Text style={styles.storyText}>{story.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Posts Section */}
      {posts.map((post) => (
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
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{post.event.button}</Text>
              </TouchableOpacity>
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
  container: {
    padding: 15,
    marginTop: 20,
    paddingBottom: 20,
    backgroundColor: "#9F9BA3",
  },
  /* Header Styles */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: '#fff',
    alignItems: "center",
    paddingHorizontal: 4,
    marginBottom: 10,
  },
  headerTitle: { fontSize: 22, fontWeight: "bold" },
  headerIcons: { flexDirection: "row" },
  iconButton: { marginLeft: 15 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    marginBottom: 15,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBar: {
    flex: 1, // Takes the remaining space
    fontSize: 16,
    color: "black",
  },
  storiesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 4,
  },

  storiesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  viewAll: {
    fontSize: 16,
    color: "#1E53E5",
    textDecorationLine: "underline",
    fontWeight: "600",
  },

  storiesContainer: {
    // backgroundColor: "#fff",
    paddingHorizontal: 4,
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: "#ddd",
    marginBottom: 15,
  },

  storyItem: {
    alignItems: "center",
    marginRight: 15,
  },

  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    padding: 2,
    borderColor: "#fff",
  },

  storyText: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "500",
    color: "#333",
  },
  postContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  postHeader: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  name: { fontWeight: "bold" },
  role: { color: "gray", fontSize: 12 },
  postText: { marginBottom: 10 },
  postImage: { width: "100%", height: 200, borderRadius: 10 },
  eventContainer: {
    backgroundColor: "#f3f3f3",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  eventTitle: { fontWeight: "bold" },
  eventDate: { color: "gray", fontSize: 12 },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  buttonText: { color: "#fff", textAlign: "center" },
  postFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    fontSize: 12,
  },
});
