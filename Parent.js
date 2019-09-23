import React from 'react';
import Child from './Child';

class Parent extends React.Component{

    constructor(props){
        super(props);

        this.state={dataFromChild: ""}

    }

    getData=(data)=>{
        this.setState({dataFromChild: data})
    }

    render()
    {
        return(
            <div>
                Parent Start <br/>
                {this.state.dataFromChild} <br/>
                <Child insertWords={data=>this.getData(data)} />
                <br/>
                Parent-End
            </div>
        );

    }
}
export default Parent;