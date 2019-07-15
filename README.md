# Baltimore County Validation

Javascript validation helpers.

## Available Methods

### IsPhoneNumberValid

#### Usage
```javascript
import { IsPhoneNumberValid } from '@baltimorecounty/validation';

const isPhoneNumberValid = IsPhoneNumberValid("(111) 444-4444");
```

#### Valid Formats

- (123)456-7890
- (123) 456-7890
- 123-456-7890
- 123.456.7890
- 1234567890 (string and number)

## Installation

```js
npm i --save @baltimorecounty/validation
```

## Testing

Each method should be covered by one or more tests. To run tests use  `npm test`


## Updating the Package

1. After all unit tests pass, increment the package.json version accordingly
2. Run `npm publish`
