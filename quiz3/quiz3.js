const request = require('request');
const htmlTableToJson = require('html-table-to-json');

let htmlString = '';
let consoleString = '';
let funds = [];
request({
    headers: {
      'Cookie': 'hasCookie=true',
    },
    uri: 'http://codequiz.azurewebsites.net/',
    method: 'GET'
  }, function (err, res, body) {
    htmlString = res.body;
    consoleString = process.argv[2];
    const fundNames = tableToJson(htmlString);
    funds = fundNames.results[0];
    const outputFund = funds.filter((fund) => {
        return fund['Fund Name'] === consoleString;
    });
    console.log(outputFund[0].Nav);
  });


function tableToJson(data){
    const aData = htmlTableToJson.parse(data);
    return aData
}