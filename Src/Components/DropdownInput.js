import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import ColorStyles from "../Colors/ColorStyles";
import { AntDesign } from "@expo/vector-icons";
const DropdownInput = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [expertieslevel, setExpertieslevel] = useState("Intermediate");
  let levels = ["Beginner", "Intermediate", "Expert"];
  return (
    <View
      style={{
        height: 120,
        width: "90%",
        // backgroundColor: "yellow",
      }}
    >
      <Text style={{ color: ColorStyles.greycolor, fontSize: 19 }}>
        Email/Username
      </Text>
      <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
        style={{
          height: 60,
          width: "95%",
          paddingLeft: 20,
          //   backgroundColor: "green",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 17 }}>{expertieslevel}</Text>
        <AntDesign name="down" size={22} color="black" />
      </TouchableOpacity>
      <View
        style={{
          height: 3,
          width: "100%",
          backgroundColor: true
            ? ColorStyles.primaryColor
            : ColorStyles.greycolor,
        }}
      ></View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 22,
            }}
          >
            <View style={styles.modalView}>
              {levels.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={{ marginVertical: 5 }}
                  onPress={() => {
                    setModalVisible(!modalVisible), setExpertieslevel(item);
                  }}
                >
                  <Text style={styles.textStyle}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  modalView: {
    width: "70%",
    height: "40%",
    justifyContent: "center",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
export default DropdownInput;