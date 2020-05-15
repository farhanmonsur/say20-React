import React, { Component } from 'react'
import {Home} from './Home'
import {HowToPlay} from './HowToPlay';
import {ChooseDifficulty} from './ChooseDifficulty';
import {ChooseTurn} from './ChooseTurn';
import {Gameplay} from './Gameplay';
import {Result} from './Result';

var user=0;
var pc=0;
var difficulty;
var trap='false';
var result;
var comment;
var comments=[
    "Go cry to momma!",
    "Try tomorrow",
    "Bad day?",
    "Brains aren't everything. In your case they're nothing!",
    "No I'm not insulting you, I'm describing you!",
    "Roses are red, violets are blue, Faru made me genius, what happened to you?",
    "You suck more than Justin Bieber with a Mic!"];

export class Say20 extends Component {
    state = {
        page:1,
        answer:0
    };

    nextPage = () => {
        const { page } = this.state;
        this.setState({
          page: page + 1
        });
    };

    prevPage = () => {
        const { page } = this.state;
        this.setState({
          page: page - 1
        });
    };

    setDifficulty = (input) => {
        difficulty=input;
    };

    gameplay = (button) => {
        user=pc+button;
        this.set_pc();
        this.endgame();    
        this.setState({answer:pc});
    };

    random_pc = () => {
          const{page}=this.state;
          pc= user+1+Math.round(Math.random());
          if(page===3){
            this.setState({answer:pc})
          }
    };

    set_pc = () => {
        if(difficulty==='e'){
            this.random_pc();
        }else{
            if(pc===2){
                trap='true';
            }
            if(trap==='false'){
                if (user===2||user===5||user===8||user===11||user===14||user===17||user===20||user===0){
                    this.random_pc();
                }else {
                    if (user===pc+2){
                        pc=user+2;
                        trap='true';
                    } else {
                        pc=user+1;
                        trap='true';
                    }
                }
            }else{
                if(user===pc+1){
                    pc=user+2;
                }else{
                    pc=user+1;
                }
            }
        }
    };

    endgame = () => {
        if (user===19) {
            pc= "My Answer: 20";
            result= "I WIN!!!";
            if(difficulty==='h'){
                this.random_comment();
            }
            this.nextPage();
        }
        if (user===20) {
            pc= "";
            result= "YOU WIN!!!";
            if(difficulty==='h'){
                comment="Good Girl!";
            }else{
                comment="Try Hard Mode!";
            }
            this.nextPage();
        }
        if (user===21) {
            pc= "None said \"20\"";
            result= "It's a Draw!!!";
            this.nextPage();
        }
        if(pc===20) {
            pc= "My Answer: 20";
            result= "I WIN!!!";
            if(difficulty==='h'){
                this.random_comment();
            }
            this.nextPage();
        }
    };

    random_comment = () => {
        comment=comments[Math.floor(Math.random()*comments.length)];
    };

    playAgain = () => {
        this.setState({page: 1, answer: 0})
        user=0;
        pc=0;
        trap='false';
        result='';
        comment='';
    };

    render() {
        const {page, answer}=this.state;
        // eslint-disable-next-line
        switch(page){
            case 0:
                return(<HowToPlay
                    nextPage={this.nextPage}
                />);
            case 1:
                return(<Home
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                />);
            case 2:
                return(<ChooseDifficulty
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                    setDifficulty={this.setDifficulty}
                />);
            case 3:
                return(<ChooseTurn
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                    random_pc={this.random_pc}
                />);
            case 4:
                return(<Gameplay
                    answer={answer}
                    gameplay={this.gameplay}
                />);
            case 5:
                return(<Result
                    pc={pc}
                    result={result}
                    comment={comment}
                    playAgain={this.playAgain}
                />);
        }
    }
}

export default Say20