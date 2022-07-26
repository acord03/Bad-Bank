import '../App.css';
import {useContext} from 'react';
import {Submissions} from '../Submissions';

function AllData() {
  const subs = useContext(Submissions);
  const data = JSON.stringify(subs)
  return (
    <div>
      <p>{data}</p>
    </div>
  );
}

export default AllData;
