function addContact(){

    let names = document.getElementById("name").value;
    let emails = document.getElementById("email").value;
    let commentforms = document.getElementById("commentform").value;

    let newContact= {
        name: names,
        email: emails,
        comment: commentforms,

    }
    console.log(newContact)

}