import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Dimensions } from 'react-native';

const windIcon = require('./icon/wind.png');
const tempIcon = require('./icon/temp.png');
const mainIcon = require('./icon/main.png');
const levelIcon = require('./icon/sea.png');


export default class Weather extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '',
        description: '',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
      }
    };
  }
  async getWeather() {
  try {
    let response = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=3fb85ae80f415f1edae3c4c503d14cc2&units=metric'
    );

    let responseJson = await response.json();
    return this.setState({
      forecast: {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        grnd_level: responseJson.main.grnd_level,
        speed: responseJson.wind.speed
      }
    });
  } catch (error) {
    console.error(error);
  }
}

  render() {
    return (
    <View style={styles.containerMain}>
      <View style={styles.box1}>

          <Text style={{ textAlign: 'center', paddingTop: 15, paddingBottom: 15, fontSize: 20 }}> Masukan Nama Kota </Text>
          <TextInput style={styles.input}
              onChangeText={(city) => this.setState({ city })}
            />

            <Button
              onPress={() => this.getWeather()}
              title="Lihat"
              color="black"
              accessibilityLabel="Klik untuk melihat cuaca"
            />
      </View>

      <View style={styles.box2}>
        <View style={styles.button}>
          <Text> City : { this.state.city} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={tempIcon} style={styles.icon} />
       </View>
          <Text> Temp : { this.state.forecast.temp} </Text>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={mainIcon} style={styles.icon} />
       </View>
          <Text> Main : { this.state.forecast.main} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={mainIcon} style={styles.icon} />
       </View>
          <Text> Main Desc : { this.state.forecast.description} </Text>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={mainIcon} style={styles.icon} />
       </View>
          <Text> Sunrise : { this.state.forecast.sunrise} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={mainIcon} style={styles.icon} />
       </View>
          <Text> Sunset : { this.state.forecast.sunset} </Text>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={levelIcon} style={styles.icon} />
       </View>
          <Text> Pressure : { this.state.forecast.pressure} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={levelIcon} style={styles.icon} />
       </View>
          <Text> Humidity : { this.state.forecast.humidity} </Text>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={levelIcon} style={styles.icon} />
       </View>
          <Text> Sea Level : { this.state.forecast.sea_level} </Text>
        </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={levelIcon} style={styles.icon} />
       </View>
          <Text> Ground Level : { this.state.forecast.grnd_level} </Text>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Image source={windIcon} style={styles.icon} />
       </View>
          <Text> Wind Speed : { this.state.forecast.speed} </Text>
        </View>
      </View>
</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 0.4,
    backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: 260,
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 3,
    textAlign: 'center'
  },
  box2: {
    flex: 0.3,
    backgroundColor: 'pink',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
    width: 140,
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    height: 40,
    width: 30,
  },
  icon: {
    tintColor: 'white',
    height: 20,
    width: 20,
  }
});
