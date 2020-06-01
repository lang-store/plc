import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Main from '../components/main';


const styles = StyleSheet.create({
    main: {
        height: 'calc(100vh - 60px)',
        overflow: 'auto',
    },
});

function StartPage() {

    return (
        <div className={css(styles.main)}>
            <Main />
        </div>
    );
}

export default StartPage;
