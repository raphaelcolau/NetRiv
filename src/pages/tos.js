import TextContent from "../components/TextContent/TextContent"

export default function PageTOS() {

    const elements = [
        'intro',
        'subscription',
        'def-lex',
        'cgu',
        'desc-serv',
        'limite',
        'intellectual-property',
        'links',
        'juridiction',
        'duration',
        'payment',
        'protection'
    ]

    return (
        <TextContent elements={elements} pageName="tos" />
    )
}