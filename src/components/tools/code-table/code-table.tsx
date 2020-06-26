import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { observer } from 'mobx-react-lite';
import { ConceptExample } from '../../../models/models';

const styles = StyleSheet.create({
    main: {
        textAlign: 'center',
        padding: '0px 30px 30px 30px',
    },
    container: {
        width: '300px',
        height: '300px',
        overflow: 'auto',
        border: '2px solid rgb(41, 72, 125)',
    },
    item: {
        cursor: 'pointer',
        transition: '0.5s',
        ':hover': {
            background: 'rgb(41, 72, 125)',
            color: 'rgb(255,255,255)',
        },
    },
    title: {
        fontFamily: 'Impact',
        padding: '10px',
        fontSize: '20px',
        color: 'rgb(66, 103, 178)',
    },
    th: {
    },
    name: {
        // textAlign: 'center',
        padding: '4px',
        fontSize: '16px',
        color: 'rgb(66, 103, 178)',
    },
    table: {
        margin: '0 auto',
        width: '100%',
    },
    scroll: {
        overflow: 'auto',
        borderRadius: '5px',
        border: '1px solid rgb(41, 72, 125)',
    },
    td: {
        maxWidth: '400px',
        textAlign: 'left',
        padding: '14px',
        whiteSpace: 'pre',
        overflow: 'auto'
    },
    text: {
        display: 'inline-block',
    },
});

interface Props {
    langName: string;
    examples: ConceptExample[];
    onClick: (example: ConceptExample) => void;
    onDoubleClick?: (id: number) => void;
}

const CodeTable = ({ langName, examples, onClick, onDoubleClick }: Props) =>
    <div className={css(styles.main)}>
        <div className={css(styles.scroll)}>
            <table className={css(styles.table)}>
                <thead>
                    <tr>
                        <th className={css(styles.name, styles.th)}>Код</th>
                        <th className={css(styles.name, styles.th)}>Примечание</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        examples.map((example, index) =>
                            <tr
                                key={index}
                                onClick={() => onClick(example)}
                                onDoubleClick={() => onDoubleClick && onDoubleClick(index)}
                                className={css(styles.item)}
                            >
                                <td className={css(styles.td)}>
                                    <SyntaxHighlighter language={langName.toLowerCase()} style={github}>
                                        {example.example}
                                    </SyntaxHighlighter>
                                </td>
                                <td className={css(styles.td)}>
                                    <div className={css(styles.text)} >
                                        {example.notes}
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
    ;
export default observer(CodeTable);
