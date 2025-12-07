import React, { useRef, useState, useMemo } from 'react';
import { Dimensions, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import BrainboxContainer from '../components/BrainboxContainer';
import Rectangle_1 from '../assets/images/Svg/Rectangle_1';
import Rectangle_2 from '../assets/images/Svg/Rectangle_2';
import Rectangle_3 from '../assets/images/Svg/Rectangle_3';
import LeftChevron from '../assets/images/Svg/Left-chevron.svg';
import RightChevron from '../assets/images/Svg/right-chevron.svg';
import BrainboxColor from '../utils/Colors';
import { SCREEN_HEIGHT } from '../utils/responsive';
import commonStyles from '../utils/commonStyles';

const { width } = Dimensions.get('window');

const Splash_two = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeCount, setSwipeCount] = useState(0);
  const carouselRef = useRef(null);
  const navigation = useNavigation();

  // 🧠 Memoized static data
  const rectangles = useMemo(() => [Rectangle_1, Rectangle_2, Rectangle_3], []);
  const textContent = useMemo(() => [
    {
      heading: 'Unlock the Power\nOf Future AI',
      subheading: 'Chat with the smartest AI Future\nExperience power of AI with us',
    },
    {
      heading: 'Chat With Your\nFavourite AI',
      subheading: 'Choose your AI companion\nand start exploring',
    },
    {
      heading: 'Boost Your Mind\nPower with AI',
      subheading: 'Level up your thinking\nwith intelligent tools',
    },
  ], []);

  const handleDotPress = (index) => {
    carouselRef.current?.scrollTo({ index });
    setCurrentIndex(index);
    setSwipeCount(0);
  };

  const handleRightPress = () => {
    if (currentIndex < rectangles.length - 1) {
      const nextIndex = currentIndex + 1;
      carouselRef.current?.scrollTo({ index: nextIndex });
      setCurrentIndex(nextIndex);
      setSwipeCount(0);
    } else {
      setSwipeCount((prev) => {
        const newCount = prev + 1;
        if (newCount >= 1) {
          navigation.navigate('WelcomeLogin');
        }
        return newCount;
      });
    }
  };

  const handleLeftPress = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      carouselRef.current?.scrollTo({ index: prevIndex });
      setCurrentIndex(prevIndex);
      setSwipeCount(0);
    }
  };

  return (
    <BrainboxContainer
      statusBarColor="transparent"
      statusBarStyle="light-content"
      statusBarHidden={false}
      style={commonStyles.screenWithPadding}
    >
      <View style={[commonStyles.container, { alignItems: 'center' }]}>

        {/* Skip Button */}
        <View style={commonStyles.skipContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('WelcomeLogin')}>
            <Text style={commonStyles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>

        <Carousel
          ref={carouselRef}
          width={width}
          height={480}
          data={rectangles}
          loop={false}
          style={{ marginTop: SCREEN_HEIGHT * 0.1}}
          scrollAnimationDuration={600}
          onSnapToItem={(index) => {
            if (currentIndex === rectangles.length - 1 && index === rectangles.length - 1) {
              // Swipe attempt beyond last slide
              setSwipeCount((prev) => {
                const newCount = prev + 1;
                if (newCount >= 1) {
                  navigation.navigate('WelcomeLogin');
                }
                return newCount;
              });
            } else {
              setSwipeCount(0); // Reset if user navigates properly
            }
            setCurrentIndex(index);
          }}
          renderItem={({ item: Rectangle }) => (
            <View style={commonStyles.imageContainer}>
              <Rectangle width={340} height={466} />
            </View>
          )}
          panGestureHandlerProps={{
            activeOffsetX: [-10, 10],
          }}
          autoPlay={false}
          pagingEnabled={true}
        />

        <View style={commonStyles.dotsContainer}>
          {rectangles.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                commonStyles.dot,
                currentIndex === index ? commonStyles.activeDot : null,
              ]}
              onPress={() => handleDotPress(index)}
            />
          ))}
        </View>

        <View>
          <Text style={commonStyles.headingTextLarge}>
            {textContent[currentIndex].heading}
          </Text>
          <Text style={commonStyles.headingTextv1}>
            {textContent[currentIndex].subheading}
          </Text>
        </View>

        {/* Navigation Buttons */}
        <View style={commonStyles.navContainer}>
          <TouchableOpacity
            style={commonStyles.navButton}
            onPress={handleLeftPress}
            disabled={currentIndex === 0}
          >
            <RightChevron
              width={20}
              height={20}
              fill={currentIndex === 0 ? BrainboxColor.gray : BrainboxColor.secondary}
            />
          </TouchableOpacity>

          <View style={commonStyles.dividerVertical} />

          <TouchableOpacity
            style={commonStyles.navButton}
            onPress={handleRightPress}
            disabled={false}
          >
            <LeftChevron
              width={20}
              height={20}
              fill={currentIndex === rectangles.length - 1 ? BrainboxColor.secondary : BrainboxColor.secondary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </BrainboxContainer>
  );
};

export default Splash_two;
