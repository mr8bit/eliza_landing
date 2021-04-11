import React from "react";

interface IContainer {
    children: React.ReactNode
}

export default function Container(props: IContainer) {
    return <div className="container">{props.children}</div>
}
