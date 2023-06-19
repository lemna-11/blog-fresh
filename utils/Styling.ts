import { css } from "twind/css";

export const style = css({
    '& > h1' : {
        fontSize: '1.5em',
        fontWeight: 'bold',
        marginLeft: '0.2rem'
    },

    '& > h2' : {
        fontSize: '1.25em',
        fontWeight: 'bold',
        marginLeft: '0.5rem'
    },

    '& > h3' : {
        fontSize: '1.1em',
        fontWeight: 'bold',
        marginLeft: '0.75rem'
    },

    '& > p' : { 
        margin: '1rem'
    }
})