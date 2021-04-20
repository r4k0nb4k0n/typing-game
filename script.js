const bgvids = document.querySelectorAll("video");
const enter_input = document.getElementById("enter-input");
const middle = document.getElementsByClassName("middle")[0];
const blocked_keycode = [
  "Page Up",
  "Page Down",
  "End",
  "Home",
  "Arrow Left",
  "Arrow Up",
  "Arrow Down",
  "Arrow Right",
  "Tab",
  "Shift",
];

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
  if (blocked_keycode.includes(e.code)) {
    e.preventDefault();
  } else if (e.code === "Enter") {
    e.preventDefault();
    if (enter_input.innerText === "Typing game") alert("Typing game entered.");
    else {
      const backup = middle.className;
      middle.className = backup + " shake error";
      let timer = setTimeout(() => {
        middle.className = backup;
        clearTimeout(timer);
      }, 500);
    }
  }
}
enter_input.onkeydown = handle_enter_input;
enter_input.focus();
