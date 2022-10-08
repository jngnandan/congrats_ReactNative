import { StyleSheet, Text, View, Screen, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style={{height: '100%', }}>
    <View style={styles.centered}>
      <Text style={{fontSize: 30, fontWeight: '700', color: 'white', paddingBottom: 14,}}>Super Over League</Text>
      <View style={{flexDirection: 'row'}}>
        <Image
        style={styles.logo}
        source={{
          uri: 'https://assets.ccbp.in/frontend/react-js/rcb-img.png',
        }}
      />
      <Image
        style={styles.logo}
        source={{
          uri: 'https://assets.ccbp.in/frontend/react-js/csk-img.png',
        }}
      />
      

      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centered: {
    flex: 2, 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f172a",
    // alignSelf: 'center',
    // height: '50%',
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: '#fff'
  },
  logo: {
    width: 180,
    height: 200,
  }

})