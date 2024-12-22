

const rootDiv = document.getElementById('root');



function renderSignUp() {
    rootDiv.innerHTML = `
    <h1>Sign Up</h1>
    <form id="signupForm">
   
    <input type="text" id="name" placeholder="Enter the Code"><br>

    <button type="button" onclick="handleSignUp()">Sign Up</button>
    </form>
    `;
}

let userName = ''
function handleSignUp() {
    const nameInput = document.getElementById('name').value;
 
    if (nameInput) {
        userName = nameInput; // Store the user's name in a global variable
       
        renderHomePage(); // Move to the next step in the app
    } else {
        
        alert("wrong code");
    }
}



function renderHomePage() {
    rootDiv.innerHTML = `
    <div class="middle">
        <h1 class="ww">You inputted ${userName}</h1>
        <a href="HTMLPage2.html">
        <h2>That's crazy</h2>
        <img src="">
        <a>
        
        </div>
        `;
        
}


function postModification() {



    
}



renderSignUp();







