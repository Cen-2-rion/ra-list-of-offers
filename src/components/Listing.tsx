import {ItemsList} from './types';

const Listing = ({items}: ItemsList) => {
    const truncatedTitle = (title: string) => {
        return title.length > 50 ? title.slice(0, 50) + '...' : title;
    }

    const formattedPrice = (price: string, currencyCode: string) => {
        switch (currencyCode) {
            case 'USD': return `$${price}`;
            case 'EUR': return `€${price}`;
            case 'GBP': return `GBP ${price}`;
            default: return `unknown`;
        }
    }

    const formattedQuantity = (quantity: number) => {
        switch (true) {
            case quantity <= 10: return 'level-low';
            case quantity <= 20: return 'level-medium';
            case quantity > 20: return 'level-high';
            default: return 'level-unknown';
        }
    }
    
    const ImageNotAvailable = () => (
        <img className='default-image' src='./src/img/etsy-logo.png' alt='Image not available!'/>
    );

    return (
        <div className='item-list'>
            {items.map(item => (
                <div key={item.listing_id}>
                    <div className='item'>
                        <div className='item-image'>
                            <a href={item.url}>
                                {(item.MainImage) ? <img src={item.MainImage.url_570xN} alt={item.title}/> : ImageNotAvailable()}
                            </a>
                        </div>
                        <div className='item-details'>
                            <p className='item-title'>{item.title && truncatedTitle(item.title)}</p>
                            <p className='item-price'>{formattedPrice(item.price, item.currency_code)}</p>
                            <p className={`item-quantity ${formattedQuantity(item.quantity)}`}>{item.quantity}</p>
                        </div>
                    </div>      
                </div>
            ))}
        </div>
    );
}

export default Listing;
