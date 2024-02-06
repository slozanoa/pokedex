
interface ITypography {
    text: string
    variants: 'primary' | 'secondary'
}
const Typography = ({text, variants}: ITypography)=> {
    return (
        <div className={variants === 'primary' ? 'text-lg font-bold' : 'text-xs font-normal'}>{text}</div>
    )
}

export default Typography