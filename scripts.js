// Retrieve elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//functionality
function togglePlay() {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

//update play button
function updateButton() {
	toggle.textContent = this.paused ? '►' : '❚ ❚';
}

//skip forward and back
function skip() {
	video.currentTime += parseFloat(this.dataset.skip);
}
//range update on volume and playback speed
function handleRangeUpdate() {
	video[this.name] = this.value;
}

//progress
function handleProgress() {
	const precent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${precent}%`;
}

//Event listeners
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
