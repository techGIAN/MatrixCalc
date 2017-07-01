var a, b, c, d, e, f, g, h, i;
var cof11, cof12, cof13, cof21, cof22, cof23, cof31, cof32, cof33;

function calculate() {
  a = document.getElementById("a");
  b = document.getElementById("b");
  c = document.getElementById("c");
  d = document.getElementById("d");
  e = document.getElementById("e");
  f = document.getElementById("f");
  g = document.getElementById("g");
  h = document.getElementById("h");
  i = document.getElementById("i");

  cofMatrix(a.value,b.value,c.value,d.value,e.value,f.value,g.value,h.value,i.value);
  detMatrix();
}

function det(arr) {
  return arr[0]*arr[3] - arr[2]*arr[1];
}

function clearField() {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("c").value = "";
  document.getElementById("d").value = "";
  document.getElementById("e").value = "";
  document.getElementById("f").value = "";
  document.getElementById("g").value = "";
  document.getElementById("h").value = "";
  document.getElementById("i").value = "";

  document.getElementById("a1").value = "";
  document.getElementById("b1").value = "";
  document.getElementById("c1").value = "";
  document.getElementById("d1").value = "";
  document.getElementById("e1").value = "";
  document.getElementById("f1").value = "";
  document.getElementById("g1").value = "";
  document.getElementById("h1").value = "";
  document.getElementById("i1").value = "";

  document.getElementById("a2").value = "";
  document.getElementById("b2").value = "";
  document.getElementById("c2").value = "";
  document.getElementById("d2").value = "";
  document.getElementById("e2").value = "";
  document.getElementById("f2").value = "";
  document.getElementById("g2").value = "";
  document.getElementById("h2").value = "";
  document.getElementById("i2").value = "";

  document.getElementById("det").innerHTML = 0;
}

function detMatrix() {
  var determinant = cof11*a.value + cof12*b.value + cof13*c.value;

  document.getElementById("det").innerHTML = determinant;
}

function cofMatrix(a, b, c, d, e, f, g, h, i) {
   cof11 = det(getMinor(1,1));
   cof12 = -1*det(getMinor(1,2));
   cof13 = det(getMinor(1,3));
   cof21 = -1*det(getMinor(2,1));
   cof22 = det(getMinor(2,2));
   cof23 = -1*det(getMinor(2,3));
   cof31 = det(getMinor(3,1));
   cof32 = -1*det(getMinor(3,2));
   cof33 = det(getMinor(3,3));

  document.getElementById("a1").value = cof11;
  document.getElementById("b1").value = cof12;
  document.getElementById("c1").value = cof13;
  document.getElementById("d1").value = cof21;
  document.getElementById("e1").value = cof22;
  document.getElementById("f1").value = cof23;
  document.getElementById("g1").value = cof31;
  document.getElementById("h1").value = cof32;
  document.getElementById("i1").value = cof33;

  document.getElementById("a2").value = cof11;
  document.getElementById("b2").value = cof21;
  document.getElementById("c2").value = cof31;
  document.getElementById("d2").value = cof12;
  document.getElementById("e2").value = cof22;
  document.getElementById("f2").value = cof32;
  document.getElementById("g2").value = cof13;
  document.getElementById("h2").value = cof23;
  document.getElementById("i2").value = cof33;
}

function getMinor(m, n) {
  var minor = [];
  if (m === 1 && n === 1) minor = [e.value,f.value,h.value,i.value];
  if (m === 1 && n === 2) minor = [d.value,f.value,g.value,i.value];
  if (m === 1 && n === 3) minor = [d.value,e.value,g.value,h.value];
  if (m === 2 && n === 1) minor = [b.value,c.value,h.value,i.value];
  if (m === 2 && n === 2) minor = [a.value,c.value,g.value,i.value];
  if (m === 2 && n === 3) minor = [a.value,b.value,g.value,h.value];
  if (m === 3 && n === 1) minor = [b.value,c.value,e.value,f.value];
  if (m === 3 && n === 2) minor = [a.value,c.value,d.value,f.value];
  if (m === 3 && n === 3) minor = [a.value,b.value,d.value,e.value];

  return minor;
}
