import React from 'react';
import '../css/Notes.css';

const Practice = () => {
    return (
        <div className="notes">
            <table className="table table-borderless row-borderless">
                <thead>
                <tr>
                    <td width="20%">
                        VARIABLES & CONSTANTS
                    </td>
                    <td width="40%">
                        ECMAScript 5 (ES5)
                    </td>
                    <td width="40%">
                        ES6
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        Create and initialize a variable.<br/>
                        <b>let</b>
                    </td>
                    <td>
              <pre>
{`var name = 'Joe';`}
              </pre>
                    </td>
                    <td>
              <pre>
{`let name = 'Joe';`}
              </pre>
                    </td>
                </tr>
                <tr>
                    <td>
                        Create, then set a variable.<br/>
                        <b>let</b>
                    </td>
                    <td>
              <pre>
{`// declare (type is assigned by context)
var ages;

// assign value
ages = [5, 3, 2];`}
              </pre>
                    </td>
                    <td>
              <pre>
{`// declare (type is assigned by context)
let ages;

// assign value
ages = [5, 3, 2];`}
              </pre>
                    </td>
                </tr>
                <tr>
                    <td>
                        Set a constant.<br/>
                        <b>const</b>
                    </td>
                    <td>
              <pre>
{`var PI = 3.14;`}
              </pre>
                    </td>
                    <td>
              <pre>
{`const pi = 3.14;`}
              </pre>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td colSpan="2">
                        Variables and constants defined with <b>let</b> or <b>const</b>:
                        <ul>
                            <li>Are available only within the function or block in which they are defined</li>
                            <li>Cannot be referenced before they are defined</li>
                            <li>If an array or object is declared using the keyword const, the contents of that array or object
                                can be changed, but that variable name will always point to that same piece of memory.
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        Create a function, assign it to a variable, and call it.<br/>
                        <b>const</b> and <b>arrow format</b>
                    </td>
                    <td>
              <pre>
{`function addThese(a, b) {
  var sum = a + b;
  return sum;
};
var myAddFunction = addThese;
var outcome = myAddFunction(2, 3);
`}
              </pre>
                    </td>
                    <td>
              <pre>
{`const addThese = (a, b) => {
  const sum = a + b;
  return sum;
};
let myAddFunction = addThese;
let outcome = myAddFunction(2, 3);
`}
              </pre>
                    </td>
                </tr>
                </tbody>
            </table>

            <table className="table table-borderless row-borderless">
                <thead>
                <tr>
                    <td width="20%">
                        STRINGS
                    </td>
                    <td width="40%">
                        ECMAScript 5 (ES5)
                    </td>
                    <td width="40%">
                        ES6
                    </td>
                </tr>
                </thead>
                <tbody>

                <tr>
                    <td>
                        Create a string from text strings and variables.<br/>
                        <b>tick marks, &#36;&#123;varname&#125;</b>
                    </td>
                    <td>
              <pre>
{`var address = '505 Main St';
var city = 'St Louis';
var state = 'MO';
var zip = '63105';
var mailInstructions = 'Mail to: + address + ', ' + city + ' ' + state + ' ' + zip`}
              </pre>
                    </td>
                    <td>
              <pre>
{`let address = '505 Main St';
let city = 'St Louis';
let state = 'MO';
let zip = '63105';
let mailInstructions = \`Mail to: \${address}, \${city} \${state} \${zip}\`;`}
              </pre>
                    </td>
                </tr>
                <tr>
                    <td>
                        Create a string with line breaks.<br/>
                        Tick marks can include <b>multiline content</b>
                    </td>
                    <td>
              <pre>
{`var address = '505 Main St';
var city = 'St Louis';
var state = 'MO';
var zip = '63105';
var mailInstructions = 'Mail to: + address + '\\n' + city + '\\n' + state + '\\n' + zip`}
              </pre>
                    </td>
                    <td>
              <pre>
{`let address = '505 Main St';
let city = 'St Louis';
let state = 'MO';
let zip = '63105';
let mailInstructions = \`Mail to:
\${address}
\${city} \${state} \${zip}\`;`}
              </pre>
                    </td>
                </tr>
                </tbody>

            </table>

            <table className="table table-borderless row-borderless">
                <thead>
                <tr>
                    <td width="20%">
                        OBJECTS
                    </td>
                    <td width="40%">
                        ECMAScript 5 (ES5)
                    </td>
                    <td width="40%">
                        ES6
                    </td>
                </tr>
                </thead>
                <tbody>

                <tr>
                    <td>
                        Create an object, dot notation or bracket notation<br/>
                        <b>let</b>
                    </td>
                    <td>
              <pre>
{`var mailingAddress = {
  address: '505 Main St',
  city: 'St Louis',
  state: 'MO',
  zip: '63105';`}</pre>
                    </td>
                    <td>
              <pre>
{`let mailingAddress = {
  address: '505 Main St',
  city: 'St Louis',
  state: 'MO',
  zip: '63105'
};`}</pre>
                    </td>
                </tr>
                <tr>
                    <td>
                        Set object properties with dot notation
                    </td>
                    <td>
              <pre>
{`var mailingAddress = {};
mailingAddress.address = '712 Water St';
// etc for other properties`}</pre>
                    </td>
                    <td>
                            <pre>
{`let mailingAddress = {};
mailingAddress.address = '800 10th St';
// etc for other properties`}</pre>
                    </td>
                </tr>
                <tr>
                    <td>
                        Set properties with bracket notation
                    </td>
                    <td>
              <pre>
{`var mailingAddress = {};
mailingAddress['address'] = '712 Water St';
// etc for other properties`}
              </pre>
                    </td>
                    <td>
              <pre>
{`let mailingAddress = {};
mailingAddress['address'] = '800 10th St';
// etc for other properties`}
              </pre>
                    </td>
                </tr>
                <tr>
                    <td>
                        Access a property of an object<br/>
                        <b>Destructuring</b>
                    </td>
                    <td>
              <pre>
{`// using mailingAddress object defined above
var city = mailingAddress.city;`}
              </pre>
                    </td>
                    <td>
              <pre>
{`// using mailingAddress object defined above
let city = {mailingAddress}`}
              </pre>
                    </td>
                </tr>
                </tbody>

            </table>

            <table className="table table-borderless row-borderless">
                <thead>
                <tr>
                    <td width="20%">
                        ARRAYS
                    </td>
                    <td width="40%">
                        ECMAScript 5 (ES5)
                    </td>
                    <td width="40%">
                        ES6
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        Create and initialize a flat array<br/>
                        <b>let</b>
                    </td>
                    <td>
              <pre>
{`var bookTitles = ['Milkman: A Novel', 'Feel Free: Essays', 'There There: A novel'];`}
              </pre>
                    </td>
                    <td>
              <pre>
{`let bookTitles = ['Milkman: A Novel', 'Feel Free: Essays', 'There There: A novel'];`}
              </pre>
                    </td>
                </tr>

                <tr>
                    <td>
                        Create and initialize an array of objects.<br/>
                        <b>let</b>
                    </td>
                    <td>
              <pre>
{`var books = [
  {
    title: 'Milkman: A Novel',
    author: 'Anna Burns',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/I/41eOX0cBT8L._SX331_BO1,204,203,200_.jpg',
    amazonUrl: 'https://www.amazon.com/dp/1644450003',
    price: 7.99
  },
  {
    title: 'Feel Free: Essays',
    author: 'Zadie Smith',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/I/51NLFKhZnIL._SX327_BO1,204,203,200_.jpg',
    amazonUrl: 'https://www.amazon.com/dp/1594206252',
    price: 16.16
  },
  {
    title: 'There There: A novel',
    author: 'Tommy Orange',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/I/51RuAbKH%2BtL._SX326_BO1,204,203,200_.jpg',
    amazonUrl: 'https://www.amazon.com/dp/0525520376',
    price: 11.46
  }
];`}
              </pre>
                    </td>
                    <td>
              <pre>
{`let books = [
  {
    title: 'Milkman: A Novel',
    author: 'Anna Burns',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/I/41eOX0cBT8L._SX331_BO1,204,203,200_.jpg',
    amazonUrl: 'https://www.amazon.com/dp/1644450003',
    price: 7.99
  },
  {
    title: 'Feel Free: Essays',
    author: 'Zadie Smith',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/I/51NLFKhZnIL._SX327_BO1,204,203,200_.jpg',
    amazonUrl: 'https://www.amazon.com/dp/1594206252',
    price: 16.16
  },
  {
    title: 'There There: A novel',
    author: 'Tommy Orange',
    amazonImage: 'https://images-na.ssl-images-amazon.com/images/I/51RuAbKH%2BtL._SX326_BO1,204,203,200_.jpg',
    amazonUrl: 'https://www.amazon.com/dp/0525520376',
    price: 11.46
  }
];`}
              </pre>
                    </td>
                </tr>

                <tr>
                    <td>
                        Loop over an array to create a new array.<br/>
                        <b>map</b>
                    </td>
                    <td>
              <pre>
{`// using the books array above
var authors = [];
for (var i=0; i<books.length; i++) {
  authors.push(books[i].author);
};`}
              </pre>
                    </td>
                    <td>
              <pre>
{`// using the books array above
// full form:
const authors = books.map((book) => {
  return (
    book.author
  );
});

// abbreviated: one param doesn't require parentheses
//  and one line return doesn't require return(...) or curly braces
const authors = books.map(book =>
  book.author
);`}
              </pre>
                    </td>
                </tr>


                <tr>
                    <td>
                        Create an array that's a specified subset of another.<br/>
                        <b>filter</b>
                    </td>
                    <td>
              <pre>
{`// using the books array above, get all books that cost more than $10
var highPriceBooks = [];
for (var i=0; i<books.length; i++) {
  if (books[i].price > 10) {
    highPriceBooks.push(books[i]);
  }
};`}
              </pre>
                    </td>
                    <td>
              <pre>
{`// using the books array above
// full form:
const highPriceBooks = books.filter((book) => {
  return (
    book.price > 10
  );
});

// abbreviated:
const authors = books.filter(book =>
  book.price > 10
);`}
              </pre>
                    </td>
                </tr>

                <tr>
                    <td>
                        Concatenate arrays.<br/>
                        <b>spread operator</b>
                    </td>
                    <td>
              <pre>
{`var newbooks = ['Silver Spade', 'Tides of Gold', 'Iron Plume'];
var allbooks = ['Going Home', 'Frances'].concat(newbooks);
`}
              </pre>
                    </td>
                    <td>
              <pre>
{`let newbooks = ['Silver Spade', 'Tides of Gold', 'Iron Plume'];
let allbooks = ['Going Home', 'Frances', ...newbooks];
`}
              </pre>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Practice;