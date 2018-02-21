var React = require('react');
var ReactDom = require('react-dom');

//buscar dummydata js
var samples = require('./sample-data');



var App = React.createClass({
    // colocar o estado inicial do componente
    getInitialState: function(){
        //retornar humans and stores from dummydata
      return {
          "humans": {},
          "stores": {}
      }  
    },
    loadSampleData: function(){
        this.setState(samples);
    }, 
    render: function(){
            <div>
            <div id="header"></div>
            <button onClick={this.loadSampleData}>Load Sample Data</button>
            <div className="container">
            <div className="column">
                {/*O componente InboxPane tem uma propriedade humans */}
                <InboxPane humans= {this.state.humans} />
            </div>
            
            <div className="column">
            </div>
            
            <div className="column">
            </div>
            </div>
            </div>
    }
});

var InboxPane = React.createClass({
    
    renderInboxItem: function(human){
        return <InboxItem details={this.props.humans[human]}>
    },
    render : function(){
        return (
        <div id="inbox-pane">
            <h1>Inbox</h1>
            <table>
                <thead>
                    <tr>
                        <th>Chat Received</th>
                        <th>Name</th>
                        <th>Status</th>
                        
                    </tr>
                </thead>
                    <tbody>
            {/*Com esta ação vai buscar todas as chaves no objecto humans e depois e neste caso utilizamos a funçao map- performa um loop através do object0 ou arrray- e rederizamos*/ {Object.keys(this.props.humans).map(this.renderInboxItem)} 
                    </tbody>
            </table>
        </div>    
)
    }
});

var InboxItem = React.createClass({
    componentDidMount: function(){
        //this.refs.name.value = 
    },
    render: function(){
        return (
            <tr>
                <td ref="name">5pm</td>
                <td>Rafa Loves Pizza</td>
                <td>Confirmed</td>
            </tr>
        )
    }
});

ReactDom.render(<App />, document.getElementById("main"));