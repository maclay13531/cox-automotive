import React from 'react';

import Aux from '../../hoc/Auxiliary';
import styles from './Layout.module.css';

const layout = (props) => {
    return (
        <Aux>
            <main className={styles.Layout}>
                {props.children}
            </main>
        </Aux>
    );
};

export default layout;