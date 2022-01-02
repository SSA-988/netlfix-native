import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import requests from '../requests';
import Row from './Row'

const Rows = () => {
    return (
      <View style={{ backgroundColor: "black",flex:1 }}>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchDocumentaries} />
        <Row title="Documentaries" fetchUrl={requests.fetchRomanceMovies} />
      </View>
    );
}

export default Rows

const styles = StyleSheet.create({})
