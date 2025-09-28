import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import BrainboxContainer from '../components/BrainboxContainer';
import BrainboxColor from '../utils/Colors';
import BrainBoxHeader from '../components/BrainBoxHeader';
import { useNavigation } from '@react-navigation/native';
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
      text: `🤖 You asked: "${question}". Here’s Brainbox’s smart reply!`,
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
    <View style={styles.actionsRow}>
      <TouchableOpacity style={styles.iconSmall}><CopyIcon width={20} height={20} /></TouchableOpacity>
      <TouchableOpacity style={styles.iconSmall}><ThumbsUpIcon width={20} height={20} /></TouchableOpacity>
      <TouchableOpacity style={styles.iconSmall}><ThumbsDownIcon width={20} height={20} /></TouchableOpacity>
      <TouchableOpacity style={styles.iconSmall}><DownloadIcon width={20} height={20} /></TouchableOpacity>
      <TouchableOpacity style={styles.iconSmall}><SendIcon width={20} height={20} /></TouchableOpacity>
      <TouchableOpacity style={styles.iconSmall}><MoreIcon width={20} height={20} /></TouchableOpacity>
    </View>
  );

  const renderMessage = ({ item }) => (
    <View style={styles.messageWrapper}>
      <View
        style={[
          styles.messageBubble,
          item.sender === 'user' ? styles.userBubble : styles.aiBubble,
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
      {item.sender === 'ai' && renderActions()}
    </View>
  );

  const handleOpenDrawer = () => {
  navigation.goBack();
};

  return (
    <BrainboxContainer
      statusBarColor="transparent"
      statusBarStyle="light-content"
      statusBarHidden={false}
      style={styles.screen}
    >
      {/* Header */}
      <BrainBoxHeader
        showMenu={true}
        leftIcon={<DrawerMenuIcon width={24} height={24} />}
        backAction={handleOpenDrawer}
      />

      {/* Chat Section */}
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={80}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.chatContainer}
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

const styles = StyleSheet.create({
  screen: {
    backgroundColor: BrainboxColor.Black,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  chatContainer: {
    padding: 16,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  messageWrapper: {
    marginBottom: 12,
  },
  messageBubble: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 16,
  },
  userBubble: {
    backgroundColor: '#2c2c2e',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  aiBubble: {
    backgroundColor: '#2c2c2e',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
  actionsRow: {
    flexDirection: 'row',
    marginTop: 6,
    marginLeft: 4,
  },
  iconSmall: {
    padding: 6,
  },
});
