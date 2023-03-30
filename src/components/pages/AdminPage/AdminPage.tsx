import './AdminPage.scss';
import { useEffect } from 'react';
import { useState } from "react";
import { customAlphabet } from 'nanoid';
import { addProduct, editProduct } from "../../../lib/actions/actionCreators";
import PageLayout from "../../pageLayout/pageLayout";
import Button from "../../ui/button/button";
import { IProduct } from "../../../interfaces/IProduct";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../lib/store/store";
import AdminCard from "../../block/adminCard/adminCard";
import HandleInputChangeInterface from '../../../interfaces/HandleInputChangeInterface';
import { ICategory } from '../../../interfaces/ICategory';
import { mockCategories } from '../../../mocks/categoriesMock';

interface HandleSelectChangeInterface {
    target: HTMLSelectElement;
}

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

// const fields = [
//     {
//         type: 'text',
//         name: 'productName',
//         placeholder: 'Название товара'
//     },
//     {
//         type: 'text',
//         name: 'articleNumber',
//         placeholder: 'Артикул'
//     },
//     {
//         type: 'text',
//         name: 'brand',
//         placeholder: 'Бренд'
//     },
//     {
//         type: 'text',
//         name: 'img',
//         placeholder: 'Изображение'
//     },
//     {
//         type: 'text',
//         name: 'code',
//         placeholder: 'Штрихкод'
//     },
//     {
//         type: 'text',
//         name: 'producer',
//         placeholder: 'Производитель'
//     },
//     {
//         type: 'text',
//         name: 'unit',
//         placeholder: 'Единица измерения'
//     },
//     {
//         type: 'text',
//         name: 'weight',
//         placeholder: 'вес'
//     },
//     {
//         type: 'text',
//         name: 'description',
//         placeholder: 'Описание'
//     },
//     {
//         type: 'number',
//         name: 'price',
//         placeholder: 'Цена'
//     }
// ]

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

    const submitHandler = (e: any): void => {
        e.preventDefault();
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

    const categoriesOptions = categories ? categories.map(category => {
        const selected = form.careType.includes(category.categoryId);
        return <option selected={selected} value={category.categoryId}>{category.categoryTitle}</option>
    }) : [];

    const productListElems = productsList ? productsList.productsList.map(product => {
        return <AdminCard setForm={setForm} setFormAction={setFormAction} product={product} />
    }) : [];

    return (
        <PageLayout>
            <>
                <h1>Админ-панель</h1>
                <form onSubmit={submitHandler} className='admin-page__form'>
                    <fieldset>
                        <label className='card-title' htmlFor="productName">Наименование товара</label>
                        <input onChange={changeHandler} type="text" name="productName" placeholder="Название товара" value={form.productName} />
                    </fieldset>
                    <fieldset>
                        <label className='card-title' htmlFor="img">Изображение товара</label>
                        <input onChange={changeHandler} type="text" name="img" placeholder="Изображение" value={form.img} />
                    </fieldset>
                    <fieldset>
                        <label className='card-title' htmlFor="code">Штрихкод</label>
                        <input onChange={changeHandler} type="text" name="code" placeholder="Штрихкод" value={form.code} />
                    </fieldset>
                    <fieldset>
                        <label className='card-title' htmlFor="brand">Бренд</label>
                        <input onChange={changeHandler} type="text" name="brand" placeholder="Бренд" value={form.brand} />
                    </fieldset>
                    <fieldset>
                        <label className='card-title' htmlFor="producer">Производитель</label>
                        <input onChange={changeHandler} type="text" name="producer" placeholder="Производитель" value={form.producer} />
                    </fieldset>
                    <fieldset>
                        <label className='card-title' htmlFor="unit">Единица измерения</label>
                        <input onChange={changeHandler} type="text" name="unit" placeholder="Единица измерения" value={form.unit} />
                    </fieldset>
                    <fieldset>
                        <label className='card-title' htmlFor="weight">Вес</label>
                        <input onChange={changeHandler} type="text" name="weight" placeholder="Вес" value={form.weight} />
                    </fieldset>
                    <fieldset>
                        <label className='card-title' htmlFor="price">Цена</label>
                        <input onChange={changeHandler} type="number" name="price" placeholder="Цена" value={form.price} />
                    </fieldset>
                    <fieldset>
                        <label className='card-title' htmlFor="articleNumber">Артикул</label>
                        <input onChange={changeHandler} type="text" name="articleNumber" placeholder="Артикул" value={form.articleNumber} />
                    </fieldset>
                    <fieldset>
                        <label className='card-title' htmlFor="description">Описание</label>
                        <input type="text" onChange={changeHandler} name="description" placeholder="Описание" value={form.description}></input>
                    </fieldset>
                    <fieldset>
                        <label className='card-title' htmlFor="description">Категория</label>
                        <select onChange={changeSelectHandler} multiple name="careType">
                            {categoriesOptions}
                        </select>
                    </fieldset>
                    <Button handlerClick={submitHandler} styleClass="button" text={buttonText} />
                    {formAction == 'edit' && <Button handlerClick={setInitialFormAction} styleClass="button" text="Отмена" />}
                </form>

                {productListElems.length > 0 ? productListElems : <p>Добавьте товары</p>}
            </>
        </PageLayout>
    )
}

export default AdminPage;