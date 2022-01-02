import React, { useEffect, useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const Row = ({ title, fetchUrl }) => {
  const API_KEY = "b93a64480573ce5248c28b200d79d029";
  const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    const movieData = async () => {
      await fetch(fetchUrl)
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    };
    movieData();
  }, []);
  console.log("😜🎗️💯", modalData);
  return (
    <>
      <View>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 19 }}>
          {title}
        </Text>
        <ScrollView style={{}} horizontal>
          {movies.map((movie, id) => (
            <>
              <Pressable
                key={id}
                onPress={() => {
                  setModalData(movie);
                  setModal(true);
                }}
              >
                <Image
                  style={{
                    width: 105,
                    height: 152,
                    margin: 10,
                    borderRadius: 6,
                    resizeMode: "cover",
                  }}
                  source={{
                    uri: `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
                  }}
                />
              </Pressable>
              <Modal
                animationType="slide"
                visible={modal}
                key={movie.id}
              
                transparent={true}
                onCloseRequest={() => setModal(false)}
              >
                {/* {showModal(movie,id)} */}
                <View
                  style={{
                    flex: 1,
                    // backgroundColor: "rgba(0,0,0,0.7)",
                    justifyContent: "flex-end",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "rgb(60, 60, 60)",
                      height: 286,
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                      // padding: 15,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        padding: 15,
                        justifyContent: "space-between",
                      }}
                    >
                      <Image
                        style={{
                          width: 100,
                          height: 130,
                          resizeMode: "cover",
                          borderRadius: 4,
                        }}
                        source={{
                          uri: `https://image.tmdb.org/t/p/original/${modalData?.backdrop_path}`,
                        }}
                      />
                      <View style={{ marginLeft: 16 }}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "700",
                            // width:200,
                            width: "74%",
                            color: "white",
                          }}
                        >
                           {modalData?.title.length > 26
                            ? modalData?.title.substr(0, 26)
                            : modalData?.title} 
                            {/* {modalData?.title || modalData?.name} */}
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            color: "rgb(120, 120, 120)",
                            marginBottom: 8,
                          }}
                        >
                          2018 18+ 3 seasons
                        </Text>
                        <Text
                          style={{ width: 260, color: "white", fontSize: 15 }}
                        >
                          {modalData?.overview.length > 125
                            ? modalData?.overview.substr(0, 125) + "..."
                            : modalData?.overview}
                        </Text>
                      </View>
                      <Pressable
                        onPress={() => setModal(false)}
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute",
                          bottom: 110,
                          right: 5,
                        }}
                      >
                        <AntDesign
                          style={{ paddingBottom: 10 }}
                          name="closecircle"
                          size={25}
                          color="rgb(120, 120, 120)"
                        />
                      </Pressable>
                    </View>

                    <View
                      style={{
                        padding: 15,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Pressable
                        style={{
                          backgroundColor: "white",
                          padding: 5,
                          flexDirection: "row",
                          alignItems: "center",
                          width: 180,
                          justifyContent: "center",
                          borderRadius: 3,
                        }}
                      >
                        <Entypo
                          name="controller-play"
                          size={24}
                          color="black"
                        />
                        <Text style={{ fontSize: 18, fontWeight: "600" }}>
                          Play
                        </Text>
                      </Pressable>
                      <View>
                        <AntDesign
                          style={{ textAlign: "center" }}
                          name="download"
                          size={24}
                          color="white"
                        />
                        <Text style={{ color: "gray" }}>Download</Text>
                      </View>
                      <View>
                        <AntDesign
                          style={{ textAlign: "center" }}
                          name="eyeo"
                          size={24}
                          color="white"
                        />
                        <Text style={{ color: "gray" }}>Preview</Text>
                      </View>
                    </View>
                    <Text style={{ backgroundColor: "gray", height: 1 }}></Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: 8,
                        margin:"auto"
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <AntDesign name="infocirlceo" size={20} color="white" />
                        <Text style={{ marginLeft: 5, color: "white" }}>
                          Details and More
                        </Text>
                      </View>
                      <AntDesign name="right" size={18} color="white" />
                    </View>
                  </View>
                </View>
              </Modal>
            </>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Row;

const styles = StyleSheet.create({});
