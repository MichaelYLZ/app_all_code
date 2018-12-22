import React from 'react';

class Sentence extends React.Component {
    
    handleDelete = () => {
        this.props.onDeleteClick(this.props.id)
    }

    render() {
       
        const {
            id,
            onEditSubmit,
            sentence,
            onEditClick
        } = this.props;
        
        return (
          <section id={id}>  
               <p>
                 { sentence }
               </p>
            
                <div className='flex-container'>
                
                <button 
                onClick={this.handleDelete}
                >
                  删除
                </button>
                
                <button 
                className='greenBtn' 
                onClick={onEditClick}
                >
                  修改
                </button>
                </div>
                
             </section>
        )
    }
}


export default Sentence;
