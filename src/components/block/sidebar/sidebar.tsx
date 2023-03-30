import { useState, useEffect } from "react";
import './sidebar.scss';
import ElemCount from '../../element/elemCount/elemCount';
import Checkbox from '../../ui/checkbox/checkbox';
import SearchForm from '../../element/searchForm/searchForm';
import Button from '../../ui/button/button';
import { ICategory } from "../../../interfaces/ICategory";

interface ISidebar {
    categories?: ICategory[],
    selectedCategoryId?: number | null,
    selectCategoryHandler?: any,
}

const vendors: string[] = ['Grifon', 'AOS', 'Boyscout', 'Paclan', 'Булгари Грин', 'Nivea', 'Домашний сундук', 'HELP'];

function Sidebar(props: ISidebar): JSX.Element {
    const { categories, selectedCategoryId, selectCategoryHandler } = props;

    const [filtersItemsOpen, setfiltersItemsOpen] = useState<boolean>(false);
    const [vendorsList, setVendorsList] = useState<string[]>(vendors);
    const [searchVendors, setSearchVendors] = useState<string | null>(null);

    useEffect(() => {
        if (searchVendors) {
            const filteredVendorsList = vendorsList.filter(vendor => {
                return vendor.toLowerCase().indexOf(searchVendors.toLowerCase()) !== -1;
            });
            setVendorsList(filteredVendorsList);
        }
    }, [searchVendors]);

    const categoriesList = categories ? categories.map(category => {
        return <Button key={category.categoryId} handlerClick={() => selectCategoryHandler(category.categoryId)} styleClass={`sidebar__title ${selectedCategoryId == category.categoryId ? 'active' : ''}`} text={category.categoryTitle} />
    }) : [];

    const clickHandler = () => {
        setfiltersItemsOpen(!filtersItemsOpen);
    };

    const searchHandler = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const search = formData.get('search');
        if (typeof search == 'string') {
            setVendorsList(vendors);
            setSearchVendors(search);
        }
    }

    const vendorsListElems = vendorsList.map((vendor, i) => <Checkbox key={i} label={vendor} />)

    return (
        <div className='sidebar'>
            <h3 className='sidebar__title'>Подбор по параметрам</h3>
            <div className='sidebar__section sidebar__price'>
                <h4><span className='sidebar__price'>Цена</span> ₸</h4>
                <ElemCount type='text' leftValue={0} rightValue={10000} count='-' />
            </div>
            <div className='sidebar__section'>
                <h5>Производитель</h5>
                <SearchForm handler={searchHandler} />
                <div className={`sidebar__block ${filtersItemsOpen === true ? 'closed' : ''}`}>
                    {vendorsListElems}
                </div>
                {vendorsListElems.length > 0 ? <Button handlerClick={clickHandler} styleClass='button button__bg-inherit sidebar__button' text={`${filtersItemsOpen === true ? 'Показать все ▾' : 'Скрыть ▴'}`} /> : 'Не найдено'}
            </div>
            <div className='sidebar__section'>
                <div className='sidebar__container'>
                    {categoriesList}
                </div>
                {/* <div className='sidebar__container'>
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
                </div> */}
            </div>
        </div>
    )

}
export default Sidebar