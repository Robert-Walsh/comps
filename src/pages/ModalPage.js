import Modal from '../components/Modal'
import Button from '../components/Button'
import { useState } from 'react'

function ModalPage() {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = (
        <div>
            <Button primary onClick={handleClose}>
                I Accept
            </Button>
        </div>
    )

    const modal = 
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Here is an important agreement for you to accept
            </p>
        </Modal>

    return <div>

        <Button primary onClick={handleClick}>
            Open Modal
        </Button>

        {showModal && modal}
        
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla imperdiet. Vestibulum blandit ipsum id risus ultrices, sit amet consequat felis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacinia mi. Curabitur in felis in nisl condimentum porttitor. Maecenas sem ipsum, faucibus at lobortis vel, auctor et ipsum. Nulla eget metus id mauris convallis varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut blandit scelerisque urna sit amet ullamcorper.
        </p>


    </div>
}

export default ModalPage