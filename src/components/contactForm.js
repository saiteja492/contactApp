import React from 'react';
import { View, Text, TextInput, Button, FlatList,TouchableOpacity,StyleSheet} from 'react-native';
import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm, Field, formValueSelector} from "redux-form";

import { addContact,deleteContact,updateContact } from '../actions/contactAction';


class ContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: "",
            email: "",
            number: ""
        }
    }
    createRandomId = () => {
        let text = "";
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 5; i += 1) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    addContact = ()=>{
        if(this.state.name.length > 0 || this.state.email.length > 0 || this.state.number.length > 0){
          let id =  this.createRandomId();
          let obj = {
              id: id,
              name: this.state.name,
              email: this.state.email,
              number: this.state.number
          }
          console.log("obj",obj);
            this.props.addContact(obj)
        }
        console.log("this.state", this.state);
        
    }
    onChangeName = (name)=>{
        this.setState({name});
    }
    onChangeEmail = (email)=>{
        this.setState({email});
    }
    onChangeNumber = (number)=>{
        this.setState({number});
    }

    _renderItem = ({item}) => {
        // console.log("item",item.id);
        return(
            <View style={{flex:1,backgroundColor:'white',padding:10}}>
                
            <Text style={styles.list}>{item.name}</Text>
            <Text style={styles.list}>{item.email}</Text>
            <Text style={styles.list}>{item.number}</Text>
            <TouchableOpacity onPress={()=>{
                this.props.deleteContact(item.id)}}>
                <Text style={styles.deletebutton}>Delete</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={()=>{
                this.props.editContact(item.id)}}>
                <Text style={styles.editbutton}>Edit</Text>
            </TouchableOpacity> */}
            </View>
        )
    }
    
    render(){
        return(
            <View style={{flex: 1}}>
                <Text style={styles.title}>ContactApp</Text>
                <TextInput 
                onChangeText={this.onChangeName}
                placeholder="name"
                style={styles.textinput}
                placeholderTextColor='#ff6600'
                />
                <TextInput 
                onChangeText={this.onChangeEmail}
                placeholder="Email"
                style={styles.textinput}
                placeholderTextColor='#ff6600'
                keyboardType='email-address'
                />
                <TextInput 
                onChangeText={this.onChangeNumber}
                placeholder="Number"
                style={styles.textinput}
                placeholderTextColor='#ff6600'
                keyboardType='number-pad'
                />
                <TouchableOpacity onPress={this.addContact} 
                style={styles.button}>
                    <Text style={styles.buttontext}>submit</Text>
                </TouchableOpacity>
                {/* <Button title="submit" onPress={this.addContact}
                style={styles.button}/> */}
                <FlatList
                  data={this.props.contacts}
                  renderItem={this._renderItem}
                  keyExtractor={this._keyExtractor}
              />
            </View>
        )
    }
}
 
const styles=StyleSheet.create({
    title:{
        fontSize:15,
        backgroundColor:'green',
        marginVertical:20,
        fontWeight:'bold',
        paddingVertical:15,
    },
    textinput:{
        backgroundColor:'#a3c2c2',
        borderRadius:25,
        marginTop:5,
        marginBottom:10,
        
    },
    button:{
        marginTop:20,
        borderRadius:25,
        backgroundColor:'blue',
        paddingVertical:10,
    },
    buttontext:{
        textAlign:'center',
        fontSize:20,
    },
    list:{
        fontSize:25,
        textAlign:'left',
    },
    deletebutton:{
        color:'red',
        fontSize:20,
        textAlign:'right',
        padding:5,
    },
    // editbutton:{
    //     color:'green',
    //     fontSize:20,
    //     textAlign:'right',
    //     padding:5,
    // },
})

const mapStateToProps = (state) => ({
    contacts: state.contactReducer.contacts
});
  
const mapDispatchToProps = dispatch => {
    return{
        addContact: (contact) => dispatch(addContact(contact)),
        deleteContact: (id) => dispatch(deleteContact(id)),
        editContact: (id)=> dispatch(updateContact(id))
}};

export default connect(mapStateToProps,mapDispatchToProps)(ContactForm);


