import React, { Component } from 'react'
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import  AppBar  from 'material-ui/AppBar';
import  RaisedButton  from 'material-ui/RaisedButton';
import { red500, green500 } from 'material-ui/styles/colors';

export class Result extends Component {

    play = () => {
        this.props.playAgain();    
    };

    render() {
        const{pc, comment, result}=this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar showMenuIconButton={false} titleStyle={styles.AppTitle} title="Say20"/>
                    <br/>
                    <label style={styles.comment}>{comment}</label>
                    <br/>
                    <label style={styles.answer}>{pc}</label>
                    <br/>
                    <br/>
                    <label style={styles.result}>{result}</label>
                    <br/>
                    <br/>
                    <RaisedButton 
                    label="Play Again"
                    secondary={true}
                    onClick={this.play}
                    /> 
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
    comment:{
        fontSize: 32,
        color: red500
    },
    result:{
        fontSize: 28,
        color: green500
    },
    answer :{
        fontSize: 20
    }
}

export default Result