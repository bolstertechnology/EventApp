import React, { Component } from 'react';
import { View,Dimensions,Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
const { width } = Dimensions.get('window');
import moment from "moment";

export default class RNC_DTPicker extends Component {
    state={
        date: new Date(),
        mode:'date',
        show:true
    }
    onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        this.setState({
            date: currentDate,
        });
    };
    show=mode=>{
        this.setState({
            show:!this.state.show,
            mode,
        });
    }
    datepicker=()=>{
        this.show('date');
    }
    timepicker=()=>{
        this.show('time');
    }
    render(){
        const {show, date} = this.state;
        let maxdate = date;
        maxdate = moment(new Date()).subtract(18, "years").toISOString(); // for specific format

        return (                       
            <View style={{alignItems: "center", flexDirection: "row", height: 50,width: width * 0.9, justifyContent: "center", right: 20}}>
                    {/* <Text style={{ color:"black", flexDirection: "row",width: width * 0.5, textAlign :"center"}}>Select Birthdate</Text> */}
                {
                    show && (
                    <DateTimePicker   
                    style={{height: 50, width: width , color: "white"}}
                    textColor="white"
                    display="inline"                  
                    mode={"date"}
                    onChange={this.onChange}
                    maximumDate={maxdate}                  
                    value={date}
                    ></DateTimePicker>)
                }
            </View>
        )                    
    }
}