import React, { useState, useRef } from 'react';
import {
  Text,
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import BrainboxContainer from '../components/BrainboxContainer';
import BrainBoxHeader from '../components/BrainBoxHeader';
import commonStyles from '../utils/commonStyles';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import DrawerMenuIcon from '../assets/images/Svg/drawer-app-menu.svg';

// Action icons
import ThumbsUpIcon from '../assets/images/Svg/thumbs-up-svgrepo-com.svg';
import ThumbsDownIcon from '../assets/images/Svg/thumbs-down-svgrepo-com.svg';
import MoreIcon from '../assets/images/Svg/more-horizontal-svgrepo-com.svg';
import DownloadIcon from '../assets/images/Svg/download-svgrepo-com.svg';
import CopyIcon from '../assets/images/Svg/copy-svgrepo-com.svg';
import SendIcon from '../assets/images/Svg/arrow-cycle-svgrepo-com.svg';

import ChatInputBar from '../screens/ChatInputBar';

const BrainboxHome = () => {
  const navigation = useNavigation();
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);
  const flatListRef = useRef(null);


  const handleAskQuestion = () => {
    if (!question.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      text: question,
      sender: 'user',
    };
    setMessages(prev => [...prev, userMsg]);

    const aiMsg = {
      id: (Date.now() + 1).toString(),
      text: `🤖 You asked: "${question}". Here's Brainbox's smart reply!`,
      sender: 'ai',
    };

    setTimeout(() => {
      setMessages(prev => [...prev, aiMsg]);
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 600);

    setQuestion('');
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  const renderActions = () => (
    <View style={commonStyles.actionsRow}>
      <TouchableOpacity style={commonStyles.iconSmall}><CopyIcon width={20} height={20} /></TouchableOpacity>
      <TouchableOpacity style={commonStyles.iconSmall}><ThumbsUpIcon width={20} height={20} /></TouchableOpacity>
      <TouchableOpacity style={commonStyles.iconSmall}><ThumbsDownIcon width={20} height={20} /></TouchableOpacity>
      <TouchableOpacity style={commonStyles.iconSmall}><DownloadIcon width={20} height={20} /></TouchableOpacity>
      <TouchableOpacity style={commonStyles.iconSmall}><SendIcon width={20} height={20} /></TouchableOpacity>
      <TouchableOpacity style={commonStyles.iconSmall}><MoreIcon width={20} height={20} /></TouchableOpacity>
    </View>
  );

  const renderMessage = ({ item }) => (
    <View style={commonStyles.messageWrapper}>
      <View
        style={[
          commonStyles.messageBubble,
          item.sender === 'user' ? commonStyles.userBubble : commonStyles.aiBubble,
        ]}
      >
        <Text style={commonStyles.messageText}>{item.text}</Text>
      </View>
      {item.sender === 'ai' && renderActions()}
    </View>
  );

  const handleOpenDrawer = () => {
    try {
      navigation.dispatch(DrawerActions.openDrawer());
    } catch (error) {
      console.warn('Error opening drawer:', error);
      // Fallback: try direct method
      if (navigation.openDrawer) {
        navigation.openDrawer();
      }
    }
  };

  return (
    <BrainboxContainer
      statusBarColor="transparent"
      statusBarStyle="light-content"
      statusBarHidden={false}
      style={commonStyles.screen}
    >
      {/* Header */}
      <BrainBoxHeader
        showMenu={true}
        leftIcon={<DrawerMenuIcon width={24} height={24} />}
        backAction={handleOpenDrawer}
      />

      {/* Chat Section */}
      <KeyboardAvoidingView
        style={commonStyles.content}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={80}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.id}
          contentContainerStyle={commonStyles.chatContainer}
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({ animated: true })
          }
        />

        {/* Chat Input Bar */}
        <ChatInputBar
          question={question}
          setQuestion={setQuestion}
          onSend={handleAskQuestion}
        />
      </KeyboardAvoidingView>
    </BrainboxContainer>
  );
};

export default BrainboxHome;
