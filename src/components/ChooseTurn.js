import React, { Component } from 'react'
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import  AppBar  from 'material-ui/AppBar';
import  RaisedButton  from 'material-ui/RaisedButton';

export class ChooseTurn extends Component {
    
    no = () => {
        this.props.random_pc();    
        this.props.nextPage();
    };

    render() {
        const{prevPage, nextPage}=this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar showMenuIconButton={false} titleStyle={styles.AppTitle} title="Say20"/>
                    <br/>
                    <h4>Do you want to start?</h4>
                    <br/>
                    <RaisedButton 
                    label="Yes"
                    onClick={nextPage}
                    />
                    <br/>
                    <br/>
                    <RaisedButton label="No"
                    onClick={this.no}
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

export default ChooseTurn
