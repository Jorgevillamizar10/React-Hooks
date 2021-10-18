import React from 'react'

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
        style={{margin:'10px'}}
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
