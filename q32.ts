let greetUsers:string[]=["insia","murtaza","asma","sakina","idrees"];
let greetUsers1:string[]=["admin","ramsha","sofia","insia","anum"];
greetUsers1.forEach(greetUser1 => {
    if (greetUsers.some(greetUser =>greetUser.toLowerCase()=== greetUser1.toLowerCase()))
        {
        console.log("This userId already exists");
    }
    else {
        console.log("This UserId is avialable.\nEnter New Password.");
    }
})
