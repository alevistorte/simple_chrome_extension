async function sendToAPI() {
  const myButton = document.getElementById("myButton");

  // Getting the URL of the current tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    document.getElementById("urlTag").innerText = tabs[0].url;
  });

  myButton.addEventListener("click", async function () {
    const folder = document.getElementById("folderName");
    let currentUrl = document.getElementById("urlTag");

    const options = {
      method: "POST",
      header: {
        "Content-Type": "text/html",
      },
      body: JSON.stringify({
        data: {
          collection: folder.value,
          url: currentUrl.textContent,
        },
      }),
    };

    const url = "http://localhost:8000/actions/saveItem/";
    const response = await fetch(url, options);
    if (response.ok) {
      document.getElementById("tag").innerHTML = "Save successfully";
    } else {
      document.getElementById(
        "tag"
      ).innerText = `Error ${response.status}: ${response.statusText}`;
    }
  });
}

sendToAPI();
