/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector(".cards")
axios.get("https://api.github.com/users/timgill987")
.then(response => {
  console.log(response.data);
  githubCardCreator(response.data)
})
.catch ( error => {
    console.log('Error:', error);
})
/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tomas395', 'davebettswebdev', 'alexandercsierra', 'NathanNNguyen', 'nicbongo'];

  followersArray.forEach(item => {
    axios.get(`https://api.github.com/users/${item}`)
    .then(response =>{
    const newCard = githubCardCreator(response.data);
    // const bananas = document.querySelector('.cards');
    cards.appendChild(newCard);

  })
    })




/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>


*/
// const entryPoint = document.querySelector(".cards");
function githubCardCreator(object) {


  const card = document.createElement("div");
  const userImage = document.createElement("img");
  const cardInfoDiv = document.createElement("div");
  const realName = document.createElement("h3");
  const userName = document.createElement("p");
  const userLocation = document.createElement("p");
  const profile = document.createElement("p");
  const profLink = document.createElement("a"); // <--- appends to the profile p tag
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const userBio = document.createElement("p");


  card.classList.add("card");
  cardInfoDiv.classList.add("card-info");
  realName.classList.add("name");
  userName.classList.add("username");

   profLink.href = object.html_url;
   profLink.textContent = object.html_url;
  followers.textContent = `Followers: ${object.followers}`;
  following.textContent = `Following: ${object.following}`;
  realName.textContent = `${object.name}`;
  userName.textContent = `Username: ${object.login}`;
  userBio.textContent = `Bio: ${object.bio}`;
  profile.textContent = `Profile: `;
  profLink.target = "_blank";
  userLocation.textContent = `Location: ${object.location}`;
  userImage.src = object.avatar_url;





  cards.appendChild(card);
  card.appendChild(userImage);
  card.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(realName);
  cardInfoDiv.appendChild(userName);
  cardInfoDiv.appendChild(userLocation);
  cardInfoDiv.appendChild(profile);
  cardInfoDiv.appendChild(followers);
  profile.appendChild(profLink);
  cardInfoDiv.appendChild(following);
  cardInfoDiv.appendChild(userBio);

  // array.forEach(data => {
    //   menuList = document.createElement('li');
  //   menuList.textContent = data;
  //   ul.appendChild(menuList);

  //   return menuList;
  // })
  return card;
}


/* List of LS Instructors Github username's:
tetondan
dustinmyers
  justsml
  luishrd
  bigknell
  */
