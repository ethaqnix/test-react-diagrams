import 'storm-react-diagrams/dist/style.min.css'
import './App.css'
import React from 'react';
import * as SRD from "storm-react-diagrams"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      engine: new SRD.DiagramEngine()
    }
  }

  componentDidMount() {
    this.state.engine.installDefaultFactories();

    // 2) setup the diagram model
    let model = new SRD.DiagramModel();

    // 3) create a default node
    let node1 = new SRD.DefaultNodeModel("Node 1", "rgb(0,192,255)");
    let port1 = node1.addOutPort("Out");
    node1.setPosition(100, 100);

    // 4) create another default node
    let node2 = new SRD.DefaultNodeModel("Node 2", "rgb(192,255,0)");
    let port2 = node2.addInPort("In");
    node2.setPosition(400, 100);

    // 5) link the ports
    let link1 = port1.link(port2);

    // 6) add the models to the root graph
    model.addAll(node1, node2, link1);

    // 7) load model into engine
    this.state.engine.setDiagramModel(model);
  }

  render() {
    return (
      <SRD.DiagramWidget
        style={{top:'0', bottom:'0', left:'1', right:'0', position: 'absolute'}}
        diagramEngine={this.state.engine}
      />
    );
  } 
  
}

export default App;
