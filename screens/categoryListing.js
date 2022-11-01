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
  {
    title: "Sugar Substitute",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_rbMs59NaxBfDwhDWfQt93cOWjs6OCGwmNWPJU05bUryB-XTuAnIcuqdTgfHiJBDJzmA&usqp=CAU"
  },{
    title: "Sugar Substitute",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_rbMs59NaxBfDwhDWfQt93cOWjs6OCGwmNWPJU05bUryB-XTuAnIcuqdTgfHiJBDJzmA&usqp=CAU"
  },
];

const Products=[
  {
    imgPro:"https://mobycare.vn/wp-content/uploads/2022/04/sua-chua-yakult-600x500.jpg",
    titlePro:"Sữa Chua Yakult",
    price:"10.000VND "
  },
  {
    imgPro:"https://mobycare.vn/wp-content/uploads/2022/04/sua-chua-yakult-600x500.jpg",
    titlePro:"Sữa Chua Yakult",
    price:"10.000VND "
  },
  {
    imgPro:"https://mobycare.vn/wp-content/uploads/2022/04/sua-chua-yakult-600x500.jpg",
    titlePro:"Sữa Chua Yakult",
    price:"10.000VND "
  },
  {
    imgPro:"https://mobycare.vn/wp-content/uploads/2022/04/sua-chua-yakult-600x500.jpg",
    titlePro:"Sữa Chua Yakult",
    price:"10.000VND "
  },
]
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

const Product = ({imgPro, titlePro, price }) => (
  <View style={styles.productsList}>
    <Image
      source={{
        uri: imgPro,
      }}
      style={styles.imgUrl}
    />
    <Text style={styles.title}>{titlePro}</Text>
    <Text style={styles.title}>{price}</Text>
  </View>
);

const categoryListing = () => {

  const renderItem = ({item }) => (
    <Item imgUrl={item.imgUrl} title={item.title} />
  );

  const renderProduct = ({item }) => (
    <Product imgPro={item.imgPro}   titlePro={item.titlePro} />
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
          <ScrollView showsHorizontalScrollIndicator={false} >
           <View  style={styles.pro}>
            <FlatList horizontal={true} 
              data={DATA}
              renderItem={renderItem}
            />
           </View>
          </ScrollView>
          </View>

        <View style={styles.products}>
          <Text style={styles.topProducts.text}>All Products</Text>
          <View>
            <FlatList 
              data={Products}
              renderItem={renderProduct}
              numColumns={2}
            />
           </View>
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
    width: 150,
    height: 150,
    marginLeft:30,
  },
  title:{
    fontSize: 12,
    color: 'black',
    marginLeft:60,
  },
  pro:{
    width: 330,
    padding: 30,

  },

})

export default categoryListing