import '../App.css';
import {useContext} from 'react';
import {Submissions} from '../Submissions';

function AllData() {
  const subs = useContext(Submissions);
  const data = JSON.stringify(subs)
  return (
    <div>
      <div className="user-display">
        <h2>username</h2>
      </div>
      <div>
        <p>{data}</p>
      </div>
    </div>
  );
}

export default AllData;
