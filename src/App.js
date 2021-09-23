import { useDispatch } from 'react-redux';
import { getTableData } from './Store/Actions/TableData';
import { useEffect } from 'react';
import './Styles/index.scss';
import PageTitle from './Components/PageTitle';
import Filters from './Components/Filters';
import Table from './Components/Table';
import 'rsuite/dist/styles/rsuite-default.css';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTableData());
  });

  return (
    <div className='container'>
      <div className='global-sidebar'></div>
      <div className='data-container'>
        <PageTitle title='Analytics' />
        <Filters />
        <Table />
      </div>
    </div>
  );
}

export default App;
