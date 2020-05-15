import React, { Component } from 'react'
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import  AppBar  from 'material-ui/AppBar';
import  RaisedButton  from 'material-ui/RaisedButton';

export class ChooseDifficulty extends Component {
    
    easy = () => {
        this.props.setDifficulty('e');  
        this.props.nextPage();
      };

    hard = () => {
        this.props.setDifficulty('h');    
        this.props.nextPage();
      };

    render() {
        const{prevPage}=this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar showMenuIconButton={false} titleStyle={styles.AppTitle} title="Say20"/>
                    <br/>
                    <h4>Choose Difficulty</h4>
                    <br/>
                    <RaisedButton 
                    label="Easy"
                    onClick={this.easy}
                    />
                    <br/>
                    <br/>
                    <RaisedButton label="Hard"
                    onClick={this.hard}
                    />
                    <br/>
                    <br/>
                    <RaisedButton label="Go Back"
                    onClick={prevPage}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
const styles={
    AppTitle: {
        fontFamily: 'Yellowtail',
        fontSize: 32
    }
}

export default ChooseDifficulty
