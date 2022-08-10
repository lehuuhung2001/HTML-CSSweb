var index = 0; // global variable

function submit() {
  console.log('btn Clicked');

  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let email = document.getElementById('email').value;
  let username = document.getElementById('username').value;
  // (document.getElementById('exampleInputPassword1').value);
  // let gender = layGioiTinh();
  // let _class = document.getElementById('exampleSelectClass').value;

  // let html = '<p><strong>First Name: </strong>' + firstName + '<p>';
  // let html = document.createElement('p');
  // html.append('<strong>First Name: </strong>'); // do luoi
  // document.body.append(html);

  // Create a row in table
  let rowElement = createRow(firstName, lastName, email, username);
  // Append the row into table of DOM
  let tableElement = document.getElementById('tbody');
  console.log(rowElement);
  tableElement.append(rowElement);
}

// Khai bao
// 1 Han, co the co gia tri tra ve hoac khong?
// neu co gia tri tra ve,
// Gia tri tra ve se duoc tra ve thong qua keyword 'return'
function layGioiTinh() {
  let nam = document.getElementById('flexRadioNam'); // Radio
  let nu = document.getElementById('flexRadioNu'); // Radio
  let chuaXacDinh = document.getElementById('flexRadioCXD'); // Radio

  if (nam.checked) {
    return 'Nam';
  }

  if (nu.checked) {
    return 'Nu';
  }

  if (chuaXacDinh.checked) {
    return 'Chua Xac Dinh';
  }
}

// tr ~ table row
// td ~ table data
function createRow(firstName, lastName, email, username) {
  let result;
  index+=1;

  let td_no = document.createElement('td');
  td_no.innerHTML = index;

  let td_firstName = document.createElement('td');
  td_firstName.innerHTML = firstName;

  let td_lastName = document.createElement('td');
  td_lastName.innerHTML = lastName;

  let td_email = document.createElement('td');
  td_email.innerHTML = email;

  let td_username = document.createElement('td');
  td_username.innerHTML = username;

  result = document.createElement('tr');
  result.append(td_no);
  result.append(td_firstName);
  result.append(td_lastName);
  result.append(td_email);
  result.append(td_username);

  return result;
}
