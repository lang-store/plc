import React, { useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';

const loadKeyframes = {
    '0%': {
        transform: 'rotate(0deg)',
        'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
    '50%': {
        transform: 'rotate(900deg)',
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    },
    '100%': {
        transform: 'rotate(1800deg)',
    }
};

const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'rgba(255,255,255,.3)',
    },
    loader: {
        position: 'relative',
        top: '50%',
        left: '50%',
        width: '50px',
        height: '50px',
        border: '15px solid rgba(255,255,255,.3)',
        borderRadius: '50%',
        borderTopColor: 'rgb(66, 103, 178)',
        animationName: [loadKeyframes],
        animationDuration: '3s',
        animationIterationCount: 'infinite',
    },
});

interface Props {
    mainRef: React.RefObject<HTMLDivElement>;
}

const Blizzard = ({ mainRef }: Props) => {
    useEffect(() => {
        mainRef.current.style.visibility = 'hidden';
    }, []);

    return (
        <div ref={mainRef} className={css(styles.main)}>
            <div className={css(styles.loader)}></div>
        </div>);
};

export default Blizzard;
