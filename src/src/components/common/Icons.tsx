import { Chain } from "../../lib/chains"

interface Props {
    chain: Chain,
    width?: number,
    height?: number,
    borderRadius?: number,
}

interface IconProps extends Props {
    src: string,
}

export const Icons = (props: Props) => {
    switch (props.chain) {
        case Chain.Ethereum:
            return <EthereumIcon {...props} />

        case Chain.Arbitrum:
            return <ArbitrumIcon {...props} />

        case Chain.Optimism:
            return <OptimismIcon {...props} />

        case Chain.Polygon:
            return <PolygonIcon {...props} />

        case Chain.Base:
            return <BaseIcon {...props} />

        case Chain.BnbChain:
            return <BnbChainIcon {...props} />

        case Chain.Avalanche:
            return <AvalancheIcon {...props} />
    }
}

const EthereumIcon = (props: Props) => {
    return (
        <Icon
            {...props}
            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2228%22%20height=%2228%22%20fill=%22none%22%3E%3Cpath%20fill=%22%2325292E%22%20fill-rule=%22evenodd%22%20d=%22M14%2028a14%2014%200%201%200%200-28%2014%2014%200%200%200%200%2028Z%22%20clip-rule=%22evenodd%22/%3E%3Cpath%20fill=%22url(%23a)%22%20fill-opacity=%22.3%22%20fill-rule=%22evenodd%22%20d=%22M14%2028a14%2014%200%201%200%200-28%2014%2014%200%200%200%200%2028Z%22%20clip-rule=%22evenodd%22/%3E%3Cpath%20fill=%22url(%23b)%22%20d=%22M8.19%2014.77%2014%2018.21l5.8-3.44-5.8%208.19-5.81-8.19Z%22/%3E%3Cpath%20fill=%22%23fff%22%20d=%22m14%2016.93-5.81-3.44L14%204.34l5.81%209.15L14%2016.93Z%22/%3E%3Cdefs%3E%3ClinearGradient%20id=%22a%22%20x1=%220%22%20x2=%2214%22%20y1=%220%22%20y2=%2228%22%20gradientUnits=%22userSpaceOnUse%22%3E%3Cstop%20stop-color=%22%23fff%22/%3E%3Cstop%20offset=%221%22%20stop-color=%22%23fff%22%20stop-opacity=%220%22/%3E%3C/linearGradient%3E%3ClinearGradient%20id=%22b%22%20x1=%2214%22%20x2=%2214%22%20y1=%2214.77%22%20y2=%2222.96%22%20gradientUnits=%22userSpaceOnUse%22%3E%3Cstop%20stop-color=%22%23fff%22/%3E%3Cstop%20offset=%221%22%20stop-color=%22%23fff%22%20stop-opacity=%22.9%22/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A"
        />
    )
}

const ArbitrumIcon = (props: Props) => {
    return (
        <Icon
            {...props}
            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2228%22%20height=%2228%22%20fill=%22none%22%3E%3Crect%20width=%2226.6%22%20height=%2226.6%22%20x=%22.7%22%20y=%22.7%22%20fill=%22%232D374B%22%20stroke=%22%2396BEDC%22%20stroke-width=%221.4%22%20rx=%2213.3%22/%3E%3Cmask%20id=%22a%22%20width=%2228%22%20height=%2228%22%20x=%220%22%20y=%220%22%20maskUnits=%22userSpaceOnUse%22%20style=%22mask-type:alpha%22%3E%3Crect%20width=%2228%22%20height=%2228%22%20fill=%22%23C4C4C4%22%20rx=%2214%22/%3E%3C/mask%3E%3Cg%20mask=%22url(%23a)%22%3E%3Cpath%20fill=%22%2328A0F0%22%20d=%22m14.0861%2018.6041%206.5014%2010.2239%204.0057-2.3213-7.86-12.3943-2.6471%204.4917Zm13.0744%203.4692-.003-1.8599-7.3064-11.407-2.3087%203.9173%207.091%2011.4303%202.172-1.2586a.9628.9628%200%200%200%20.3555-.7009l-.0004-.1212Z%22/%3E%3Crect%20width=%2225.9%22%20height=%2225.9%22%20x=%221.05%22%20y=%221.05%22%20fill=%22url(%23b)%22%20fill-opacity=%22.3%22%20stroke=%22%2396BEDC%22%20stroke-width=%222.1%22%20rx=%2212.95%22/%3E%3Cpath%20fill=%22%23fff%22%20d=%22m.3634%2028.2207-3.07-1.7674-.234-.8333L7.7461%209.0194c.7298-1.1913%202.3197-1.575%203.7957-1.5541l1.7323.0457L.3634%2028.2207ZM19.1655%207.511l-4.5653.0166L2.24%2027.9533l3.6103%202.0788.9818-1.6652L19.1655%207.511Z%22/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient%20id=%22b%22%20x1=%220%22%20x2=%2214%22%20y1=%220%22%20y2=%2228%22%20gradientUnits=%22userSpaceOnUse%22%3E%3Cstop%20stop-color=%22%23fff%22/%3E%3Cstop%20offset=%221%22%20stop-color=%22%23fff%22%20stop-opacity=%220%22/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A"
        />
    )
}

const OptimismIcon = (props: Props) => {
    return (
        <Icon
            {...props}
            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2228%22%20height=%2228%22%20fill=%22none%22%3E%3Crect%20width=%2228%22%20height=%2228%22%20fill=%22%23FF3131%22%20rx=%2214%22/%3E%3Crect%20width=%2228%22%20height=%2228%22%20fill=%22url(%23a)%22%20fill-opacity=%22.3%22%20rx=%2214%22/%3E%3Cpath%20fill=%22%23fff%22%20d=%22M9.22%2018.35c2.7%200%204.86-2.2%204.86-5.38%200-2.19-1.47-3.8-3.98-3.8-2.72%200-4.85%202.2-4.85%205.38%200%202.2%201.5%203.8%203.97%203.8Zm.83-7.35c1.06%200%201.74.81%201.74%202.1%200%201.9-1.11%203.42-2.51%203.42-1.06%200-1.74-.82-1.74-2.1%200-1.89%201.11-3.42%202.5-3.42Zm6.38-1.68-1.88%208.88h2.26l.55-2.6h1.47c2.43%200%204.01-1.38%204.01-3.6%200-1.61-1.17-2.68-3.1-2.68h-3.3Zm1.9%201.74h.94c.83%200%201.3.38%201.3%201.14%200%201-.68%201.7-1.74%201.7h-1.11l.6-2.84Z%22/%3E%3Cdefs%3E%3ClinearGradient%20id=%22a%22%20x1=%220%22%20x2=%2214%22%20y1=%220%22%20y2=%2228%22%20gradientUnits=%22userSpaceOnUse%22%3E%3Cstop%20stop-color=%22%23fff%22/%3E%3Cstop%20offset=%221%22%20stop-color=%22%23fff%22%20stop-opacity=%220%22/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A"
        />
    )
}

const PolygonIcon = (props: Props) => {
    return (
        <Icon
            {...props}
            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20xmlns:xlink=%22http://www.w3.org/1999/xlink%22%20width=%2228%22%20height=%2228%22%3E%3Cdefs%3E%3ClinearGradient%20id=%22A%22%20x1=%22-18.275%%22%20x2=%2284.959%%22%20y1=%228.219%%22%20y2=%2271.393%%22%3E%3Cstop%20offset=%220%%22%20stop-color=%22%23a229c5%22/%3E%3Cstop%20offset=%22100%%22%20stop-color=%22%237b3fe4%22/%3E%3C/linearGradient%3E%3Ccircle%20id=%22B%22%20cx=%2214%22%20cy=%2214%22%20r=%2214%22/%3E%3C/defs%3E%3Cg%20fill-rule=%22evenodd%22%3E%3Cmask%20id=%22C%22%20fill=%22%23fff%22%3E%3Cuse%20xlink:href=%22%23B%22/%3E%3C/mask%3E%3Cg%20fill-rule=%22nonzero%22%3E%3Cpath%20fill=%22url(%23A)%22%20d=%22M-1.326-1.326h30.651v30.651H-1.326z%22%20mask=%22url(%23C)%22/%3E%3Cpath%20fill=%22%23fff%22%20d=%22M18.049%2017.021l3.96-2.287a.681.681%200%200%200%20.34-.589V9.572a.683.683%200%200%200-.34-.59l-3.96-2.286a.682.682%200%200%200-.68%200l-3.96%202.287a.682.682%200%200%200-.34.589v8.173L10.29%2019.35l-2.777-1.604v-3.207l2.777-1.604%201.832%201.058V11.84l-1.492-.861a.681.681%200%200%200-.68%200l-3.96%202.287a.681.681%200%200%200-.34.589v4.573c0%20.242.13.468.34.59l3.96%202.286a.68.68%200%200%200%20.68%200l3.96-2.286a.682.682%200%200%200%20.34-.589v-8.174l.05-.028%202.728-1.575%202.777%201.603v3.208l-2.777%201.603-1.83-1.056v2.151l1.49.86a.68.68%200%200%200%20.68%200z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
        />
    )
}

const BaseIcon = (props: Props) => {
    return (
        <Icon
            {...props}
            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2228%22%20height=%2228%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cpath%20fill=%22%230052FF%22%20fill-rule=%22nonzero%22%20d=%22M14%2028a14%2014%200%201%200%200-28%2014%2014%200%200%200%200%2028Z%22/%3E%3Cpath%20fill=%22%23FFF%22%20d=%22M13.967%2023.86c5.445%200%209.86-4.415%209.86-9.86%200-5.445-4.415-9.86-9.86-9.86-5.166%200-9.403%203.974-9.825%209.03h14.63v1.642H4.142c.413%205.065%204.654%209.047%209.826%209.047Z%22/%3E%3C/g%3E%3C/svg%3E"
        />
    )
}

const BnbChainIcon = (props: Props) => {
    return (
        <Icon
            {...props}
            src=""
        />
    )
}

const AvalancheIcon = (props: Props) => {
    return (
        <Icon
            {...props}
            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2228%22%20height=%2228%22%20fill=%22none%22%3E%3Cpath%20fill=%22%23fff%22%20d=%22M23%205H5v18h18V5Z%22/%3E%3Cpath%20fill=%22%23E84142%22%20fill-rule=%22evenodd%22%20d=%22M14%2028c-7.513.008-14-6.487-14-14C0%206.196%206.043-.008%2014%200c7.95.008%2014%206.196%2014%2014%200%207.505-6.495%2013.992-14%2014Zm-3.971-7.436H7.315c-.57%200-.851%200-1.023-.11a.69.69%200%200%201-.313-.54c-.01-.202.13-.45.412-.944l6.7-11.809c.285-.501.43-.752.612-.845.195-.1.429-.1.625%200%20.182.093.326.344.611.845l1.377%202.404.007.013c.308.538.464.81.533%201.097a2.04%202.04%200%200%201%200%20.954c-.07.289-.224.564-.536%201.11l-3.52%206.22-.009.017c-.31.542-.467.817-.684%201.024a2.048%202.048%200%200%201-.835.485c-.285.079-.604.079-1.243.079Zm6.852%200h3.888c.574%200%20.862%200%201.034-.113a.687.687%200%200%200%20.313-.543c.01-.196-.128-.434-.398-.9a8.198%208.198%200%200%201-.028-.048l-1.948-3.332-.022-.037c-.274-.463-.412-.697-.59-.787a.684.684%200%200%200-.621%200c-.179.093-.323.337-.608.828l-1.94%203.331-.007.012c-.284.49-.426.735-.416.936.014.22.127.423.313.543.168.11.456.11%201.03.11Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E%0A"
        />
    )
}

const Icon = (props: IconProps) => {
    return (
        <img
            style={{ width: `${props.width || 20}px`, height: `${props.height || 20}px`, borderRadius: `${props.borderRadius || 4}px` }}
            src={props.src}
        />
    )
}