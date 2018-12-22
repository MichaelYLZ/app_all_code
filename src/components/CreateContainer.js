import React from 'react';
import CreateIndicator from './CreateIndicator.js';
import Create from './Create.js';

class CreateContainer extends React.Component {
    
    state = {
        isCreateOpen: false
    }

    createStart = () => {
        this.setState({
            isCreateOpen: true
        })
    }
    
    onBackClick = () => {
        this.setState({
            isCreateOpen: false
        })
    }

    render() {
        const {
            isCreateOpen,
        } = this.state;
        
        if(isCreateOpen) {
            
            return <Create 
                   handleBackClick={this.onBackClick}
                   onHandleCreateSen={this.props.onHandleCreateSen}
                   />
        } else {
            
            return <CreateIndicator 
                    onCreateClick={this.createStart}
                    />
        }

    }
    
}

export default CreateContainer;