import Accordion from '../components/Accordion'

function AccordionPage(){

    const items = [
        {
            id: "we234",
            label: 'Accordion Label 1',
            content: 'Content 1 ############'
        },
        {
            id: "g3432",
            label: 'Accordion Label 2',
            content: 'Content 2 ############'
        },
        {
            id: "g345f",
            label: 'Accordion Label 3',
            content: 'Content 3 ############'
        },
    ]

    return (
        <div>
            <Accordion items={items}/>
        </div>
        )
}

export default AccordionPage