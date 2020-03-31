import React, { Component } from 'react'
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import  AppBar  from 'material-ui/AppBar';
import  RaisedButton  from 'material-ui/RaisedButton';

export class Gameplay extends Component {

    button1 = () => {
        this.props.set_user('1');    

        console.log(this.props);
    };
    
    button2 = () => {
        this.props.set_user('2');    

    };
    
    render() {
        const{pc, set_pc}=this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Say20"/>
                    <br/>
                    <label>My answer: {set_pc}</label>
                    <br/>
                    <RaisedButton 
                    label={pc+1}
                    onClick={this.button1}
                    />
                    <br/>
                    <br/>
                    <RaisedButton label={pc+2}
                    onClick={this.button2}
                    />
                    <br/>
                    <br/>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Gameplay
