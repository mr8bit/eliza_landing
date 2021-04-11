import React from "react";


interface ISocial {
    children: React.ReactElement[]
}

export default function Social(props: ISocial) {
    return <div className="social">{props.children}</div>
}
