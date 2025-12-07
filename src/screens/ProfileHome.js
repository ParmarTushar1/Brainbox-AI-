import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { logFunction } from '../utils/commonFunctions';

const ProfileHome = () => {
  useEffect(() => {
    logFunction('Screen: ProfileHome');
  }, []);

  return (
    <View>
      <Text>ProfileHome</Text>
    </View>
  );
};

export default ProfileHome;
