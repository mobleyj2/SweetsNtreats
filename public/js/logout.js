// add fuctionality to logout button

document.getElementById("logout").addEventListener("click", function() {
    fetch("/api/users/logout", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        }
    }).then(function() {
        document.location.replace("/");
    });
    }
);

