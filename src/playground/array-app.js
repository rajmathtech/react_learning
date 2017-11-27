// {[<li key={app.options[0]}>{app.options[0]}</li>,
// <li key={app.options[1]}>{app.options[1]}</li>]}
// let numbers=[2, 4, 5];
// {numbers}
// { numbers.map((number)=>{
//     return number*2;
// })}
// {numbers}
const render = () => {
    const jsx = (<div>
        <h1>{app.title}</h1>
        {app.subtitle && <h3>{app.subtitle}</h3>}
        {app.options.length}
        <hr/>
        <button onClick= {()=>{
            const option = Math.floor(Math.random()*app.options.length);
            alert(app.options[option]);
        }}
        disabled={app.options.length===0}> What should I do? </button>
        <button disabled={app.options.length===0} onClick={onRemoveAll}>Remove all!</button>
        <ol>
            { app.options.length>0 ? 
            app.options.map(option=> <li key={option}>{option}</li>
            // {
            //     return <li key={option}>{option}</li>;
            // }
            )
            : <p>no options available</p>
            }
        </ol>
        <hr/>
        <form onSubmit={onFormSubmit}> 
        <input type="text" name="option"/>
        <button> Add option </button>
        </form>
    </div>);
    ReactDOM.render(jsx, ele);
};
const onRemoveAll= () => {
    app.options=[];
    render();
};
const onFormSubmit=(e) => {
    e.preventDefault();
    let option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value='';
        render();
    }       
    // console.log(app.options);
};
const ele = document.getElementById('appRoot');
const app={
    title : 'Indecition app',
    subtitle :'Make random selection and put your choice with computer! ',
    options: []
};
render();