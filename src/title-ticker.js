import React from 'react';
import ReactDOM from 'react-dom'

function rotateArr(Arr,rot){
    let len = Arr.length;
    let r = rot % len;
    return Arr.slice(r) + Arr.slice(0,r);
}

class TitleTicker extends React.Component{
    constructor(props){
        super(props);
        this.state = {title: props.title, time: Date.now(), step: props.step}
    }

    componentDidMount(){
        this.setState({timer:window.setInterval(()=>this.setState({offset:this.state.offset+1}),this.state.step)});
    }

    componentWillUnmount(){
        window.clearInterval(this.state.timer);
    }

    render(){
        return ReactDOM.createPortal(
            <React.Fragment>
                {rotateArr(
                    this.state.title,
                    Math.floor((Date.now()-this.state.time)/this.state.step))}
            </React.Fragment>
        ,document.getElementsByTagName("title")[0]);
    }
}

export default TitleTicker;