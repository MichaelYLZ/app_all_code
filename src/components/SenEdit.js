import React from 'react';

class SenEdit extends React.Component {
    
    state = {
        senInSub: this.props.sentence 
    }

    handleInputChange = ev => {
        this.setState({
            senInSub: ev.target.value
        });
    };
    
    handleInputSubmit = ev => {
        this.props.onEditSubmit({
            sentence: this.state.senInSub || '提示：请编辑',
            id: this.props.id
        });
        this.props.onBackClick();
    }
     
    render() {
        const {
           senInSub 
        } = this.state;
        
        const {
            id,
            onBackClick
        } = this.props;
        
        return (
          <section>
              <input
              type='text' 
              value={senInSub}
              onChange={this.handleInputChange}
              autoFocus
              /> 
             
              <div className='flex-container'>
                  
              <button
              onClick={onBackClick}
              >
              返回
              </button>
                  
              <button 
              className='greenBtn'
              onClick={this.handleInputSubmit}>
              确认
              </button>
                  
              </div>
          </section>
        )
    }
}

export default SenEdit;