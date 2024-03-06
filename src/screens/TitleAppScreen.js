import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import checkmark from "../img/titleAppScreenImage/Checkmark.png";
import { THEME } from "../theme";

export default function TitleAppScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeIn();
  }, []);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(fadeOut);
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => navigation.navigate("onboardingScreen"));
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.contentWrap}>
        <Image source={checkmark}></Image>
        <Text style={styles.titleText}>DO IT</Text>
      </View>

      <View>
        <Text style={styles.versionText}>v 1.0.0</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  contentWrap: {
    alignItems: "center",
  },
  titleText: {
    margin: 25,
    fontFamily: "darumadrop-one",
    fontSize: 36,
    fontWeight: "bold",
    color: THEME.WHITE_TEXT_COLOR,
  },
  versionText: {
    fontSize: 20,
    fontFamily: "poppins-regular",
    color: THEME.WHITE_TEXT_COLOR,
  },
});
