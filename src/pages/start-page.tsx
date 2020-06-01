import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Main from '../components/main';
import { Dragonet } from '../logic/dragonet';


const styles = StyleSheet.create({
    main: {
    },
});

function StartPage() {
    return (
        <div className={css(styles.main)}>
            <Main dragonet={new Dragonet()} />
        </div>
    );
}

export default StartPage;
