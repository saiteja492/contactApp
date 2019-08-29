/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



import ContactForm from './src/components/contactForm';

import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";

import store from "./src/reducers";


const persist = store();

const App = () => {
  return (
    <Provider store={persist.store}>
                <PersistGate loading={null} persistor={persist.persistor}>
                  <ContactForm />
                </PersistGate>
            </Provider>
  );
};

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import Details from './components/Details';
// import {Avatar } from 'react-native-elements';
// import {Provider } from 'react-redux';


// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       name:"",
//       phoneNumber:"",
//       email:"",
//   }
//   }
//   numberediting=(num)=>{
//     const {phoneNumber}=this.state;
//     this.setState({phoneNumber:num})
//     }
//   emailediting=(email)=>{
//     this.setState({email});
//   }
//   namefinal=(name)=>{
//     this.setState({name});
//   }
//   submit=()=>{
//     const {name,phoneNumber,email}=this.state;
//     console.log("this",this.state);
//   }
//   render(){
//   return(
//     <View style={styles.container}>
//       <Text style={styles.text}>ContactApp</Text>
//       <View style={styles.container1}>
//       <TextInput
//       style={styles.textinput}
//       placeholder="enter name"
//       placeholderTextColor='#ffffff'
//       onChangeText={this.namefinal}/>
//       <TextInput 
//       style={styles.textinput}
//       placeholder="enter phone number"
//       keyboardType="number-pad"
//       placeholderTextColor='#ffffff'
//       onChangeText={this.numberediting}/>
//       <TextInput 
//       style={styles.textinput}
//       placeholder="enter email id"
//       placeholderTextColor='#ffffff'
//       keyboardType="email-address"
//       onChangeText={this.emailediting}/>
//       <TouchableOpacity style={styles.button}
//         onPress={this.submit}>
//         <Text style={styles.textButton}>submit</Text>
//       </TouchableOpacity>
      
//     </View>
//     </View>
//   )
// }
// }
// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:'#ff66d9',
    
//   },
//   button:{
//     backgroundColor:'#00ccff',
//     borderRadius:25,
//     marginVertical:15,
//     width:300,
//     paddingVertical:16,
//   },
//   textButton:{
//     fontSize:16,
//     textAlign:'center',
//   },
//   container1:{
//     justifyContent:'center',
//     alignItems:'center',

//   },
//   textinput:{
//     fontSize:16,
//     color:'#ffffff',
//     width:300,
//     backgroundColor:'#8c8cd9',
//     borderRadius:25,
//     marginVertical:10,
//     paddingHorizontal:16,
//   },
//   // avatar:{
//   //   justifyContent:'center',
//   //   alignItems:'center',
//   // },
//   text:{
//     fontWeight:'bold',
//     fontSize:25,
//     backgroundColor:'blue',
//     paddingBottom:15,
//     fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    
//   },
// })
//     <Fragment>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </Fragment>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// // });

export default App;
