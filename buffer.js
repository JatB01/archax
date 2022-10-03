/* Write a script that will encode the following information
sequentially in a JavaScript `Buffer`. No need to include field
metadata, assume the consumer/decoder is aware of the offsets to
use and can parse enum values. Make sure to select data types that
are optimized for payload size, but can adequately express all
possible values given the length and data type: `symbol`: utf-8
string up to 4 characters, `price`: unsigned 64-bit integer,
`quantity`: unsigned 64-bit integer, `side`: enum buy | sell,
`type`: enum limit | market */

/*Write a script that will decode the `Buffer` you generated from
question 5, and return an object with fields as described in the
question.*/

const createBuffer = (obj) => {
  if (typeof obj !== 'object') throw new Error('Data must be an object')
  const { symbol, price, quantity, side, type } = obj

  if (!symbol) throw new Error('Missing key: "symbol"')
  if (!price) throw new Error('Missing key: "price"')
  if (!quantity) throw new Error('Missing key: "quantity"')
  if (!side) throw new Error('Missing key: "side"')
  if (!type) throw new Error('Missing key: "type"')
  if (typeof symbol !== 'string') throw new Error('"symbol" must be a string')
  if (typeof price !== 'number') throw new Error('"price" must be numeric')
  if (typeof quantity !== 'number') throw new Error('"quantity" must be numeric')
  if (typeof side !== 'string') throw new Error('"side" must be a string')
  if (typeof type !== 'string') throw new Error('"type" must be a string')
  if (symbol.length > 4) throw new Error('"symbol" cannot exceed 4 characters')
  if (price % 1 !== 0) throw new Error('"price" must be a whole number')
  if (quantity % 1 !== 0) throw new Error('"quantity" must be a whole number')
  if (!(side.toLowerCase() === 'buy' || side.toLowerCase() === 'sell')) {
    throw new Error('"side" must have a value of either "buy" or "sell"')
  }
  if (!(type.toLowerCase() === 'market' || side.toLowerCase() === 'limit')) {
    throw new Error('"type" must have a value of either "market" or "limit"')
  }

  const object = { symbol, price: price.toString(), quantity: quantity.toString(), side: side.toLowerCase(), type: type.toLowerCase() }
  const buffer = Buffer.from(JSON.stringify(object))
  return buffer
}

const decodeBuffer = (buffer) => {
  const object = JSON.parse(buffer.toString())
  object.price = parseInt(object.price)
  object.quantity = parseInt(object.quantity)
  return object
}

const obj = {symbol: 'BTC', price: 20000, quantity: 2, side: 'buy', type: 'market'}
console.log('Object to buffer:', obj)
const buffer = createBuffer(obj)
console.log('Buffer created:', buffer)
const decoded = decodeBuffer(buffer)
console.log('Decoded buffer', decoded)

