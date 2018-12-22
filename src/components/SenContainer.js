import React from 'react';
import SenEdit from './SenEdit.js';
import Sentence from './Sentence.js';

class SenContainer extends React.Component {
    
    state = {
        isEdit: false,
    };

    handleEditClick = () => {
        this.setState({ isEdit: true })
    }
    
    handleBackClick = () => {
        this.setState({ isEdit: false })
    }

    render() {
        const {
            id,
            words,
            onEditSubmit,
            onDeleteClick
        } = this.props;
        
        const {
           isEdit,
        } = this.state;
        
        if(isEdit) {
            
            return (
              <SenEdit 
               sentence={words}
               id={id}
               onBackClick={this.handleBackClick} 
               onEditSubmit={onEditSubmit} 
              />
            )
                
        } else {
            
            return (
              <Sentence 
               id={id}
               sentence={words}
               onEditClick={this.handleEditClick} 
               onDeleteClick={onDeleteClick}
              />
            )
            
        }
    }
}

export default SenContainer;