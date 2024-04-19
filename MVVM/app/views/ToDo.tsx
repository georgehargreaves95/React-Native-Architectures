import React from 'react';

import { Pressable, StyleSheet, Text, View } from "react-native"
import { useToDoViewController } from "../viewcontrollers/ToDoViewController"



export const ToDo = () => {
  const viewController = useToDoViewController();
  return (
    <View style={styles.root}>
      <Pressable style={styles.button} onPress={() => viewController.onClickAThing()}>
        <Text style={styles.buttonTitle}>Tap to do a thing!</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 50,
    width: 200,
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonTitle: {
    color: 'black',
    fontSize: 18.
  }
})