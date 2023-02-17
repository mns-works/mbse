import React from 'react'
import trans from '../data/_t.yaml'


export default function t({origin}) {
    const translated = trans.t[origin]
    return <span>{translated ?? origin}</span>
}