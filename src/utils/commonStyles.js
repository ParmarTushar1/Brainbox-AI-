import { StyleSheet } from 'react-native';
import BrainboxColor from './Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH, wp, hp } from './responsive';

const commonStyles = StyleSheet.create({
  // ==================== SCREEN STYLES ====================
  screen: {
    backgroundColor: BrainboxColor.Black,
    flex: 1,
  },
  screenWithPadding: {
    backgroundColor: BrainboxColor.Black,
    flex: 1,
    padding: 0,
  },
  screenSpaceBetween: {
    backgroundColor: BrainboxColor.Black,
    flex: 1,
    justifyContent: 'space-between',
  },
  wrapper: {
    flex: 1,
  },

  // ==================== CONTAINER STYLES ====================
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContainerWithPadding: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  headerContainer: {
    marginTop: hp(2),
    paddingHorizontal: 20,
  },
  headerContainerCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingBottom: SCREEN_HEIGHT * 0.05,
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginTop: hp(2),
  },
  inputContainerWithGap: {
    paddingHorizontal: 20,
    marginTop: hp(2),
    gap: 10,
  },
  selectionContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  buttonWrapper: {
    alignItems: 'center',
    gap: hp(2),
    marginBottom: SCREEN_HEIGHT * 0.05,
  },
  bottomButtonContainer: {
    paddingHorizontal: 24,
    paddingBottom: hp(4),
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingBottom: SCREEN_HEIGHT * 0.05,
  },

  // ==================== TEXT STYLES ====================
  // Large Heading (Welcome To BrainBox)
  headingText: {
    fontFamily: 'Manrope-ExtraBold',
    fontWeight: '800',
    fontSize: 45,
    color: BrainboxColor.secondary,
    textAlign: 'center',
    marginTop: hp(2),
  },
  headingTextLarge: {
    fontWeight: '800',
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 33.5,
    color: BrainboxColor.secondary,
    marginTop: SCREEN_HEIGHT * 0.02,
    textAlign: 'center',
  },
  // Subheading (SemiBold, Silver/Graysteel)
  headingTextv1: {
    fontWeight: '600',
    fontFamily: 'Manrope-SemiBold',
    fontSize: 16.5,
    color: BrainboxColor.Silver,
    marginTop: 15,
    textAlign: 'center',
  },
  headingTextv1Graysteel: {
    fontWeight: '600',
    fontFamily: 'Manrope-SemiBold',
    fontSize: 16,
    color: BrainboxColor.Graysteel,
    marginTop: 15,
  },
  // Title Styles (34px, Bold)
  titleLineOne: {
    fontSize: 34,
    fontWeight: '700',
    color: BrainboxColor.secondary,
  },
  titleLineTwo: {
    fontSize: 34,
    fontWeight: '700',
    color: BrainboxColor.secondary,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: BrainboxColor.secondary,
    textAlign: 'center',
  },
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  // Body Text
  bodyText: {
    fontSize: 16,
    color: BrainboxColor.secondary,
    fontFamily: 'Manrope-Regular',
  },
  bodyTextMedium: {
    fontSize: 14,
    color: BrainboxColor.secondary,
    fontFamily: 'Manrope-Medium',
  },
  // Grey/Silver Text
  greyText: {
    color: BrainboxColor.gray,
    fontSize: 14,
    fontFamily: 'Manrope-Medium',
  },
  whiteText: {
    color: BrainboxColor.secondary,
    fontSize: 14,
    fontFamily: 'Manrope-Medium',
  },
  silverText: {
    color: BrainboxColor.Silver,
    fontSize: 14,
    fontWeight: '400',
  },
  // Subtitle/Description Text
  subtitle: {
    color: BrainboxColor.Graysteel,
    fontSize: 14,
    marginTop: 12,
    textAlign: 'center',
  },
  orText: {
    fontSize: 14,
    color: BrainboxColor.Graysteel,
    fontFamily: 'Manrope-Medium',
    marginVertical: hp(1.5),
  },
  orTextTop: {
    fontSize: 14,
    color: BrainboxColor.Graysteel,
    fontFamily: 'Manrope-Medium',
    top: SCREEN_HEIGHT * 0.012,
  },
  orTextWithWeight: {
    fontSize: 14,
    color: BrainboxColor.Graysteel,
    fontWeight: '500',
  },
  // Link/Button Text
  forgotText: {
    color: BrainboxColor.Silver,
    fontSize: 14,
    fontWeight: '400',
  },
  signupText: {
    color: BrainboxColor.Silver,
    fontSize: 14,
  },
  signupLink: {
    color: BrainboxColor.secondary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  skipText: {
    color: BrainboxColor.secondary,
    fontSize: 16,
    fontWeight: '600',
  },
  // Success/Error Text
  successText: {
    color: 'green',
    fontSize: 12,
    fontWeight: '500',
  },
  successTextLime: {
    color: 'limegreen',
    fontSize: 14,
    fontWeight: '500',
  },
  errorText: {
    fontSize: 12,
    color: BrainboxColor.ErrorRed,
    fontFamily: 'Manrope-Medium',
    marginTop: 4,
  },
  timerText: {
    textAlign: 'center',
    color: BrainboxColor.Graysteel,
    marginVertical: 8,
    fontSize: 13,
  },
  // Footer Text
  footerText: {
    fontFamily: 'Manrope-SemiBold',
    fontWeight: '700',
    color: 'white',
    fontSize: 25,
  },
  footerTextTwo: {
    fontFamily: 'Manrope-Regular',
    fontWeight: '400',
    color: BrainboxColor.gray,
    fontSize: 17,
  },

  // ==================== LAYOUT STYLES ====================
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInRow: {
    marginTop: 24,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupContainer: {
    marginTop: hp(3),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  successRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  successRowSimple: {
    marginTop: 5,
  },
  forgotContainer: {
    alignItems: 'flex-end',
  },
  textContainer: {
    marginLeft: 12,
  },

  // ==================== SOCIAL/CARD STYLES ====================
  socialContainer: {
    alignItems: 'center',
    gap: wp(5),
    marginBottom: 24,
    top: SCREEN_HEIGHT * 0.045,
  },
  socialContainerWithMargin: {
    alignItems: 'center',
    marginTop: hp(9),
    gap: hp(2),
  },
  socialButtonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: wp(4),
  },
  socialButtonRowColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: wp(4),
  },
  // Card Styles
  card: {
    backgroundColor: BrainboxColor.Onyx,
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
  },
  cardSelected: {
    borderWidth: 1.5,
    borderColor: BrainboxColor.secondary,
  },
  cardTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: BrainboxColor.gray,
    fontSize: 14,
    marginTop: 4,
  },

  // ==================== DIVIDER STYLES ====================
  divider: {
    height: hp('0.1'),
    backgroundColor: BrainboxColor.Silver,
    marginVertical: 20,
    width: SCREEN_WIDTH * 0.9,
    top: SCREEN_HEIGHT * 0.045,
  },
  sectionLine: {
    height: 1,
    width: SCREEN_WIDTH * 0.9,
    backgroundColor: BrainboxColor.Silver,
    alignSelf: 'center',
    marginVertical: hp(2),
  },
  dividerHorizontal: {
    width: '100%',
    height: 1,
    backgroundColor: BrainboxColor.Silver,
    marginVertical: 16,
  },
  dividerVertical: {
    width: 1,
    height: 26,
    backgroundColor: BrainboxColor.secondary,
    opacity: 0.5,
  },

  // ==================== SPACING UTILITIES ====================
  marginTopSmall: {
    marginTop: hp(1),
  },
  marginTopMedium: {
    marginTop: hp(2),
  },
  marginTopLarge: {
    marginTop: hp(4),
  },
  marginTopExtra: {
    marginTop: SCREEN_HEIGHT * 0.1,
  },
  marginBottomSmall: {
    marginBottom: hp(1),
  },
  marginBottomMedium: {
    marginBottom: hp(2),
  },
  marginBottomLarge: {
    marginBottom: hp(4),
  },
  buttonSpacing: {
    marginTop: hp(3),
  },
  paddingHorizontal: {
    paddingHorizontal: 20,
  },
  paddingVertical: {
    paddingVertical: 16,
  },

  // ==================== MESSAGE/CHAT STYLES ====================
  messageWrapper: {
    marginBottom: 12,
  },
  messageBubble: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 16,
  },
  userBubble: {
    backgroundColor: BrainboxColor.DarkGray2,
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  aiBubble: {
    backgroundColor: BrainboxColor.DarkGray2,
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    color: BrainboxColor.secondary,
    fontSize: 16,
  },
  chatContainer: {
    padding: 16,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  content: {
    flex: 1,
  },

  // ==================== INPUT BAR STYLES ====================
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BrainboxColor.DarkGray2,
    borderRadius: 30,
    paddingHorizontal: 10,
    margin: 9,
    minHeight: 60,
  },
  textInput: {
    flex: 1,
    color: BrainboxColor.secondary,
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
    backgroundColor: BrainboxColor.DarkGray2,
    borderRadius: 20,
  },
  sendDisabled: {
    backgroundColor: BrainboxColor.MediumGray,
    borderRadius: 20,
  },
  micButton: {
    backgroundColor: BrainboxColor.MediumGray,
    borderRadius: 20,
  },

  // ==================== ICON STYLES ====================
  iconSmall: {
    padding: 6,
  },
  iconMedium: {
    padding: 8,
  },
  iconLarge: {
    padding: 12,
  },
  actionsRow: {
    flexDirection: 'row',
    marginTop: 6,
    marginLeft: 4,
  },
  iconWrapper: {
    padding: 4,
    zIndex: 2,
  },
  iconBackground: {
    backgroundColor: BrainboxColor.DarkGray,
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: BrainboxColor.Black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    left: -4,
  },

  // ==================== CAROUSEL/DOTS STYLES ====================
  skipContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: BrainboxColor.gray,
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: BrainboxColor.secondary,
    width: 10,
    height: 10,
  },
  navContainer: {
    flexDirection: 'row',
    backgroundColor: BrainboxColor.Onyx,
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 140,
    height: 50,
    alignSelf: 'center',
    marginTop: SCREEN_HEIGHT * 0.03,
  },
  navButton: {
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },

  // ==================== OTP/SPECIFIC STYLES ====================
  otpWrapper: {
    alignSelf: 'stretch',
    marginBottom: 24,
  },
});

export default commonStyles;
