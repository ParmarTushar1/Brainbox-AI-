import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import MicIcon from '../assets/images/Svg/microphone-svgrepo-com.svg';
import PlusIcon from '../assets/images/Svg/plus-svgrepo-com.svg';
import ArrowDownIcon from '../assets/images/Svg/arrow-down-svgrepo-com.svg';

const ChatInputBar = ({ question, setQuestion, onSend }) => {
  return (
    <View style={styles.inputBar}>
      {/* Plus Button */}
      <TouchableOpacity style={styles.iconButton}>
        <PlusIcon width={22} height={22} />
      </TouchableOpacity>

      {/* Input Field */}
      <TextInput
        style={styles.textInput}
        placeholder="Ask anything"
        placeholderTextColor="#999"
        value={question}
        onChangeText={setQuestion}
        onSubmitEditing={onSend}
        multiline
      />

      {/* Mic Button */}
      <TouchableOpacity style={[styles.iconButton, styles.micButton]}>
        <MicIcon width={22} height={22} />
      </TouchableOpacity>

      {/* Send Button */}
      <TouchableOpacity
        style={[
          styles.iconButton,
          question.trim() ? styles.sendActive : styles.sendDisabled,
        ]}
        onPress={onSend}
        disabled={!question.trim()}
      >
        <ArrowDownIcon width={22} height={22} />
      </TouchableOpacity>
    </View>
  );
};

export default ChatInputBar;

const styles = StyleSheet.create({
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2c2c2e',
    borderRadius: 30,
    paddingHorizontal: 10,
    margin: 9,
    minHeight: 60,
  },
  textInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    maxHeight: 120,
  },
  iconButton: {
    padding: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  sendActive: {
    backgroundColor: '#2c2c2e',
    borderRadius: 20,
  },
  sendDisabled: {
    backgroundColor: '#444',
    borderRadius: 20,
  },
  micButton: {
    backgroundColor: '#444',
    borderRadius: 20,
  },
});