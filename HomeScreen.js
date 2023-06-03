import react from "react";
import {View,Text,StyleSheet,SafeAreaView, TextInput, Button, Image, ImageBackground} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Button from "../ui/Button/Button";
import ModifiedButton from "../ui/Button/Button";
// const {width} = Dimensions.get('window');

const HomeScreen=()=>{
    // const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    const Driver=["Jason Stathm","Domnic Torreto","Hobbs","Shaw","Letti","James Bond"]
    const Cars=["Aston Martin","Mercedes Benz","Audi","Ferrari","Bentely"]
    const City=['London',"Manhatton","Miami","Florida","Los Angles","Las Vegas"]
  return (
    <SafeAreaView >
        <View style={styles.cont} >
            <View style={styles.container}>
                <View style={styles.itemCont}>
                    <View style={styles.logoView}>
                        <Image
                        style={{width:"100%",height:"100%",resizeMode:'stretch'}}
                        source={require("../../assets/Images/transporte.jpg.jpg")}
                        
                        />
                    </View>

                        <View style={styles.dropdownView}>
                            <View style={{height:"25%",flexDirection:"column",justifyContent:'space-between',paddingTop:10}}>
                                <Text style={{color:'black',fontSize:25,fontWeight:"bold",paddingBottom:10}}>
                                    Driver
                                </Text>
                                
                                <View>
                                    <SelectDropdown
                                    data={Driver}
                                    // defaultValueByIndex={1}
                                    // defaultValue={'Egypt'}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index);
                                    }}
                                    //    defaultButtonText={''}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem;
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        return item;
                                    }}
                                    buttonStyle={styles.dropdown1BtnStyle}
                                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                    renderDropdownIcon={isOpened => {
                                        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={28} />;
                                    }}
                                    dropdownIconPosition={'right'}
                                    dropdownStyle={styles.dropdown1DropdownStyle}
                                    rowStyle={styles.dropdown1RowStyle}
                                    rowTextStyle={styles.dropdown1RowTxtStyle}
                                    selectedRowStyle={styles.dropdown1SelectedRowStyle}
                                    search
                                    searchInputStyle={styles.dropdown1searchInputStyleStyle}
                                    searchPlaceHolder={'Search here'}
                                    searchPlaceHolderColor={'darkgrey'}
                                    renderSearchInputLeftIcon={() => {
                                        return <FontAwesome name={'search'} color={'#444'} size={18} />;
                                    }}
                                    />
                                </View>
                            </View>
                            <View style={{height:"25%",flexDirection:"column",justifyContent:'space-between',paddingTop:10}}>
                                <Text style={{color:'black',fontSize:25,fontWeight:"bold",paddingBottom:10}}>
                                    Cars
                                </Text>
                                
                                <View>
                                    <SelectDropdown
                                    data={Cars}
                                    // defaultValueByIndex={1}
                                    // defaultValue={'Egypt'}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index);
                                    }}
                                    //    defaultButtonText={''}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem;
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        return item;
                                    }}
                                    buttonStyle={styles.dropdown1BtnStyle}
                                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                    renderDropdownIcon={isOpened => {
                                        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={28} />;
                                    }}
                                    dropdownIconPosition={'right'}
                                    dropdownStyle={styles.dropdown1DropdownStyle}
                                    rowStyle={styles.dropdown1RowStyle}
                                    rowTextStyle={styles.dropdown1RowTxtStyle}
                                    selectedRowStyle={styles.dropdown1SelectedRowStyle}
                                    search
                                    searchInputStyle={styles.dropdown1searchInputStyleStyle}
                                    searchPlaceHolder={'Search here'}
                                    searchPlaceHolderColor={'darkgrey'}
                                    renderSearchInputLeftIcon={() => {
                                        return <FontAwesome name={'search'} color={'#444'} size={18} />;
                                    }}
                                    />
                                </View>
                            </View>
                            
                            {/* <View style={{height:"25%",flexDirection:"column",justifyContent:'space-between',paddingTop:10}}>
                                <Text style={{color:'black',fontSize:25,fontWeight:"bold",paddingBottom:10}}>
                                    Pin
                                </Text>
                                <TextInput
                                 style={styles.dropdown1BtnStyle}
                                //  onChangeText={onChangeNumber}
                                //  value={number}
                                 placeholder="useless placeholder"
                                 keyboardType="numeric"
                                
                                />
                            </View> */}
                            <View style={{height:"25%",flexDirection:"column",justifyContent:'space-between',paddingTop:10}}>
                                <Text style={{color:'black',fontSize:25,fontWeight:"bold",paddingBottom:10}}>
                                    City
                                </Text>
                                
                                <View>
                                    <SelectDropdown
                                    data={City}
                                    // defaultValueByIndex={1}
                                    // defaultValue={'Egypt'}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index);
                                    }}
                                    //    defaultButtonText={''}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem;
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        return item;
                                    }}
                                    buttonStyle={styles.dropdown1BtnStyle}
                                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                    renderDropdownIcon={isOpened => {
                                        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={28} />;
                                    }}
                                    dropdownIconPosition={'right'}
                                    dropdownStyle={styles.dropdown1DropdownStyle}
                                    rowStyle={styles.dropdown1RowStyle}
                                    rowTextStyle={styles.dropdown1RowTxtStyle}
                                    selectedRowStyle={styles.dropdown1SelectedRowStyle}
                                    search
                                    searchInputStyle={styles.dropdown1searchInputStyleStyle}
                                    searchPlaceHolder={'Search here'}
                                    searchPlaceHolderColor={'darkgrey'}
                                    renderSearchInputLeftIcon={() => {
                                        return <FontAwesome name={'search'} color={'#444'} size={18} />;
                                    }}
                                    />
                                </View>
                            </View>
                            <View style={{height:"25%",alignItems:"center",justifyContent:"center",paddingTop:10}}>
                              <ModifiedButton
                              title="Sign In"
                              />
                            </View>
                        </View>

                </View>
                

            </View>

        </View>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    cont:{
    //   flex:1,
      
      backgroundColor:'white',
      height:"100%",
      width:"100%",
      alignItems:"center",
      justifyContent:"center",
  
    },
    container:{
        width:"75%",
        height:"90%",
        // backgroundColor:"red",
        alignItems:"center",
        justifyContent:"center"
    },
    itemCont:{
        width:"100%",
        height:"100%",
    },
    logoView:{
        height:"40%",

    },
    dropdownView:{
        height:"60%",
        flexDirection:"column",
        // justifyContent:"space-around"

        


    },
    dropdown1BtnStyle: {
        width: '100%',
        height: 60,
        backgroundColor: '#F0F0F0',
        borderRadius: 8,
        // borderWidth: 1,
        // borderColor: '#444',
      },
      dropdown1BtnTxtStyle: {
        color: '#444', textAlign: 'left'
    },
      dropdown1DropdownStyle: {
        backgroundColor: '#EFEFEF'
    },
      dropdown1RowStyle: {
        backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'
    },
      dropdown1RowTxtStyle: {
        color: '#444', textAlign: 'left'
    },
      dropdown1SelectedRowStyle: {
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
      dropdown1searchInputStyleStyle: {
        backgroundColor: '#EFEFEF',
        borderRadius: 8,
        // borderBottomWidth: 1,
        // borderBottomColor: '#444',
      },
    
  })
export default HomeScreen;