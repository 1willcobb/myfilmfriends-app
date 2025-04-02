import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const UserPost = () => {
  const { username } = useLocalSearchParams();
  return (
    <View>
      <Text>UserPost {username}</Text>
    </View>
  );
};

export default UserPost;
