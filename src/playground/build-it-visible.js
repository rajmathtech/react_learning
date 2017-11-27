// render
const ele = document.getElementById('visible');
// main codes
let display='show';
const onClickChange = 
()=>{
        if (display === 'show'){
        display='hide';
        } else {
            display = 'show';
        }
        render();
    };
// visibility = !visibility inside the function
// {visiblity ? 'show' : 'hide' }
//visiblity && (<div> details to show</div>)
const render = () =>{
    let jsx=(<div>
        <h1>visibility toggle</h1>
        <button onClick={onClickChange}>
            {display.toUpperCase() + ' details'}
        </button>
        <p>{display==='hide' ? 'Hey, you cand now see details!' : false}</p>
    </div>);
    //call to render
    ReactDOM.render(jsx, ele);
}

render();