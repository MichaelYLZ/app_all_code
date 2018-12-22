import React from 'react';

class CreateIndicator extends React.Component {
    
    render() {
        const {
           onCreateClick 
        } = this.props;
        
        return (
          <div 
          className='add'
          onClick={onCreateClick}
          >
            新建
          </div>
        )
    }
}



export default CreateIndicator;