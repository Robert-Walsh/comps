import Button from '../components/Button'
import { GoBell } from 'react-icons/go'

function ButtonPage(){
    const handleClick = () => {}

    return (
        <div>
            <div>
                <Button primary onClick={handleClick} className="mb-5">
                    <GoBell/>
                    Click Me!!
                </Button>
            </div>
            <div>
                <Button primary outline>Click Me!!</Button>
            </div>
            <div>
                <Button primary rounded>Click Me!!</Button>
            </div>
            <div>
                <Button secondary>Hello World!</Button>
            </div>
            <div>
                <Button secondary outline>Hello World!</Button>
            </div>
            <div>
                <Button secondary rounded>Hello World!</Button>
            </div>
            <div>
                <Button success>Yeeeehaaaaaaw</Button>
            </div>
            <div>
                <Button success outline>Yeeeehaaaaaaw</Button>
            </div>
            <div>
                <Button success rounded>Yeeeehaaaaaaw</Button>
            </div>
            <div>
                <Button warning>Hey there!!</Button>
            </div>
            <div>
                <Button warning outline>Hey there!!</Button>
            </div>
            <div>
                <Button warning rounded>Hey there!!</Button>
            </div>
            <div>
                <Button danger>Alice and Bob</Button>
            </div>   
            <div>
                <Button danger outline>Alice and Bob</Button>
            </div>    
            <div>
                <Button danger rounded>Alice and Bob</Button>
            </div>             
        </div>
        )
}

export default ButtonPage