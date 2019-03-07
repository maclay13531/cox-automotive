import React from 'react';

import styles from './HourSlot.module.css';

const hourSlot = (props) => {
    let mainDivClass = [styles.HourSlot, styles.Open];
    if (!props.availability) {
        mainDivClass = [styles.HourSlot, styles.Close];
    }

    return (
        <div className={mainDivClass.join(' ')} onClick={() => props.clicked(props.hour)}>
            {props.hour}
        </div>
    );
};

export default hourSlot;