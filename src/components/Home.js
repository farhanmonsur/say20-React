import React, { Component } from 'react'
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import  AppBar  from 'material-ui/AppBar';
import  RaisedButton  from 'material-ui/RaisedButton';

export class Home extends Component {
    
    render() {
        const {nextPage, prevPage}=this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar showMenuIconButton={false} titleStyle={styles.AppTitle} title="Say20"/>
                    <br/>
                    <br/>
                    <br/>
                    <RaisedButton 
                    label="How To Play?"
                    onClick={prevPage}
                    />
                    <br/>
                    <br/>
                    <br/>
                    <RaisedButton label="Start Game"
                    onClick={nextPage}
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
    }
}

export default Home
