let isHidden = false;


const onButtonClick = () => {
    isHidden = !isHidden;

    render();
};



const render = () => {

    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button id="button" onClick={onButtonClick}>
                {isHidden ? "Show Details" : "Hide Details"}
            </button>
            <p hidden={isHidden}>shit</p>
        </div>
    );

    const appRoot = document.getElementById('app');
    ReactDOM.render(jsx, appRoot);
};

render();
