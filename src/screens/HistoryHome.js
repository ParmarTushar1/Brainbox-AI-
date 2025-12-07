import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { logFunction } from '../utils/commonFunctions';

const HistoryHome = () => {
  useEffect(() => {
    logFunction('Screen: HistoryHome');
  }, []);

  return (
    <View>
      <Text>HistoryHome</Text>
    </View>
  )
}

export default HistoryHome

const styles = StyleSheet.create({})