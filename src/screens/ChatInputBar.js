import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';

import MicIcon from '../assets/images/Svg/microphone-svgrepo-com.svg';
import PlusIcon from '../assets/images/Svg/plus-svgrepo-com.svg';
import ArrowDownIcon from '../assets/images/Svg/arrow-down-svgrepo-com.svg';
import commonStyles from '../utils/commonStyles';
import BrainboxColor from '../utils/Colors';

const ChatInputBar = ({ question, setQuestion, onSend }) => {
  return (
    <View style={commonStyles.inputBar}>
      {/* Plus Button */}
      <TouchableOpacity style={commonStyles.iconButton}>
        <PlusIcon width={22} height={22} />
      </TouchableOpacity>

      {/* Input Field */}
      <TextInput
        style={commonStyles.textInput}
        placeholder="Ask anything"
        placeholderTextColor={BrainboxColor.MediumGray5}
        value={question}
        onChangeText={setQuestion}
        onSubmitEditing={onSend}
        multiline
      />

      {/* Mic Button */}
      <TouchableOpacity style={[commonStyles.iconButton, commonStyles.micButton]}>
        <MicIcon width={22} height={22} />
      </TouchableOpacity>

      {/* Send Button */}
      <TouchableOpacity
        style={[
          commonStyles.iconButton,
          question.trim() ? commonStyles.sendActive : commonStyles.sendDisabled,
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