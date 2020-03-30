import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#eee",
    borderColor: "black",
    borderWidth: 1
  }
});

export default GoalItem;
