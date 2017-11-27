let count = 0;
const render = () => {
    const jsx = <div>
    <h1> Count: <span> {count} </span></h1>
        <p>
            <button onClick={()=>{
                count++;
                render();
            }}>+1
            </button>
            <button onClick={()=>{
                count--;
                render();
            }}>
                    -1
            </button>
            <button onClick={()=>{
                count=0;
                render();
            }}>
                    reset
            </button>
        </p>
</div>;
ReactDOM.render(jsx, document.getElementById('app'));
}
render();