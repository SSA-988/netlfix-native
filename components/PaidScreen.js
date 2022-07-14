import { StyleSheet, Text, View, Pressable } from "react-native";
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const PaidScreen = () => {
  return (
    <View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>
          Claim Life Discount
        </Text>

        <View style={{ marginTop: 15 }}>
          <View
            style={{ flexDirection: "row", alignItems: "center", margin: 8 }}
          >
            <AntDesign name="star" size={20} color="#fada5e" />
            <Text style={{ fontSize: 16, color: "black", marginLeft: 5 }}>
              Unlimited Swiping
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", alignItems: "center", margin: 8 }}
          >
            <AntDesign name="star" size={20} color="#fada5e" />
            <Text style={{ fontSize: 16, color: "black", marginLeft: 5 }}>
              Ad Free Experience
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", alignItems: "center", margin: 8 }}
          >
            <AntDesign name="star" size={20} color="#fada5e" />
            <Text style={{ fontSize: 16, color: "black", marginLeft: 5 }}>
              Exclusive Avatars
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", alignItems: "center", margin: 8 }}
          >
            <AntDesign name="star" size={20} color="#fada5e" />
            <Text style={{ fontSize: 16, color: "black", marginLeft: 5 }}>
              Unlimited Rewards
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", alignItems: "center", margin: 8 }}
          >
            <AntDesign name="star" size={20} color="#fada5e" />
            <Text style={{ fontSize: 16, color: "black", marginLeft: 5 }}>
              A bold move a day
            </Text>
          </View>
        </View>

        <MaterialIcons name="payment" size={24} color="black" />

        <View style={{ marginTop: 10 }}>
          <Text style={{ textAlign: "center", fontSize: 18 }}>
            No Payment Required
          </Text>
          <Text style={{ textAlign: "center", fontSize: 18 }}>
            Claim for <Text style={{ fontWeight: "bold" }}>Free</Text>
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#e0ffff",
            padding: 20,
            borderRadius: 8,
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="chevron-double-right"
              size={24}
              color="black"
            />
            <Text>Limited Time Offer</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20 }}>
              ₹{" "}
              <Text
                style={{
                  textDecorationLine: "line-through",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                299
              </Text>{" "}
              99/month
            </Text>
          </View>

          <Text style={{ marginTop: 20, textAlign: "center" }}>
            Coming Soon
          </Text>

          <Pressable
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
              backgroundColor: "#9bddff",
              padding: 10,
              borderRadius: 17,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Register & Claim
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default PaidScreen

const styles = StyleSheet.create({})