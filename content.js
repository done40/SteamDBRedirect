function createNotification() {
  const notification = document.createElement("div");
  notification.classList.add("steamdb-redirect-notification");

  const checkmark = document.createElement("span");
  checkmark.textContent = "✔️";
  checkmark.classList.add("checkmark");
  notification.appendChild(checkmark);

  const message = document.createElement("span");
  message.textContent = "You have been redirected to steamdb.info 👍";
  message.classList.add("message");
  notification.appendChild(message);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", createNotification);
} else {
  createNotification();
}
