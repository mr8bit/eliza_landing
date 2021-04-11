import React from 'react'

interface ISection {
    children: React.ReactChildren
}

export default function Section(props: ISection) {
    return <div className="info-section">{props.children}</div>
}
