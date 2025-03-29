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

export default function HomeScreen() {
  const [messages, setMessages] = useState<any>([]);

  const [loadingMessages, setLoadingMessages] = useState(false); // To indicate loading of messages

  const [message, setMessage] = useState(""); // To store the currently typed message

  const [attachedFiles, setAttachedFiles] = useState<File[]>([]); // To store files attached to messages

  const sendChatMessage = async () => {
    try {
      const formData = new FormData();
      if (message) {
        formData.append("userMessage", message);
      }
      attachedFiles?.map((file) => {
        formData.append("attachments", file);
      });
      // const accessToken = await AsyncStorage.getItem("access_token");
      // const response = await axios.post(
      //   `${SERVER_URI}/continue-chat`,
      //   {
      //     userMessage: message,
      //     attachments: attachedFiles,
      //   },
      //   {
      //     headers: {
      //       "access-token": accessToken,
      //     },
      //   }
      // );

      // If message is successfully sent, update UI
      setMessage("");
      setAttachedFiles([]);
      // getMessages();

      // setMessages((prev: any) => [response?.data?.data, ...prev]);

      // updateChatLastMessage(currentChat?._id || "", response.data);

      // Emit message to the server via socket
      // socket.emit(SEND_MESSAGE_EVENT, response.data);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
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
  container: { flex: 1, backgroundColor: "#f0f0f0" },
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
