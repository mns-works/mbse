import React from 'react'
import trans from '../data/_t.yaml'


// export default function t({origin}) {
//     const translated = trans.t[origin]
//     return <span>{translated ?? origin}</span>
// }

export default function t(props) {
    let k = Object.keys(props)[0]
    if (k === 'o') {
        k = props[k]
    }
    const translated = trans.t[k]
    return <span>{translated ?? k}</span>
}