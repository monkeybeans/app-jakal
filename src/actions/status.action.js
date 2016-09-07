import api from '../api';
import { dispatch } from '../store';
import periodMapper from './../api/mapper/periodMapper';

function periodRecieved(period) {
  const action = {
    type: 'PERIOD_RECIEVED',
    period,
  };

  dispatch(action);
}

function fetchPeriod() {
  api
  .get('/api/period')
  .then(resp => {
    periodRecieved(periodMapper[resp]);
  })
  .catch(e => console.log(`could not get period: ${e}`));
}

export default fetchPeriod;
