import React, { Component } from "react";

class Propsapp1 extends Component
{
    render(props)
    {
        return(
            <>

                <h1>i am class base props</h1>
                <h3>My name is:{this.props.name}</h3>
            </>
        )
    }
}
export default Propsapp1; 