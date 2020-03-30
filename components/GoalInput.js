import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.btnContainer}>
          <View style={styles.button}><Button title="CANCEL" color="red" onPress={props.onCancel} /></View>
          <View style={styles.button}><Button title="ADD" onPress={addGoalHandler} /></View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    width: '70%'
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;
