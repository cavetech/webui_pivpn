


function User() {
      this.id = 'Unknown';
      this.name = 'Unknown';
      this.state = 'Unknown';
}


function addUser(user, callback) {
    console.log(user)
    var nexpect = require('nexpect');
    nexpect.spawn('sudo bash /opt/pivpn/makeOVPN.sh',  { verbose: true })
      .wait("Enter a Name for the Client:  ")
      .sendline(user.name)
      .wait("Enter the password for the client:  ")
      .sendline(user.passwd)
      .wait("Enter the password again to verify:  ")
      .sendline(user.passwd)
      .run(function (stdout, err) {
        console.log(stdout);
        callback();
        if (!err) {
          console.log("User Created, process exited");
        }
        else {
          console.log(err)
        }
      });
    
    // spawn = require( 'child_process' ).spawn;
    // ls = spawn( 'bash', [ './api/app/models/addUser.sh', user.name, user.passwd ] );

<<<<<<< HEAD
    // ls.stdout.on( 'data', data => {
    //     console.log( `stdout: ${data}` );
    // });
    
    // ls.stderr.on( 'data', data => {
    //     console.log( `stderr: ${data}` );
    // });
    
    // ls.on( 'close', code => {
    //     console.log( `child process exited with code ${code}` );
    // });
    //     expect "Enter a Name for the Client:  " { send "${NAME}\r" }
    // expect "Enter the password for the client:  " { send "${PASSWD}\r" }
    // expect "Enter the password again to verify:  " { send "${PASSWD}\r" }
    
    
=======
    ls.stdout.on( 'data', data => {
        console.log( `stdout: ${data}` );
    });

    ls.stderr.on( 'data', data => {
        console.log( `stderr: ${data}` );
    });

    ls.on( 'close', code => {
        console.log( `child process exited with code ${code}` );
    });
>>>>>>> 1bb688908bc125355cd4fa0a081e23d5cf5d9058
}

function updateUser(userName, callback) {
    var nexpect = require('nexpect');
    nexpect.spawn('sudo bash /opt/pivpn/removeOVPN.sh',  { verbose: true })
      .wait("::: Please enter the Name of the client to be revoked from the list above:")
      .sendline(userName)
      .run(function (stdout, err) {
        console.log(stdout);
        callback();
        if (!err) {
          console.log("revoked (or not), process exited");
        }
        else {
          console.log(err)
        }
      });
}

function processFile(inputFile) {
    var fs = require('fs');
    var myUserList = [];

    fs.readFileSync(inputFile).toString().match(/^.+$/gm).forEach(function (line) {
      var splitter = line.split('=');
      var userRead = new User();
      userRead.name = splitter[6].split('\/')[0];
      if (/^V/.test(line) == true) {
        console.log('Valid');
        userRead.state = 'Valid';
      }
      else if(/^R/.test(line) == true) {
        userRead.state = 'Revoked';
      }
      console.log(splitter[0].split(' '));
      userRead.id = splitter[0].split('\t')[1];
      myUserList.push(userRead);

    });
    return myUserList;
}

exports.User = User;
exports.processUserFile = processFile;
exports.updateUser = updateUser;
exports.addUser = addUser;
