import React, { useMemo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Main from '../components/main';
import { Dragonet } from '../logic/dragonet';
import Blizzard from '../components/tools/blizzard';


const styles = StyleSheet.create({
    main: {
    },
});

function StartPage() {
    const dragonet = useMemo(() => new Dragonet(), []);
    return (
        <div className={css(styles.main)}>
            <Blizzard mainRef={dragonet.blizzard.ref} />
            <Main dragonet={dragonet} />

        </div>
    );
}

export default StartPage;
