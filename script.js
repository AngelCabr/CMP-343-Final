
/* step3 */
const rootDiv = document.getElementById('root');


/*step 4*/
function renderSignUp() {
    rootDiv.innerHTML = `
    <h1>Sign Up</h1>
    <form id="signupForm">
    <label for="name">Code</label>
    <input type="text" id="name" placeholder="Enter the Code"><br>

    <button type="button" onclick="handleSignUp()">Sign Up</button>
    </form>
    `;
}
/* step 5*/
let userName = ''
function handleSignUp() {
    const nameInput = document.getElementById('name').value;
 
    if (nameInput) {
        userName = nameInput; // Store the user's name in a global variable
        renderHomePage(); // Move to the next step in the app
    } else {
        alert('Please fill out all fields');
    }
}


/* step6 */
function renderHomePage() {
    rootDiv.innerHTML = `
    <div class="middle">
        <h1 class="ww">You inputted ${userName}</h1>
        <a href="HTMLPage2.html">
        <h2>That's crazy</h2>
        <a>
        
        </div>
        `;
        
}


function postModification() {



    
}



renderSignUp();







