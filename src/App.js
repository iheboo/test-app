import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import results from './data.json'

function App() {
const data=results.results;

  const resultsT = data.filter(agent =>  agent.id != "000" );
  const total = resultsT.length;
 

  const resultsA = data.filter(agent => agent.status === "active" &&  agent.id != "000" );
  const active = resultsA.length;

  const resultsD = data.filter(agent => agent.status === "disconnected" &&  agent.id != "000" );
  const disconnected = resultsD.length;

  const resultsP = data.filter(agent => agent.status === "pending" &&  agent.id != "000" );
  const pending = resultsP.length;

  const resultsN = data.filter(agent => agent.status === "never_connected" &&  agent.id != "000" );
  const never_connected = resultsN.length;
    

  
  return (
    <div className="conatainer">
       <p>
            Hello admin, <br />
            view the status of your agents and the evolution of the their latest alerts
        </p>
        <h2> Installed agents by their status</h2>
  <div className='cards'>
        <div className="card shadow" style={{width: "18rem", height:"7rem"}}>
          <div className="card-body">
            <h5 className="card-title ">Total agents</h5>
              <p className="card-text center Total-agents">{total}</p>
          </div>
        </div>
        <div className="card shadow" style={{width: "18rem", height:"7rem"}}>
          <div className="card-body">
            <h5 className="card-title ">active agents</h5>
              <p className="card-text center active">{active}</p>
          </div>
        </div>
        <div className="card shadow" style={{width: "18rem", height:"7rem"}}>
          <div className="card-body">
            <h5 className="card-title ">disconnected agents</h5>
              <p className="card-text center disconnected">{disconnected}</p>
          </div>
        </div>
        <div className="card shadow" style={{width: "18rem", height:"7rem"}}>
          <div className="card-body">
            <h5 className="card-title ">pending agents</h5>
              <p className="card-text center pending">{pending}</p>
          </div>
        </div>
        <div className="card shadow" style={{width: "18rem", height:"7rem"}}>
          <div className="card-body">
            <h5 className="card-title ">never connected agents</h5>
              <p className="card-text center never_connected">{never_connected}</p>
          </div>
        </div>
</div>
    </div>
  );
}

export default App;
