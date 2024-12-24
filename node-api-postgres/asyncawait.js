import pg from 'pg'
const { Client } = pg
const client = new Client()
await client.connect()
 
const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end()

import pg from 'pg'
const { Client } = pg
const client = new Client()
await client.connect()
 
try {
   const res = await client.query('SELECT $1::text as message', ['Hello world!'])
   console.log(res.rows[0].message) // Hello world!
} catch (err) {
   console.error(err);
} finally {
   await client.end()
}


import pg from 'pg'
const { Client } = pg
const client = new Client()
 
client.connect((err) => {
   client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
     console.log(err ? err.stack : res.rows[0].message) // Hello World!
     client.end()
   })
})