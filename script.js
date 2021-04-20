const bgvids = document.querySelectorAll("video");
const enter_input = document.getElementById("enter-input");

function bgvid_onended() {
  bgvids[bgvid_index].style.visibility = "hidden";
  bgvids[bgvid_index].currentTime = 0;
  bgvid_index = (bgvid_index + 1) % bgvids.length;
  bgvids[bgvid_index].play();
  bgvids[bgvid_index].style.visibility = "visible";
}

let bgvid_index = 0;
bgvids[bgvid_index].play();

function handle_enter_input(e) {
  if (e.code === "Enter") {
    e.preventDefault();
    alert("Enter key pressed");
  }
}
enter_input.onkeydown = handle_enter_input;
enter_input.focus();
