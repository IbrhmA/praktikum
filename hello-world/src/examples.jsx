const names = ["Itzik", "Ibrahim", "Johnathan", "Theo", "Than"];

function Something(props) {
    
    const greeters = [];
    for(let i = 0; i<names.length; i++) {
        greeters.push(<Greet name={names[i]}/>);
    }
    
    return <>
        <Greet name="World"/>
        {greeters}
        <MyButton/>
    </>;
}

function Greet(props) {
    return <div>{"hello " + props.name}</div>;
}

function MyButton(props) {
    return <div onClick={() => alert("hi")}>click me</div>;
}