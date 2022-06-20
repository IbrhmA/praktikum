import React from "react";
import "./app.css";
const navigationItems = ["Welcome page", "About Me", "Events"];

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            view: navigationItems[0]
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({view: e.target.innerHTML});
    }

    render(props) {
        return <>
            <Header/>
            <div className="wrapper">
                <Navigation onClick={this.handleClick}/>
                <Center view={this.state.view}/>
            </div>
            <Footer/>
        </>;
    }
}

function Header(props) {
    return <div className="header">the header</div>;
}

function Footer(props) {
    return <div className="footer">the footer</div>;
}

function Navigation(props) {
    const items = navigationItems.map(
        (n, i) => <NavigationItem key={i} name={navigationItems[i]} onClick={props.onClick}/>
    );
    
    return <div className="navigation">
        {items}
    </div>;
}

function Center(props) {
    if(props.view === navigationItems[0]) {
        return <WelcomePage />;
    }
    else if(props.view === navigationItems[1]) {
        return <AboutMe />;
    }
    else {
        return <Events />;
    }
}

function NavigationItem(props) {
    return <div onClick={props.onClick}>{props.name}</div>;
}
