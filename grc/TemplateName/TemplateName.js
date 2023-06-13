import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css';
export const initialStateTemplateName={}

const TemplateName = (props) => {
const [state, setstate] = useState(initialStateTemplateName)

useEffect(() => {
  //cmd didmount
  console.log('Composant TemplateName monté');

  return () => {
    //cleanup
    console.log('Composant TemplateName démonté');
  };
}, [])

  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </div>
  );
}

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
