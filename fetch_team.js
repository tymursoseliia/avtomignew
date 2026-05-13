const https = require('https');
const fs = require('fs');

https.get('https://xn--80aedttl1a.com/team', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync('team_page.html', data);
    console.log('HTML saved to team_page.html');
  });
}).on('error', (err) => {
  console.log('Error: ', err.message);
});
