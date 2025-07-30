import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { connectSocket, sendMessage } from "../utils/constant";
import {
  setReceiverUserId,
  setSenderUserId,
  addMessage,
} from "../store/chatSlice";
import { Ionicons } from "@expo/vector-icons";

const ExpenseScreen = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const flatListRef = useRef(null);

  const messages = useSelector((state) => state.chat.messages);
  const senderId = useSelector((state) => state.auth.user?.id);
  const receiverId = useSelector((state) => state.chat.receiverUserId);

  useEffect(() => {
    if (flatListRef.current && messages.length > 0) {
      setTimeout(() => {
        flatListRef.current.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages]);

  useEffect(() => {
    if (senderId) {
      dispatch(setSenderUserId(senderId));
      connectSocket(senderId);
    }
  }, [senderId]);

  useEffect(() => {
    if (!receiverId && senderId) {
      const hardcodedOtherUserId =
        senderId === "6889e1ab19dccbb8d7afad4d"
          ? "6889c0797b42d08917f2694b"
          : "6889e1ab19dccbb8d7afad4d";
      dispatch(setReceiverUserId(hardcodedOtherUserId));
    }
  }, [receiverId, senderId]);

  useEffect(() => {
    if (!global.socket) return;

    const handleMessage = (event) => {
      const data = JSON.parse(event.data);
      if (data?.message) {
        dispatch(
          addMessage({
            id: Date.now(),
            text: data.message,
            sender: data.sender,
          })
        );
      }
    };

    global.socket.addEventListener("message", handleMessage);
    return () => global.socket.removeEventListener("message", handleMessage);
  }, []);

  const handleSend = () => {
    if (!input.trim() || !receiverId) return;

    const messageObj = {
      type: "message",
      fromUserId: senderId,
      toUserId: receiverId,
      content: input,
    };

    sendMessage(messageObj);
    dispatch(
      addMessage({
        id: Date.now(),
        text: input,
        sender: senderId,
      })
    );
    setInput("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Receiver ID"
        value={receiverId || ""}
        onChangeText={(text) => dispatch(setReceiverUserId(text))}
        style={styles.receiverInput}
      />

      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const isMe = item.sender === senderId;
          return (
            <View
              style={[
                styles.messageBubble,
                isMe ? styles.myMessage : styles.otherMessage,
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  isMe ? styles.myMessageText : styles.otherMessageText,
                ]}
              >
                {item.text}
              </Text>
            </View>
          );
        }}
        contentContainerStyle={styles.messageList}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={90}
      >
        <View style={styles.inputRow}>
          <TextInput
            style={styles.textInput}
            placeholder="Type a message"
            value={input}
            onChangeText={setInput}
          />
          <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
            <Ionicons name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    padding: 10,
  },
  receiverInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 6,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  messageList: {
    flexGrow: 1,
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  messageBubble: {
    padding: 12,
    borderRadius: 20,
    marginVertical: 4,
    maxWidth: "75%",
  },
  myMessage: {
    backgroundColor: "#007AFF",
    alignSelf: "flex-end",
    borderTopRightRadius: 0,
  },
  otherMessage: {
    backgroundColor: "#C0C0C0",
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
  },
  messageText: {
    fontSize: 16,
  },
  myMessageText: {
    color: "#ffffff",
  },
  otherMessageText: {
    color: "#000000",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#fff",
    borderRadius: 25,
    marginTop: 8,
  },
  textInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    borderRadius: 25,
  },
  sendButton: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    padding: 10,
    marginLeft: 6,
  },
  senderName: {
    fontSize: 12,
    color: "#333",
    marginBottom: 2,
    fontWeight: "600",
  },
});
