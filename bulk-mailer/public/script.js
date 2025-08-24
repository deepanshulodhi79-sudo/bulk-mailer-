function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      window.location.href = "launcher.html";
    } else {
      document.getElementById("msg").innerText = "Invalid login!";
    }
  });
}

function sendMail() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const recipients = document.getElementById("recipients").value;

  const btn = document.getElementById("sendBtn");
  btn.classList.add("sending");
  btn.innerText = "Sending...";

  fetch("/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, pass, subject, message, recipients })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      btn.classList.remove("sending");
      btn.classList.add("success");
      btn.innerText = "Sent!";
      alert("Mails sent successfully!");
      setTimeout(() => {
        btn.classList.remove("success");
        btn.innerText = "Send Mails";
      }, 2000);
    } else {
      btn.classList.remove("sending");
      btn.classList.add("error");
      btn.innerText = "Error";
      alert("Error: " + data.error);
      setTimeout(() => {
        btn.classList.remove("error");
        btn.innerText = "Send Mails";
      }, 2000);
    }
  });
}
