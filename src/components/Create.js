import React from 'react';
import uuid from 'uuid';

class Create extends React.Component {
    
    state = {
        senInInput: ''
    }

    handleInputChange = ev => {
        this.setState({
           senInInput: ev.target.value,
        })
    }
    
    handleSubmit = () => {
      this.props.onHandleCreateSen({
          sentence:  this.state.senInInput,
          id: uuid.v4()
      });
      this.props.handleBackClick();
    }
    
    render() {
        return (
          <section>
              <input
              type='text'
              value={this.state.senInInput}
              onChange={this.handleInputChange}
              autoFocus
              /> 
             
              <div className='flex-container'>
                  
              <button
              onClick={this.props.handleBackClick}
              >
              返回
              </button>
                  
              <button 
              className='greenBtn'
              onClick={this.handleSubmit}
              >
              提交
              </button>
                  
              </div>
          </section>
        )
    }
    
}

export default Create;