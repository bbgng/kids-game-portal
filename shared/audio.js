let _ctx = null;
function getAudioContext() {
  if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (_ctx.state === "suspended") _ctx.resume();
  return _ctx;
}
function playNote(frequency, duration = 0.45, type = "triangle") {
  const ctx = getAudioContext();
  const osc = ctx.createOscillator(), gain = ctx.createGain();
  osc.connect(gain); gain.connect(ctx.destination);
  osc.type = type;
  osc.frequency.setValueAtTime(frequency, ctx.currentTime);
  gain.gain.setValueAtTime(0.55, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.start(ctx.currentTime); osc.stop(ctx.currentTime + duration);
}
function playCelebration() {
  const ctx = getAudioContext();
  [523.25, 659.25, 783.99, 1046.50].forEach((f, i) => {
    const osc = ctx.createOscillator(), gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = "triangle";
    const t = ctx.currentTime + i * 0.13;
    osc.frequency.setValueAtTime(f, t);
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.5, t + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);
    osc.start(t); osc.stop(t + 0.5);
  });
}
