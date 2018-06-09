class Build extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            isHidden : true
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => { return {isHidden : !prevState.isHidden  }});
        
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button id="button" onClick={this.handleToggleVisibility}>
                    {this.state.isHidden ? "Show Details" : "Hide Details"}
                </button>
                <p hidden={this.state.isHidden}>shit</p>
            </div>
        );
    }
}


// let isHidden = true;





// const render = () => {

//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button id="button" onClick={onButtonClick}>
//                 {isHidden ? "Show Details" : "Hide Details"}
//             </button>
//             <p hidden={isHidden}>shit</p>
//         </div>
//     );

    const appRoot = document.getElementById('app');
    ReactDOM.render(<Build />, appRoot);
// };

// render();
