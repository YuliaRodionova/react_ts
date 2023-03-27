import { useState } from "react";
import { customAlphabet } from 'nanoid';
import { addProduct, deleteProduct } from "../../../lib/actions/actionCreators";
import PageLayout from "../../pageLayout/pageLayout";
import Button from "../../ui/button/button";
import { IProduct } from "../../../interfaces/IProduct";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../lib/store/store";
import AdminCard from "../../block/adminCard/adminCard";

interface HandleNameChangeInterface {
    target: HTMLInputElement;
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
    articleNumber: ''
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


function AdminPage(): JSX.Element {
    const [form, setForm] = useState(initialForm);
    const productsList = useSelector((store: RootState) => store.productsList);
    const dispatch = useDispatch();

    const changeHandler = (event: HandleNameChangeInterface) => {
        const target = event.target;

        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setForm(prevForm => {
            return { ...prevForm, [name]: value }
        });
    }

    const submitHandler = (e: any) => {
        e.preventDefault();
        const nanoid = customAlphabet('1234567890');
        const id = +nanoid();
        const newProduct = { ...form, id }
        dispatch(addProduct(newProduct));
    }

    const productListElems = productsList ? productsList.productsList.map(product => {
        return <AdminCard product={product} />
    }) : [];

    return (
        <PageLayout>
            <>
                <h1>Админ-панель</h1>
                <form onSubmit={submitHandler}>
                    <input onChange={changeHandler} type="text" name="productName" placeholder="Название товара" value={form.productName} />
                    <input onChange={changeHandler} type="text" name="img" placeholder="Изображение" value={form.img} />
                    <input onChange={changeHandler} type="text" name="code" placeholder="Штрихкод" value={form.code} />
                    <input onChange={changeHandler} type="text" name="brand" placeholder="Бренд" value={form.brand} />
                    <input onChange={changeHandler} type="text" name="producer" placeholder="Производитель" value={form.producer} />
                    <input onChange={changeHandler} type="text" name="unit" placeholder="Единица измерения" value={form.unit} />
                    <input onChange={changeHandler} type="text" name="weight" placeholder="Вес" value={form.weight} />
                    <input onChange={changeHandler} type="number" name="price" placeholder="Цена" value={form.price} />
                    <input onChange={changeHandler} type="text" name="articleNumber" placeholder="Артикул" value={form.articleNumber} />
                    <input type="text" onChange={changeHandler} name="description" placeholder="Описание" value={form.description}></input>
                    <Button styleClass="button" text="Добавить товар" />
                </form>

                {productListElems.length > 0 ? productListElems : <p>Добавьте товары</p>}
            </>
        </PageLayout>
    )
}

export default AdminPage;