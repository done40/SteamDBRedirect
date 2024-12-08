if (window.location.hostname !== "steamdb.info") {
  const newUrl = "https://steamdb.info" + window.location.pathname + window.location.search + window.location.hash;
  window.location.replace(newUrl);
}
