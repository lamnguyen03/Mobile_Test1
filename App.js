import {Text,  View, ScrollView, StyleSheet,SafeAreaView, Image,FlatList  } from 'react-native'
import React from 'react'



const DATA = [
  {
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_rbMs59NaxBfDwhDWfQt93cOWjs6OCGwmNWPJU05bUryB-XTuAnIcuqdTgfHiJBDJzmA&usqp=CAU",
    title: "Sugar Substitute",
    
  },
  {
    title: "Sugar Substitute",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_rbMs59NaxBfDwhDWfQt93cOWjs6OCGwmNWPJU05bUryB-XTuAnIcuqdTgfHiJBDJzmA&usqp=CAU"
  },
  {
    title: "Sugar Substitute",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_rbMs59NaxBfDwhDWfQt93cOWjs6OCGwmNWPJU05bUryB-XTuAnIcuqdTgfHiJBDJzmA&usqp=CAU"
  },
];
const Item = ({imgUrl, title }) => (
  <View >
    <Image
      source={{
        uri: imgUrl,
      }}
      style={styles.imgUrl}
      />
    <Text style={styles.title}>{title}</Text>
  </View>
);
const App = () => {

  const renderItem = ({item }) => (
    <Item imgUrl={item.imgUrl} title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.banner}>
          <Image
          style={styles.bannerImg}
          source={{
            uri: 'https://thumbs.dreamstime.com/b/stethoscope-medication-pills-syringe-blue-flat-lay-background-diagnostics-concept-top-view-flat-lay-copy-space-stethoscope-178157614.jpg',
          }}
          />
          <View style={styles.textImage}>
            <Text style={{fontSize:20, color:'#1987FB'}}>Save extra on every order</Text>
            <Text>Etiam mollis metus non  {"\n"} faucibus sollicitudin.</Text>
          </View>
        </View>

        <View style={styles.topProducts}>
          <Text style={styles.topProducts.text}>Diabetic Diet</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
           <View  style={styles.pro}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
            />
           </View>
          </ScrollView>
          </View>

        <View style={styles.products}>
          <Text style={styles.topProducts.text}>All Products</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  bannerImg: {
    width: 350,
    height: 170,
    marginTop:25,
    marginLeft:20,
    borderRadius:10,
    
  },
  textImage:{
    position: 'absolute',
    top: 0,
    left: 90, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  topProducts:{
    marginTop:20,
      text:{
        color: 'black',
        fontSize:20,
        fontWeight: 'bold',
      }
  },
  imgUrl:{
    width: 100,
    height: 100,
  },
  title:{
    fontSize: 12,
    color: 'black',
  },
  pro:{
    backgroundColor: '#f9c2ff',
    width: 300,
  }

})

export default App