
function User() {
      this.id = 'Unknown';
      this.name = 'Unknown';
      this.email = 'Unknown';
      this.location = 'Unknown';
      this.state = 'Unknown';
}

function processFile(inputFile) {
    var fs = require('fs');
    var myUserList = [];

    fs.readFileSync(inputFile).toString().match(/^.+$/gm).forEach(function (line) {
      var splitter = line.split('=');
      var userRead = new User();
      userRead.name = splitter[6].split('\/')[0];
      userRead.email = splitter[8];
      userRead.location = splitter[3].split('\/')[0];
      if (/^V/.test(line) == true) {
        console.log('Valid');
        userRead.state = 'Valid';
      }
      else if(/^R/.test(line) == true) {
        userRead.state = 'Revoked';
      }
      userRead.id = splitter[0].split(' ')[7];
      myUserList.push(userRead);

    });
    return myUserList;
}

exports.User = User;
exports.processUserFile = processFile;
