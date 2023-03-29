import './sidebar.scss';
import ElemCount from '../../element/elemCount/elemCount';
import Checkbox from '../../ui/checkbox/checkbox';
import SearchInput from '../../element/searchInput/searchInput';
import Button from '../../ui/button/button';
import Details from '../../ui/details/details';


function Sidebar(): JSX.Element {
    return (
        <div className='sidebar'>
            <h3 className='sidebar__title'>Подбор по параметрам</h3>
            <div className='sidebar__section sidebar__price'>
                <h4><span className='sidebar__price'>Цена</span> ₸</h4>
                <ElemCount type='text' leftValue={0} rightValue={10000} count='-' />
            </div>
            <div className='sidebar__section'>
                <h5>Производитель</h5>
                <SearchInput />
                <Checkbox label='Grifon' />
                <Checkbox label='AOS' />
                <Checkbox label='Boyscout' />
                <Checkbox label='Paclan' />
                <Details title="Показать все">
                    <Checkbox label='Булгари Грин' />
                    <Checkbox label='Nivea' />
                    <Checkbox label='Домашний сундук' />
                    <Checkbox label='HELP' />
                </Details>
            </div>
            <div className='sidebar__section'>
                <div className='sidebar__container'>
                    <h3 className='sidebar__title'>Уход за телом</h3>
                    <Button styleClass='button button__bg-inherit button_font-main' text='Эпиляция и депиляция' />
                    <Button styleClass='button button__bg-inherit button_font-main' text='Средства для ванны и душа' />
                    <Button styleClass='button button__bg-inherit button_font-main' text='Скрабы, пилинги и пр.' />
                    <Button styleClass='button button__bg-inherit button_font-main' text='Мочалки и губки для тела' />
                </div>
                <div className='sidebar__container'>
                    <h3 className='sidebar__title'>Уход за руками</h3>
                    <Button styleClass='button button__bg-inherit button_font-main' text='Увлажнение и питание' />
                    <Button styleClass='button button__bg-inherit button_font-main' text='Средства для ногтей' />
                    <Button styleClass='button button__bg-inherit button_font-main' text='Мыло твердое' />
                    <Button styleClass='button button__bg-inherit button_font-main' text='Мыло жидкое' />
                </div>
                <div className='sidebar__container'>
                    <h3 className='sidebar__title'>Уход за ногами</h3>
                    <Button styleClass='button button__bg-inherit button_font-main' text='Скрабы, пилинги' />
                    <Button styleClass='button button__bg-inherit button_font-main' text='Пилки, ролики' />
                    <Button styleClass='button button__bg-inherit button_font-main' text='Крем для ног' />
                    <Button styleClass='button button__bg-inherit button_font-main' text='Дезодоранты для ног' />
                </div>
                <div className='sidebar__container'>
                    <h3 className='sidebar__title'>Уход за лицом</h3>
                    <Button styleClass='button button__bg-inherit button_font-main' text='Тональные средства' />
                    <Button styleClass='button button__bg-inherit button_font-main' text='Средства для снятия макияжа' />
                    <Button styleClass='button button__bg-inherit button_font-main' text='Средства для очищения' />
                    <Button styleClass='button button__bg-inherit button_font-main' text='Крем для лица' />
                </div>
                <div className='sidebar__container'>
                    <h3 className='sidebar__title'>Уход за волосами</h3>
                    <Button styleClass='button button__bg-inherit button_font-main' text='Шампуни' />
                    <Button styleClass='button button__bg-inherit button_font-main' text='Средства для укладки' />
                    <Button styleClass='button button__bg-inherit button_font-main' text='Средства для окрашивания волос' />
                </div>
            </div>
        </div>
    )

}
export default Sidebar