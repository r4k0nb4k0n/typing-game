const bgvids = document.querySelectorAll("video");
const enter_input = document.getElementById("enter-input");
const middle = document.getElementsByClassName("middle")[0];
const intro_dummy = document.getElementById("intro-dummy");
const intro_desc = document.getElementById("intro-desc");
const quote_para = document.getElementById("quote-para");
const on_desc = document.getElementById("on-desc");
const finished_desc = document.getElementById("finished-desc");
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
let idx = 0;
let game_start_time = null;
let game_end = null;
let game_elapsed_time = null;

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
    if (idx >= quotes.length && enter_input.innerText === "Retry") retry();
    else if (idx < quotes.length && enter_input.innerText === quotes[idx]) {
      if (idx === 0) start_game();
      if (idx < quotes.length - 1) quote_para.innerText = quotes[idx + 1];
      else end_game();
      enter_input.innerText = "";
      idx += 1;
    } else {
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

function retry() {
  intro_dummy.style.display = "";
  intro_desc.style.display = "";
  quote_para.style.display = "none";
  on_desc.style.display = "none";
  finished_desc.style.display = "none";
  idx = 0;
  enter_input.innerText = "";
}

function start_game() {
  intro_dummy.style.display = "none";
  intro_desc.style.display = "none";
  quote_para.style.display = "";
  on_desc.style.display = "";
  game_start_time = new Date();
}

function end_game() {
  game_end_time = new Date();
  game_elapsed_time = game_end_time.getTime() - game_start_time.getTime();
  game_elapsed_time /= 1000.0;
  quote_para.innerHTML = `🎉 You finished in <code>${game_elapsed_time}</code> seconds.`;
  on_desc.style.display = "none";
  finished_desc.style.display = "";
}
