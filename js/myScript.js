var selectedOption = null;
var iphone11disc = `The iPhone 11 is a smartphone designed, developed, and marketed by Apple Inc. It is the thirteenth
 generation lower-priced iPhone, succeeding the iPhone XR. It was unveiled on September 10, 2019, alongside the higher-end
  iPhone 11 Pro flagship at the Steve Jobs Theater in Apple Park, Cupertino by Apple CEO Tim Cook. Pre-orders began on 
  September 13, 2019, and the phone was officially released on September 20, 2019, one day after the official public release
   of iOS 13.`;
var iphonexrdisc = `iPhone XR (stylized and marketed as iPhone Xʀ; Roman numeral "X" pronounced "ten")[14][15] 
is a smartphone designed and manufactured by Apple Inc. It is the twelfth generation of the iPhone. It was announced 
by Phil Schiller on September 12, 2018, at the Steve Jobs Theater in the Apple Park campus, alongside the higher-priced 
iPhone XS and XS Max.`
var iphonexsmax = `The XS Max was the first plus-sized iPhone to have the newer bezel-less form factor, 
as the iPhone X did not have a larger variant. On release the XS and XS Max had starting prices of $999/$1099 
in the US,£999/£1099 in the UK, €1149/€1249 in Europe`;
function loaddata(button) {
   selectedOption = button.value;
   if (selectedOption == "1") {
    document.getElementById("iphonexs").src = "images/iphone11.png" 
    document.getElementById("chgtext").innerHTML = iphone11disc;
  } 
  
  else if (selectedOption == "2") {
    document.getElementById("chgtext").innerHTML = iphonexrdisc;
    document.getElementById("iphonexs").src = "images/iphonexr.png"
  } 
  
  else if (selectedOption == "3") {
    document.getElementById("iphonexs").src = "images/iphonexsmax.png"
  }
 }

  