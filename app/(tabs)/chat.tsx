import {
  Image,
  StyleSheet,
  Platform,
  View,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Constants from 'expo-constants';
// const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_API_KEY = Constants?.expoConfig?.extra?.googleApiKey
console.log("GOOGLE_API_KEY", GOOGLE_API_KEY);
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY|| "");
// Call Google Gemini AI
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default function HomeScreen() {
  const [messages, setMessages] = useState<any>([
    { role: "bot", content: "Hey! How's it going? 🚀" },
    { role: "user", content: "Hello" },
  ]);

  // const [loadingMessages, setLoadingMessages] = useState(false); // To indicate loading of messages

  const [message, setMessage] = useState(""); // To store the currently typed message

  // const [attachedFiles, setAttachedFiles] = useState<File[]>([]); // To store files attached to messages

  const sendChatMessage = async () => {
    try {
      if (!message.trim()) return;

      const newMessage = { role: "user", content: message };
      setMessages((prevMessages: any) => [newMessage, ...prevMessages]);
      setMessage("");
      try {
        const response = await model.generateContent({
          contents: [{ role: "user", parts: [{ text: message }] }],
        });
        const botReply = response.response.text();

        setMessages((prevMessages: any) => [
          { role: "bot", content: botReply },
          ...prevMessages,
        ]);
      } catch (error) {
        console.error("Error fetching AI response:", error);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        inverted
        style={styles.messageList}
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }: { item: any }) => (
          <View
            style={[
              styles.messageContainer,
              item?.role === "user" ? styles.sent : styles.received,
            ]}
          >
            <Text style={styles.messageText}>{item.content}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendChatMessage}>
          <Ionicons name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#f0f0f0",
  },
  headerContainer: { flexDirection: "row", alignItems: "center", right: 22 },
  profileImage: { width: 40, height: 40, borderRadius: 20, marginRight: 12 },
  headerText: { fontSize: 18, fontWeight: "bold" },
  messageList: { flex: 1, padding: 4, marginTop: 8 },
  messageContainer: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginVertical: 6,
    borderRadius: 10,
    maxWidth: "80%",
  },
  sent: {
    alignSelf: "flex-end",
    backgroundColor: "#2467EC",
    borderBottomRightRadius: 0,
  },
  received: {
    alignSelf: "flex-start",
    backgroundColor: "#646262",
    borderBottomLeftRadius: 0,
  },
  messageText: { color: "#fff", fontSize: 14 },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderRadius: 25,
    margin: 8,
  },
  input: {
    flex: 1,
    height: 40,
    // borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginRight: 10,
    borderColor: "#ccc",
  },
  sendButton: { backgroundColor: "#2467EC", padding: 10, borderRadius: 20 },
});
