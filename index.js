var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");

var db = firebase.database();

var dataRef = db.ref('lontong');

dataRef.on('value', showData, showError);

function showData(item){
  var _ul = document.getElementById('table');

  var _konten = '';
  var _judul = "<tr>";
  var _judul = "<td>Nama Depan</td>";
  var _judul = "<td>Nama Belakang</td>";
  var _judul = "</tr>";
  item.forEach(function(child){
    _konten += "<tr>";
    _konten += "<td>" + child.val().namaSatu + "</td>";
    _konten += "<td>" + child.val().namaDua + "</td>";
    _konten += "</tr>";
    console.log(child.val())
  })
  
  _ul.innerHTML = _judul + _konten;
  
}

function showError(err){
  console.log(err)
}

function inputKlik(){
    var test = firebase.database().ref();

   var namaPertama = firstName.value;
   var namaKedua = lastName.value;
   test.child("lontong").push().set({
      namaSatu : namaPertama,
      namaDua : namaKedua
    });
}