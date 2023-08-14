var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];
var list8 = [];

var n = 1;
var x = 0;

function AddRow() {
  var AddRown = document.getElementById("show");
  var NewRow = AddRown.insertRow(n);

  list1[x] = document.getElementById("date").value;
  list2[x] = document.getElementById("time").value;
  list3[x] = document.getElementById("slA").value;
  list4[x] = document.getElementById("slC").value;
  list5[x] = document.getElementById("fA").value;
  list6[x] = document.getElementById("fC").value;
  list7[x] = document.getElementById("iF").value;
  list8[x] = document.getElementById("duration").value;

  var i1 = list3[x] * 14;
  var i2 = list4[x] * 7;
  var i3 = list5[x] * 33;
  var i4 = list6[x] * 18;
  var i5 = list7[x] * 33;
  var i6 = list7[x] * 16;
  var i7 = list7[x] * 0;
  let array = [i1, i2, i3, i4, i5, i6, i7];

  let sum = array.reduce(function(a, b) {
    return a + b;
  });

  var cel1 = NewRow.insertCell(0);
  var cel2 = NewRow.insertCell(1);
  var cel3 = NewRow.insertCell(2);
  var cel4 = NewRow.insertCell(3);
  var cel5 = NewRow.insertCell(4);
  var cel6 = NewRow.insertCell(5);
  var cel7 = NewRow.insertCell(6);
  var cel8 = NewRow.insertCell(7);
  var cel9 = NewRow.insertCell(8); // Add this line

  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel8.innerHTML = list8[x];
  cel3.innerHTML = i1;
  cel4.innerHTML = i2;
  cel5.innerHTML = i3;
  cel6.innerHTML = i4;
  cel7.innerHTML = i5;
  cel9.innerHTML = sum; // Update this line with the correct cell variable
  n++;
  x++;
}
