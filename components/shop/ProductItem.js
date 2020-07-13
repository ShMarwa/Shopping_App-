import React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";

const ProducItem = (props) => {
  return (
    <View style={styles.product}>
      <Image />
      <Text>Title</Text>
      <Text>$Price</Text>
      <View>
        <Button title="View Details"></Button>
        <Button title="To Cart"></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
});
export default ProducItem;
