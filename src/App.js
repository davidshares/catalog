import React from 'react';
import Catalog from './components/Catalog.jsx';
import Nav from './components/Nav.jsx';


// removed Notes component since it's not being used
// import Notes from './components/Notes.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username:'guest',
            books: [
                {
                    id: '1644450003',
                    title: 'Milkman: A Novel',
                    author: 'Anna Burns',
                    amazonImage: 'https://images-na.ssl-images-amazon.com/images/I/41eOX0cBT8L._SX331_BO1,204,203,200_.jpg',
                    amazonUrl: 'https://www.amazon.com/dp/1644450003',
                    price: 7.99
                },
                {
                    id: '1594206252',
                    title: 'Feel Free: Essays',
                    author: 'Zadie Smith',
                    amazonImage: 'https://images-na.ssl-images-amazon.com/images/I/51NLFKhZnIL._SX327_BO1,204,203,200_.jpg',
                    amazonUrl: 'https://www.amazon.com/dp/1594206252',
                    price: 16.16
                },
                {
                    id: '0525520376',
                    title: 'There There: A novel',
                    author: 'Tommy Orange',
                    amazonImage: 'https://images-na.ssl-images-amazon.com/images/I/51RuAbKH%2BtL._SX326_BO1,204,203,200_.jpg',
                    amazonUrl: 'https://www.amazon.com/dp/0525520376',
                    price: 11.46
                },
                {
                    id: '039335668X',
                    title: 'The Overstory',
                    author: 'Richard Powers',
                    amazonImage: 'https://images-na.ssl-images-amazon.com/images/I/51t47tHiewL._SX331_BO1,204,203,200_.jpg',
                    amazonUrl: 'https://www.amazon.com/dp/039335668X',
                    price: 11.37
                },
                {
                    id: 'B07CL618JT',
                    title: 'Frederick Douglass: Prophet of Freedom',
                    author: 'David W. Blight',
                    amazonImage: 'https://images-na.ssl-images-amazon.com/images/I/41WB3SINfTL.jpg',
                    amazonUrl: 'https://www.amazon.com/dp/B07CL618JT',
                    price: 13.88
                },
                {
                    id: '1250215072',
                    title: 'Amity and Prosperity: One Family and the Fracturing of America',
                    author: 'Eliza Griswold',
                    amazonImage: 'https://images-na.ssl-images-amazon.com/images/I/51TbPffW-qL._SX324_BO1,204,203,200_.jpg',
                    amazonUrl: 'https://www.amazon.com/dp/1250215072',
                    price: 12.69
                }
            ],
            cartItems: []
        }

        // must bind input changes
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addToCart= this.addToCart.bind(this);

    }

    handleInputChange(event){
        // console.log(event.target)

        this.setState({
            username: event.target.value
        })
    }

    addToCart(event){
        // console.log(event.target.name);
        const item = this.state.books.find(book => book.id === event.target.id);
        // console.log(item)
        // const item2 = this.state.books.filter(book => book.id === event.target.id)[0];
        // console.log(item2)

        this.setState({
            cartItems: [...this.state.cartItems, item]
    })
    }

    render() {

        return (
            <div className="App" style={{padding: '2vw'}}>

                <Nav
                    cartItems={this.state.cartItems}
                />

                {this.state.username.length <= 1 &&
                <div>
                    <h3>Enter your username to enter the catalog:</h3>
                    <input
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                </div>
                }

                {this.state.username.length > 1 &&
                <Catalog
                    books={this.state.books}
                    addToCart={this.addToCart}
                />
                }

            </div>
        );
    }
}

export default App;