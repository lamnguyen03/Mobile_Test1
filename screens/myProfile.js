import { View, Text, StyleSheet , Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const myProfile = () => {
  return (
    <View>
      <View style={styles.profileName} >
        <Image
        source={{
          uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fr1owd6MRbY8x4olsdPPBsbrG4JD3iaY0Q&usqp=CAU'
        }}
        style={styles.avatar}
        ></Image>
      </View>

      <View style={styles.img_user}>
        <Text style={styles.userName}>Hi, Ben Cline</Text>
        <Text> <Text>Welcome to Medtech</Text></Text>
      </View>

      <View style={styles.container}>
        <View style={styles.list}>
          <Icon name = "sticky-note-o" size={30} color='black'></Icon>
          <Text> Private Account </Text>
        </View>

        <View style={styles.icon}>
          <Icon  name = "right" size={20} color='black'></Icon>
        </View>
      </View>
      <Text style={styles.line}> ────────────────────────────────</Text>

      <View style={styles.container}>
        <View style={styles.list}>
          <Icon name = "sticky-note-o" size={30} color='black'></Icon>
          <Text> My Consults </Text>
        </View>

        <View>
        <Icon style={styles.icon} name = "right" size={20} color='black'></Icon>
        </View>
      </View>
      <Text style={styles.line}> ────────────────────────────────</Text>

      <View style={styles.container}>
        <View style={styles.list}>
          <Icon name = "sticky-note-o" size={30} color='black'></Icon>
          <Text> My orders </Text>
        </View>

        <View>
        <Icon style={styles.icon} name = "right" size={20} color='black'></Icon>
        </View>
      </View>
      <Text style={styles.line}> ────────────────────────────────</Text>

      <View style={styles.container}>
        <View style={styles.list}>
          <Icon name = "sticky-note-o" size={30} color='black'></Icon>
          <Text> Billing </Text>
        </View>

        <View>
        <Icon style={styles.icon} name = "right" size={20} color='black'></Icon>
        </View>
      </View>
      <Text style={styles.line}> ────────────────────────────────</Text>

      <View style={styles.container}>
        <View style={styles.list}>
          <Icon name = "sticky-note-o" size={30} color='black'></Icon>
          <Text> Faq </Text>
        </View>

        <View>
        <Icon style={styles.icon} name = "right" size={20} color='black'></Icon>
        </View>
      </View>
      <Text style={styles.line}> ────────────────────────────────</Text>

      <View style={styles.container}>
        <View style={styles.list}>
          <Icon name = "sticky-note-o" size={30} color='black'></Icon>
          <Text> Settings </Text>
        </View>

        <View>
        <Icon style={styles.icon} name = "right" size={20} color='black'></Icon>
        </View>
      </View>
      <Text style={styles.line}> ────────────────────────────────</Text>
    </View>
   
  )
}
const styles= StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius:50,
  },
  userName:{
    fontSize:20,
    color:'black',
    fontWeight: "bold",
  },
  profileName:{
    flex:1,
    flexDirection:'row'
  },
  img_user:{
    marginLeft:67,
    marginTop:5,
  },
  container:{
    marginLeft:40,
    marginTop: 30,
    flexDirection:'row',
    
  },
  list:{
    flexDirection:'row',
    flex: 1,
  },
  icon:{
    
  },
  line:{
    marginLeft:40
  }
});
export default myProfile
