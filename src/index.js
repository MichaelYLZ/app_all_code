import React from 'react';
import { render } from 'react-dom';
import uuid from "uuid";
import './App.css'; 
import CreateContainer from './components/CreateContainer.js';
import SenContainer from './components/SenContainer.js';



class App extends React.Component {
    
    state = {
        sentences: []
    };

    componentDidMount() {
        this.loadTimersFromServer();
        setInterval(this.loadTimersFromServer, 5000);
    }
   
    loadTimersFromServer = () => {
        client.getSentences((serverSens) => (
        this.setState({ sentences: serverSens }))
     );
  };

    handleEditSubmit = (attrs) => {
        this.updateSen(attrs);
    };

    handleDeleteClick = (senID) => {
        this.deleteSen(senID)
    }
    
    handleCreateSen = senObjNew => {
        this.createSentece(senObjNew)
    }
    
    createSentece = (senObj) => {
        const s = helpers.createNewSen(senObj);
        this.setState({
            sentences: [...this.state.sentences, s]
        });
        
        client.createSens(s);
    }

    updateSen = (attrs) => {
        
     this.setState({
      sentences: this.state.sentences.map((senInState)=>{
            if(senInState.id === attrs.id) {
                return Object.assign({}, senInState, {
                    sentence: attrs.sentence
                })
            } else {
                return senInState;
            }
        })
     })
    
    client.updateSentences(attrs);
    };

    deleteSen = (senID) => {
        
     this.setState({
       sentences: this.state.sentences.filter((s) => {
              return s.id !== senID; 
           }) 
        });
        
     client.deleteSentences(
         { id: senID }
     ); 
        
    }
    
    render() {
        
        const {
            sentences
        } = this.state;
        
        return (
          <main>
            
          {
             sentences.map(sentenceObj => {
               return <SenContainer 
                       words={sentenceObj.sentence} 
                       key={sentenceObj.id}
                       id={sentenceObj.id}
                       onEditSubmit={this.handleEditSubmit}
                       onDeleteClick={this.handleDeleteClick}
                       />
             }) 
          }
          
          <CreateContainer 
          onHandleCreateSen={this.handleCreateSen}
          />
            
          </main>
        )
    }
}

render(<App />, document.getElementById('app'));
