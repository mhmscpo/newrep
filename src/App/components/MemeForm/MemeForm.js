import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
export const initialStateMemeForm={}

const MemeForm = (props) => {
const [state, setstate] = useState(initialStateMemeForm)

useEffect(() => {
  //cmd didmount
  console.log('Composant MemeForm monté');

  return () => {
    //cleanup
    console.log('Composant MemeForm démonté');
  };
}, [])

  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      MemeForm Component
    </div>
  );
}

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
