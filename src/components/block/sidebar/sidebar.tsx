import './sidebar.scss'
import ElemCount from '../../element/elemCount/elemCount'
import Checkbox from '../../ui/checkbox/checkbox'
import Input from '../../ui/input/input'


function Sidebar(): JSX.Element {
    return (
        <div className='sidebar'>
            <h3>ПОДБОР ПО ПАРАМЕТРАМ</h3>
            <div className='sidebar__section sidebar__price'>
                <h4>Цена ₸</h4>
                <ElemCount />
            </div>
            <div className='sidebar__section'>
                <Input styleClass='button form__input form__input_gray' />
                <Checkbox label='Grifon' />
                <Checkbox label='AOS' />
            </div>
        </div>
    )

}
export default Sidebar