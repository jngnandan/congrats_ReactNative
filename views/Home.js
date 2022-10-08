import { StyleSheet, Text, View, Screen, ScrollView, Image, ImageBackground } from 'react-native'
import React from 'react'

import {screen} from '../../simpleApp/images/screen.png'

export default function Home() {
  const img = {uri: "https://assets.ccbp.in/frontend/react-js/congrats-card-bg.png"}

  return (
    <View style={{height: '100%'}}>  
      <ImageBackground resizeMode="cover" source={img} style={styles.image}>
        <Text style={{fontSize: 36, fontWeight: '400', paddingBottom: 14}}>Congratualtions</Text>
        <View style={{backgroundColor: '#cffafe', width: '100%', height: 'auto', borderRadius: 6, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingVertical: 20}}>
            <Image source={{uri: "https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"}} style={{width: 100, height: 100}} />
            <Text style={{fontSize: 24, fontWeight: '400', marginTop: 10}}>Kiran V</Text>
            <Text style={{fontSize: 16, fontWeight: '400', marginTop: 10, textAlign: 'center'}}>You have successfully completed the React Native Basics Course</Text>
            <Image source={{uri: "https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"}} style={{width: 100, height: 100, marginTop: 20}} />

        </View>
              <Text>Hello</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    // resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
})