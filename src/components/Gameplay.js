import React, { Component } from 'react'
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import  AppBar  from 'material-ui/AppBar';
import  RaisedButton  from 'material-ui/RaisedButton';

export class Gameplay extends Component {

    button1 = () => {
        this.props.gameplay(1);    
    };
    
    button2 = () => {
        this.props.gameplay(2);    
    };
    
    render() {
        const{answer}=this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar showMenuIconButton={false} titleStyle={styles.AppTitle} title="Say20"/>
                    <br/>
                    <br/>
                    <label style={styles.answer}>My answer: {answer}</label>
                    <br/>
                    <br/>
                    <RaisedButton 
                    label={answer+1}
                    onClick={this.button1}
                    />
                    <br/>
                    <br/>
                    <RaisedButton label={answer+2}
                    onClick={this.button2}
                    />
                    <br/>
                    <br/>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    AppTitle: {
        fontFamily: 'Yellowtail',
        fontSize: 32
    },
    answer :{
        fontSize: 20
    }
}

export default Gameplay