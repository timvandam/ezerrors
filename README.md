# ezerrors
Easily generate custom Error classes

```javascript
const { CustomError, OtherError } = require('ezerrors')

const myError = new CustomError('Something went wrong!')
const myOtherError = new OtherError('Another error')

myError instanceof require('ezerrors').CustomError // true
myError instanceof myOtherError // false

```
