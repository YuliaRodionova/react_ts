interface IPriceList {
    styleClassForLink: string;
}

function PriceList({ styleClassForLink }: IPriceList): JSX.Element {
    return (
        <a href="#" className={styleClassForLink}>Прайс-лист
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.79199 3.375H6.62532V0.125H3.37532V3.375H1.20866L5.00032 7.70833L8.79199 3.375ZM0.666992 8.79167H9.33366V9.875H0.666992V8.79167Z" />
            </svg>
        </a>
    )

}
export default PriceList;