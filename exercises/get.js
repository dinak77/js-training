'use strict'

/*
 * Create a `get` function that takes a key and return the corresponding value
 * in the sourceObject
 *
 * @notions Functions, Data-Structures, Get
 */

// Provided code :

const str = 'some text'
const num = 42
const bool = true
const log = console.log
   let noexist

const obj = ({
  'str': str,
  'num': num,
  'bool': bool,
  'noexist': noexist,
  'log': log,
});

const get = (a) => {

  return obj[a]

};

// Your code :

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof get, 'function')
assert.strictEqual(get('num'), 42)
assert.strictEqual(get('bool'), true)
assert.strictEqual(get('str'), 'some text')
assert.strictEqual(get('log'), console.log)
assert.strictEqual(get('noexist'), undefined)
// End of tests */
