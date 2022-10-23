import '../App.css';
import {useContext} from 'react';
import {Submissions} from '../Submissions';
import {UserContext} from '../UserContext';

function AllData() {
  const {value} = useContext(UserContext)
  const subs = useContext(Submissions);
  const data = JSON.stringify(subs)
  return (
    <div>
      <div className="user-display">
        <h2>{value.email}</h2>
      </div>
      <div>
        <p>{data}</p>
      </div>
    </div>
  );
}

export default AllData;
