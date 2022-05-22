import './App.css';
import TableFrame from './components/Table/TableFrame.jsx';
import OpenModal from './components/Btn-open-modal/OpenModal.jsx';

function App() {
  return (
    <div className='App'>
      <div>
        <OpenModal />
        <TableFrame />
      </div>
    </div>
  );
}

export default App;
