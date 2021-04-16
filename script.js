const bgvids = [
  document.getElementById("bgvid1"),
  document.getElementById("bgvid2"),
  document.getElementById("bgvid3"),
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
