import React from 'react';
import '../css/Catalog.css';

class Catalog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    /* test comment */

    render() {

        const {books} = this.state;

    return (
        <div className="catalog">

            {/* List of Book titles below */}

                {
                    this.props.books.map((book, i) => {
                        return <div
                            className="book"
                            key={book.amazonUrl}
                            >

                            <a href={book.amazonUrl}><i>{book.title}</i> by {book.author}</a><br />
                            <p>Buy New <span id="stock">(In Stock)</span></p>
                            <strong>Price: ${book.price}</strong><br />
                            <a target="_blank" href={book.amazonImage}>
                                <img src={book.amazonImage} width="50%" title={book.title + ' (click image to view full size)'} alt={book.title} />
                            </a><br />

                            <p>
                                <button class="azbutton" id={book.id} onClick={this.props.addToCart}>Add to Cart</button>
                            </p>
                        </div>
                    })
                }
        </div>
    )
    }
}

export default Catalog;