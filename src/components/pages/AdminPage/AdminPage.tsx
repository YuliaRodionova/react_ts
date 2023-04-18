import './AdminPage.scss';
import { useEffect } from 'react';
import { useState } from "react";
import { customAlphabet } from 'nanoid';
import { addProduct, editProduct } from "../../../lib/actions/actionCreators";
import PageLayout from "../../layouts/pageLayout/pageLayout";
import Button from "../../ui/button/button";
import { IProduct } from "../../../interfaces/IProduct";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../lib/store/store";
import AdminCard from "../../block/adminCard/adminCard";
import HandleInputChangeInterface from '../../../interfaces/HandleInputChangeInterface';
import { ICategory } from '../../../interfaces/ICategory';
import { mockCategories } from '../../../mocks/categoriesMock';
import BreadCrumbs from '../../element/breadCrumbs/breadCrumbs';
import Fieldset from '../../element/fiedset/fieldset';

const initialForm: IProduct = {
    id: 0,
    img: '/productImg.jpg',
    productName: '',
    unit: '',
    weight: 0,
    code: 0,
    producer: '',
    brand: 'Tide',
    description: '',
    price: 0,
    available: true,
    articleNumber: '',
    careType: []
}

const initialFormAction = 'add';
function AdminPage(): JSX.Element {
    const [form, setForm] = useState(initialForm);
    const [formAction, setFormAction] = useState(initialFormAction);
    const [buttonText, setButtonText] = useState('');
    const productsList = useSelector((store: RootState) => store.productsList);
    const dispatch = useDispatch();

    const categories: ICategory[] = JSON.parse(mockCategories);

    useEffect(() => {
        switch (formAction) {
            case 'add':
                setButtonText('Добавить товар');
                break;
            case 'edit':
                setButtonText('Обновить товар');
                break;
            default:
                setButtonText('Добавить товар');
        }
    }, [formAction])

    const changeHandler = (event: HandleInputChangeInterface) => {
        const target = event.target;

        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setForm(prevForm => {
            return { ...prevForm, [name]: value }
        });
    }

    const changeSelectHandler = (event: any) => {
        const target = event.target;

        const name = target.name;
        const value = Array.from(target.options).filter((option: any) => option.selected).map((option: any) => +option.value);
        setForm(prevForm => {
            return { ...prevForm, [name]: value }
        });
    }

    const submitHandler = (event: any): void => {
        event.preventDefault();
        const nanoid = customAlphabet('1234567890');
        const id = formAction == 'add' ? +nanoid() : form.id;
        const newProduct = { ...form, id }
        switch (formAction) {
            case 'add':
                dispatch(addProduct(newProduct));
                break;
            case 'edit':
                dispatch(editProduct(newProduct));
                break;
            default:
                dispatch(addProduct(newProduct));
        }
        setForm(initialForm);
        setFormAction(initialFormAction);
    }

    const setInitialFormAction = (e: any): void => {
        e.preventDefault();
        setFormAction(initialFormAction);
    }

    const categoriesOptions = categories ? categories.map((category, i) => {
        const selected = form.careType.includes(category.categoryId);
        
        return <option key={i} value={category.categoryId} selected={selected} >{category.categoryTitle}</option>
    }) : [];

    const productListElems = productsList ? productsList.productsList.map((product, i) => {
        return <AdminCard key={i} setForm={setForm} setFormAction={setFormAction} product={product} />
    }) : [];

    return (
        <PageLayout>
            <>
                <BreadCrumbs linkUrl="/Catalogue" classDashed="right-border-dashed" linkTitle="Админ-панель" />
                <h1>Админ-панель</h1>
                <form onSubmit={submitHandler} className='admin-page__form'>
                    <div className="admin-page__form-fields-row">
                        <Fieldset htmlForValue='productName' labelName='Наименование товара'>
                            <input onChange={changeHandler} type="text" name="productName" placeholder="Название товара" value={form.productName} />
                        </Fieldset>
                        <Fieldset htmlForValue='img' labelName='Изображение товара'>
                            <input onChange={changeHandler} type="text" name="img" placeholder="Изображение" value={form.img} />
                        </Fieldset>
                        <Fieldset htmlForValue='code' labelName='Штрихкод'>
                            <input onChange={changeHandler} type="text" name="code" placeholder="Штрихкод" value={form.code} />
                        </Fieldset>
                        <Fieldset htmlForValue='brand' labelName='Бренд'>
                            <input onChange={changeHandler} type="text" name="brand" placeholder="Бренд" value={form.brand} />
                        </Fieldset>
                        <Fieldset htmlForValue='producer' labelName='Производитель'>
                            <input onChange={changeHandler} type="text" name="producer" placeholder="Производитель" value={form.producer} />
                        </Fieldset>
                        <Fieldset htmlForValue='unit' labelName='Единица измерения'>
                            <input onChange={changeHandler} type="text" name="unit" placeholder="Единица измерения" value={form.unit} />
                        </Fieldset>
                        <Fieldset htmlForValue='weight' labelName='Вес'>
                            <input onChange={changeHandler} type="text" name="weight" placeholder="Вес" value={form.weight} />
                        </Fieldset>
                        <Fieldset htmlForValue='price' labelName='Цена'>
                            <input onChange={changeHandler} type="number" name="price" placeholder="Цена" value={form.price} />
                        </Fieldset>
                        <Fieldset htmlForValue='articleNumber' labelName='Артикул'>
                            <input onChange={changeHandler} type="text" name="articleNumber" placeholder="Артикул" value={form.articleNumber} />
                        </Fieldset>
                        <Fieldset htmlForValue='description' labelName='Описание'>
                            <input type="text" onChange={changeHandler} name="description" placeholder="Описание" value={form.description}></input>
                        </Fieldset>
                        <Fieldset htmlForValue='careType' labelName='Категория'>
                            <select onChange={changeSelectHandler} multiple name="careType">
                                {categoriesOptions}
                            </select>
                        </Fieldset>
                    </div>
                    <div className="admin-page__form-buttons">
                        <Button handlerClick={submitHandler} styleClass="button" text={buttonText} />
                        {formAction == 'edit' && <Button handlerClick={setInitialFormAction} styleClass="button" text="Отмена" />}
                    </div>
                </form>

                {productListElems.length > 0 ? productListElems : <p>Добавьте товары</p>}
            </>
        </PageLayout>
    )
}

export default AdminPage;