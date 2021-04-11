type Color = 'yellow' | 'red' | 'green'

interface IPricingItem {
    title: string,
    pricing: string,
    color: Color,
    list_feature: string[],
    onClickButton: any
}

const COLORS = {
    'yellow': '#FFBE3D',
    'red': '#FF755F',
    'green': '#2DCA8C'
}

export default function PricingItem(props: IPricingItem) {
    return <div className="pricing-item">
        <div className="pricing-content">
            <div className="pricing-title" style={{color: COLORS[props.color]}}>
                {props.title}
            </div>
            <div className="pricing-price">
                {props.pricing}
            </div>
            <div className="pricing-month">
                В месяц
            </div>

            <ul className="pricing-check">
                {
                    props.list_feature && props.list_feature.map(item =>
                        <li key={item}>{item}</li>
                    )
                }
            </ul>
            <div style={{marginTop: '10px'}}>
                <a onClick={props.onClickButton} className="btn_link btn_link__full">
                    Оставить заявку
                </a>
            </div>

        </div>
    </div>
}
