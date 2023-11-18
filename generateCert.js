const selfsigned = require('selfsigned');
const fs = require('fs');

const attrs = [{ name: 'commonName', value: 'localhost' }];
const pems = selfsigned.generate(attrs, { days: 365 });

fs.writeFileSync('server.key', pems.private);
fs.writeFileSync('server.crt', pems.cert);

console.log('SSL certificate and key files generated successfully.');
