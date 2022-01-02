import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  StatusBar,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const Screen = () => {
  const [letter, setLetter] = useState("A", "B");
  const [selected, setSelected] = useState("");
  const seats = [
    {
      id: "1",
      name: 1,
      text: "A",
    },
    {
      id: "2",
      name: 2,
      text: "A",
    },
    {
      id: "3",
      name: 3,
      text: "A",
    },

    {
      id: "4",
      name: 4,
      text: "A",
    },
    {
      id: "5",
      name: 5,
      text: "A",
    },
    {
      id: "6",
      name: 6,
      text: "A",
    },

    {
      id: "7",
      name: 7,
      text: "A",
    },
    {
      id: "8",
      name: 8,
      text: "A",
    },
    {
      id: "9",
      name: 9,
      text: "A",
    },
    {
      id: "10",
      name: 10,
      text: "A",
    },
    {
      id: "11",
      name: 11,
      text: "A",
    },
    {
      id: "12",
      name: 12,
      text: "A",
    },
  ];
  const seat = [
    {
      id: "1",
      name: 1,
      text: "B",
    },
    {
      id: "2",
      name: 2,
      text: "B",
    },
    {
      id: "3",
      name: 3,
      text: "B",
    },

    {
      id: "4",
      name: 4,
      text: "B",
    },
    {
      id: "5",
      name: 5,
      text: "B",
    },
    {
      id: "6",
      name: 6,
      text: "B",
    },

    {
      id: "7",
      name: 7,
      text: "B",
    },
    {
      id: "8",
      name: 8,
      text: "B",
    },
    {
      id: "9",
      name: 9,
      text: "B",
    },
    {
      id: "10",
      name: 10,
      text: "B",
    },
    {
      id: "11",
      name: 11,
      text: "B",
    },
    {
      id: "12",
      name: 12,
      text: "B",
    },
  ];
  const onclick = (name, text) => {
    setSelected(name);
    setLetter(text);
  };
  const onclickk = (name, text) => {
    setSelected(name);
    setLetter(text);
  };
  const rows = [
    [
      { id: 1, number: "A1" },
      { id: 2, number: "A2" },
      { id: 3, number: "A3" },
      { id: 4, number: "A4" },
      null,
      { id: 5, number: "A5" },
      { id: 6, number: "A6" },
      { id: 7, number: "A7" },
      { id: 8, number: "A8" },
      { id: 9, number: "A9", isReserved: true },
    ],
    [
      { id: 11, number: 1 },
      { id: 12, number: 2 },
      { id: 13, number: 3, isReserved: true },
      { id: 14, number: 4 },
      null,
      { id: 15, number: 5 },
      { id: 16, number: 6 },
      { id: 17, number: 7 },
      { id: 18, number: 8 },
      { id: 19, number: 9 },
    ],
    [
      { id: 21, number: 1 },
      { id: 22, number: 2 },
      { id: 23, number: 3 },
      { id: 24, number: 4 },
      null,
      { id: 25, number: 5 },
      { id: 26, number: 6 },
      { id: 27, number: 7, isReserved: true },
      { id: 28, number: 8 },
      { id: 29, number: 9 },
      null,
      { id: 30, number: 10 },
      { id: 31, number: 11 },
      { id: 32, number: 12 },
    ],
  ];
  const API_KEY = "b93a64480573ce5248c28b200d79d029";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const movieData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) =>
          setMovies(
            data.results[Math.floor(Math.random() * data.results.length - 1)]
          )
        );
    };
    movieData();
  }, []);
  const title = movies.title || movies.name || movies.original_name;
  return (
    <View style={{ marginTop: 30, backgroundColor: "black", flex: 1 }}>
      <StatusBar style="dark" />
      <View style={{}}>
        <ImageBackground
          style={{ width: "100%", height: 480, position: "relative" }}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ height: 50, width: 120 }}
              source={{
                uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <Feather
                name="search"
                size={24}
                color="white"
                style={{ paddingRight: 10 }}
              />
              <Image
                style={{
                  height: 30,
                  width: 30,
                  paddingHorizontal: 10,
                  borderRadius: 7,
                  resizeMode: "contain",
                }}
                source={{
                  uri: "https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "80%",
              margin: 20,
              justifyContent: "center",
              paddingLeft: 20,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>
              TV Shows
            </Text>
            <Text
              style={{
                color: "white",
                paddingHorizontal: 30,
                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              Movies
            </Text>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>
              Categories
            </Text>
          </View>
          <View
            style={{
              marginTop: 13,
              padding: 6,
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "auto",
              marginBottom: 20,
              paddingHorizontal: 30,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 34,
                fontWeight: "bold",
              }}
            >
              {title}
            </Text>
          </View>
        </ImageBackground>
        <LinearGradient
          // colors={["#085d87", "#27c7bb"]}
          colors={["#434343","#000000"]}
          style={{
            backgroundColor: "#900C3F",
            height: 70,
            // borderRadius: 10,
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
            flexDirection: "row",
            padding: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <AntDesign
              style={{ textAlign: "center" }}
              name="plus"
              size={24}
              color="white"
            />
            <Text style={{ color: "white" }}>My List</Text>
          </View>
          <View
            style={{
              backgroundColor: "white",
              padding: 3,
              width: 120,
              borderRadius: 6,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo name="controller-play" size={24} color="black" />
            <Text
              style={{
                textAlign: "center",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Play
            </Text>
          </View>
          <View>
            <Feather name="info" size={24} color="white" />
            <Text style={{ color: "white" }}>Info</Text>
          </View>
          {/* <LinearGradient
            colors={["#085d87", "#27c7bb"]}
            // start={{ x: 0, y: 1 }}
            // end={{ x: 1, y: 0 }}
          >
            <Text style={styles.buttonText}>LinearGradient</Text>
          </LinearGradient> */}
        </LinearGradient>
      </View>
      <Text></Text>
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({});
