var arr = [
  {
    name: "Querty Watch",
    material: "Leather Strap",
    price: 12000,
    color: "Brown",
    addC: "delete",
  },
  {
    name: "Nike Shoes",
    material: "Sports Wear",
    price: 7000,
    color: "red black",
    addC: "delete",
  },
  ,
  {
    name: "Tshirts",
    material: "Cotton",
    price: 999,
    color: "White",
    addC: "delete",
  },
];

const signIn = document.querySelector(".signIn");
const InputName = document.querySelector("#InputName");
const Password = document.querySelector("#InputPassword");
const Loginbtn = document.querySelector(".btnS");
const LoginbtnS = document.querySelector(".btnL");

const Cart = document.querySelector(".Cart");
const Login = document.querySelector(".Login");
const switchL = document.querySelector(".switchL");
const switchS = document.querySelector(".switchS");
const InputNameV = document.querySelector("#InputNameV");
const PasswordV = document.querySelector("#InputPasswordV");
const ttl = document.querySelector("#ttl");

//SignUp Functionality

Loginbtn.addEventListener("click", () => {
  if (InputName.value.trim().length > 0 && Password.value.trim().length > 0) {
    // alert("Login successful");
    localStorage.setItem("name", InputName.value);
    localStorage.setItem("password", Password.value);
    // window.location.href = "index.html";
    // signIn.style.display = "none";
    // Cart.style.display = "initial";
  } else {
    alert("Login failed");
  }
});

//Login Functionality
LoginbtnS.addEventListener("click", () => {
  const name = localStorage.getItem("name");
  const password = localStorage.getItem("password");
  // console.log("name " + name, "Password " + password);
  if (InputNameV.value == name && PasswordV.value == password) {
    // alert("Login successful");
    // window.location.href = "index.html";
    // signIn.style.display = "none";
    // Cart.style.display = "initial";
  } else {
    alert("User Doesn't Exists");
  }
});

//Switch Pages

switchL.addEventListener("click", () => {
  signIn.style.display = "none";
  Login.style.display = "initial";
});
switchS.addEventListener("click", () => {
  signIn.style.display = "initial";
  Login.style.display = "none";
});


var clutter = ``;
arr.forEach((item, i) => {
  console.log(i);
  clutter += `
  <div id='Item${i}'>
    <div class="Item1Img">
        <img src="https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/2fdbd7ab-f378-4c63-8b21-c944ad2633fd/header_t-shirts2.jpg" alt="">
        <div class="capsule">
            <div class="left"><i class="ri-subtract-line" id="sub"></i></div>
            <h3>1</h3>

            <div class="right"><i class="ri-add-circle-line" id="add"></i></div>
        </div>
    </div>

<div class="Item">
    <h2>${item.name}</h2>
    <h3>${item.material}</h3>
    <h5 style="font-size: 15px; margin-top: 3px;">₹${item.price}</h5>
    <small style="font-weight: 900; font-size: 15px;">Color: <span style="font-weight: 500; ">${item.color}</span></small>
   
    <span style="color: skyblue; font-family: serif; ">In Stock</span>
    <br>
    <button id="delete${i}">delete</button>
    <button id="SeeMore${i}" ">See More Like These</button>
 

 </div>
</div>


  `;
  document.querySelector(".Items").innerHTML = clutter;
});




// Add to Cart Feature
var counter = 0;
var flag0 = true;
const Item1 = document.querySelector("#delete0");
const Item2 = document.querySelector("#delete1");
const Item3 = document.querySelector("#delete3");
Item1.addEventListener("click", () => {
  if (flag0 == false) {
    Item1.innerHTML = "delete";
    console.log(Item1.value);
    counter=arr[0].price;

    flag0 = true;
  } else {
    Item1.innerHTML = "add";
    // counter=counter+arr[0].price;
    flag0 = false;
  }
});
var flag1 = true;
Item2.addEventListener("click", () => {
  if (flag1 == false) {
    Item2.innerHTML = "delete";
    flag1 = true;
  } else {
    Item2.innerHTML = "add";
    flag1 = false;
  }
});
var flag2 = true;
Item3.addEventListener("click", () => {
  if (flag2 == false) {
    Item3.innerHTML = "delete";
    flag2 = true;
    alert(arr[2].price);
  } else {
    Item3.innerHTML = "add";
    flag2 = false;
  }
});

Item1.addEventListener("click", () => {
  if (flag0 == false) {
    counter = counter + Number(arr[0].price);
    console.log(counter);
  } else {
    counter = counter - Number(arr[0].price);
  }
  ttl.innerHTML = "Total: " + counter;
});
Item2.addEventListener("click", () => {
  if (flag1 == false) {
    counter = counter + Number(arr[1].price);
  } else {
    counter = counter - Number(arr[1].price);
  }
  ttl.innerHTML = "Total: " + counter;
});
Item3.addEventListener("click", () => {
  if (flag2 == false) {
    counter = counter + Number(arr[3].price);
  } else {
    counter = counter - Number(arr[3].price);
  }
  ttl.innerHTML = "Total: " + counter;
}
);

ttl.innerHTML = "Total: " + counter;
