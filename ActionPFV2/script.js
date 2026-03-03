// ===============================
// AUDIO SYSTEM - WEB AUDIO API
// FIX #3: AudioContext created lazily on first user interaction,
//         not at top level, to avoid browser autoplay policy warnings.
// ===============================

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

const sounds = {
  hit: () => {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.frequency.value = 100;
    oscillator.type = "square";
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.1);
  },
  combo: (count) => {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.frequency.value = 200 + count * 50;
    oscillator.type = "sine";
    gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.2);
  },
  heal: () => {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(400, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
      800,
      ctx.currentTime + 0.3,
    );
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.3);
  },
  damage: () => {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.type = "sawtooth";
    oscillator.frequency.value = 80;
    gainNode.gain.setValueAtTime(0.4, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.15);
  },
  achievement: () => {
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
      setTimeout(() => {
        const ctx = getAudioContext();
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);
        oscillator.frequency.value = freq;
        oscillator.type = "sine";
        gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 0.3);
      }, i * 100);
    });
  },
  godMode: () => {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.type = "sawtooth";
    oscillator.frequency.setValueAtTime(50, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
      1000,
      ctx.currentTime + 0.5,
    );
    gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.5);
  },
  warning: () => {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.frequency.value = 800;
    oscillator.type = "square";
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.setValueAtTime(0, ctx.currentTime + 0.1);
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime + 0.2);
    gainNode.gain.setValueAtTime(0, ctx.currentTime + 0.3);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.3);
  },
  critical: () => {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.type = "sawtooth";
    oscillator.frequency.setValueAtTime(200, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
      50,
      ctx.currentTime + 0.4,
    );
    gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.4);
  },
  reboot: () => {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(1000, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 1);
    gainNode.gain.setValueAtTime(0.4, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 1);
  },
  weaponSwitch: () => {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.type = "sine";
    oscillator.frequency.value = 600;
    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.1);
  },
};

function playSound(soundName, ...args) {
  try {
    if (sounds[soundName]) sounds[soundName](...args);
  } catch (e) {
    console.log("Audio error:", e);
  }
}

// ===============================
// CORE GAME STATE
// ===============================
let damageCount = 0;
const MAX_DAMAGE = 30;
let isInfected = false;
let godMode = false;

let comboCount = 0;
let comboTimer = null;
const COMBO_TIMEOUT = 1500;

const achievements = {
  firstBlood: {
    unlocked: false,
    title: "FIRST BLOOD",
    desc: "Clicked for the first time",
  },
  survivor: { unlocked: false, title: "SURVIVOR", desc: "Reached 10% health" },
  buttonMasher: {
    unlocked: false,
    title: "BUTTON MASHER",
    desc: "50 clicks total",
  },
  comboKing: {
    unlocked: false,
    title: "COMBO KING",
    desc: "Reached 10x combo",
  },
  healSeeker: {
    unlocked: false,
    title: "HEAL SEEKER",
    desc: "Collected a health pack",
  },
  konami: {
    unlocked: false,
    title: "CHEAT CODE MASTER",
    desc: "Discovered the Konami Code",
  },
  systemReboot: {
    unlocked: false,
    title: "SYSTEM REBOOT",
    desc: "Survived a system breakdown",
  },
};
let totalClicks = 0;

// ===============================
// KONAMI CODE
// FIX #2: Separated into its own named handler at capture phase.
//         Weapon keys (1-5) now only run in the bubbling-phase handler
//         below so they don't interfere with the Konami sequence index.
// ===============================
let konamiIndex = 0;
const konamiCode = ["a", "c", "t", "i", "o", "n"];

document.addEventListener(
  "keydown",
  (e) => {
    const key = e.key.toLowerCase();
    const expected = konamiCode[konamiIndex].toLowerCase();
    if (key === expected) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        activateGodMode();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  },
  true, // capture phase — runs before weapon handler
);

// ===============================
// VISUAL EFFECTS
// ===============================
function createBloodSplatter(x, y) {
  const splatter = document.createElement("div");
  splatter.className = "blood-splatter";
  splatter.style.left = x + "px";
  splatter.style.top = y + "px";
  splatter.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
  document.body.appendChild(splatter);
  setTimeout(() => splatter.remove(), 1000);
}

function createBloodParticles(x, y) {
  const particleCount = 8 + Math.floor(Math.random() * 8);
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "blood-particle";
    const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5);
    const distance = 50 + Math.random() * 100;
    const endX = x + Math.cos(angle) * distance;
    const endY = y + Math.sin(angle) * distance;
    particle.style.left = x + "px";
    particle.style.top = y + "px";
    particle.style.setProperty("--endX", `${endX - x}px`);
    particle.style.setProperty("--endY", `${endY - y}px`);
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 800);
  }
}

function shakeScreen() {
  const mainContent = document.getElementById("main-content");
  if (mainContent) {
    mainContent.classList.add("screen-shake");
    setTimeout(() => mainContent.classList.remove("screen-shake"), 200);
  }
}

function damageFlash() {
  const flash = document.createElement("div");
  flash.className = "damage-flash";
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 300);
}

function updateDamageCounter() {
  const counter = document.getElementById("damage-counter");
  const mainContent = document.getElementById("main-content");
  if (!counter || !mainContent) return;

  const health = MAX_DAMAGE - damageCount;
  const healthPercent = (health / MAX_DAMAGE) * 100;

  const healthBar = document.getElementById("health-bar");
  const healthText = document.getElementById("health-text");

  if (healthBar) healthBar.style.width = healthPercent + "%";
  if (healthText)
    healthText.textContent = `SYSTEM: ${Math.round(healthPercent)}%`;

  counter.classList.remove("critical", "warning", "danger");
  mainContent.classList.remove(
    "theme-warning",
    "theme-danger",
    "theme-critical",
  );

  if (healthPercent <= 25) {
    counter.classList.add("critical");
    mainContent.classList.add("theme-critical");
    document.documentElement.style.setProperty("--primary-color", "#ff0000");
    document.documentElement.style.setProperty(
      "--glow-color",
      "rgba(255, 0, 0, 0.5)",
    );
    document.documentElement.style.setProperty(
      "--glow-strong",
      "rgba(255, 0, 0, 0.8)",
    );
    playSound("critical");
  } else if (healthPercent <= 35) {
    counter.classList.add("danger");
    mainContent.classList.add("theme-danger");
    document.documentElement.style.setProperty("--primary-color", "#ff4400");
    document.documentElement.style.setProperty(
      "--glow-color",
      "rgba(255, 68, 0, 0.5)",
    );
    document.documentElement.style.setProperty(
      "--glow-strong",
      "rgba(255, 68, 0, 0.8)",
    );
  } else if (healthPercent <= 50) {
    counter.classList.add("warning");
    mainContent.classList.add("theme-warning");
    document.documentElement.style.setProperty("--primary-color", "#ffaa00");
    document.documentElement.style.setProperty(
      "--glow-color",
      "rgba(255, 170, 0, 0.5)",
    );
    document.documentElement.style.setProperty(
      "--glow-strong",
      "rgba(255, 170, 0, 0.8)",
    );
    playSound("warning");
  } else {
    document.documentElement.style.setProperty("--primary-color", "#00ff41");
    document.documentElement.style.setProperty(
      "--glow-color",
      "rgba(0, 255, 65, 0.5)",
    );
    document.documentElement.style.setProperty(
      "--glow-strong",
      "rgba(0, 255, 65, 0.8)",
    );
  }

  if (damageCount > 15 && damageCount < MAX_DAMAGE) createCorruptionParticles();
}

function applyInfectionEffects() {
  document.body.classList.add("infected");
  const glitchOverlay = document.createElement("div");
  glitchOverlay.className = "glitch-overlay";
  document.body.appendChild(glitchOverlay);
  for (let i = 0; i < 20; i++)
    setTimeout(() => createCorruptionVein(), i * 100);
}

function createCorruptionParticles() {
  const particle = document.createElement("div");
  particle.className = "corruption-particle";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.top = Math.random() * 100 + "%";
  particle.style.setProperty("--random", Math.random());
  particle.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), 5000);
}

function createCorruptionVein() {
  const vein = document.createElement("div");
  vein.className = "corruption-vein";
  const side = Math.floor(Math.random() * 4);
  switch (side) {
    case 0:
      vein.style.left = Math.random() * 100 + "%";
      vein.style.top = "0";
      break;
    case 1:
      vein.style.right = "0";
      vein.style.top = Math.random() * 100 + "%";
      break;
    case 2:
      vein.style.left = Math.random() * 100 + "%";
      vein.style.bottom = "0";
      break;
    case 3:
      vein.style.left = "0";
      vein.style.top = Math.random() * 100 + "%";
      break;
  }
  vein.style.transform = `rotate(${Math.random() * 360}deg)`;
  document.body.appendChild(vein);
  setTimeout(() => vein.remove(), 2000);
}

function systemBreakdown() {
  isInfected = true;
  playSound("reboot");
  const warning = document.createElement("div");
  warning.className = "system-warning";
  warning.innerHTML = `
    <div class="warning-content">
      <h1>⚠️ SYSTEM CRITICAL ⚠️</h1>
      <p>INFECTION DETECTED</p>
      <p>INITIATING EMERGENCY REBOOT...</p>
      <div class="countdown" id="countdown">3</div>
    </div>
  `;
  document.body.appendChild(warning);
  applyInfectionEffects();
  let countdown = 3;
  const countdownEl = document.getElementById("countdown");
  const countInterval = setInterval(() => {
    countdown--;
    if (countdownEl) countdownEl.textContent = countdown;
    playSound("warning");
    if (countdown <= 0) {
      clearInterval(countInterval);
      rebootSystem();
    }
  }, 1000);
}

function rebootSystem() {
  const flash = document.createElement("div");
  flash.className = "reboot-flash";
  document.body.appendChild(flash);
  unlockAchievement("systemReboot");
  setTimeout(() => location.reload(), 500);
}

// ===============================
// WEAPON-SPECIFIC EFFECTS
// ===============================
const hitTexts = [
  "BANG!",
  "POW!",
  "WHAM!",
  "CRITICAL!",
  "BOOM!",
  "SMASH!",
  "OUCH!",
  "ZAP!",
];

function createHitText(x, y, weaponType) {
  const text = document.createElement("div");
  text.className = "hit-text";
  let color = "#ff0000";
  if (weaponType === "laser") color = "#00ff00";
  else if (weaponType === "flamethrower") color = "#ff4400";
  else if (weaponType === "plasma") color = "#00ddff";
  else if (weaponType === "shotgun") color = "#ffaa00";
  text.style.color = color;
  text.style.textShadow = `0 0 10px ${color}`;
  text.textContent = hitTexts[Math.floor(Math.random() * hitTexts.length)];
  text.style.left = x + "px";
  text.style.top = y + "px";
  document.body.appendChild(text);
  setTimeout(() => text.remove(), 600);
}

function createDamageNumber(x, y, damage, weaponType) {
  const number = document.createElement("div");
  number.className = "damage-number";
  const finalDamage = damage * Math.max(1, Math.floor(comboCount / 5));
  number.textContent = `-${finalDamage}`;
  let color = "#ff0000";
  if (weaponType === "laser") color = "#00ff00";
  else if (weaponType === "flamethrower") color = "#ff4400";
  else if (weaponType === "plasma") color = "#00ddff";
  else if (weaponType === "shotgun") color = "#ffaa00";
  number.style.color = color;
  number.style.textShadow = `0 0 5px ${color}`;
  number.style.left = x + (Math.random() * 40 - 20) + "px";
  number.style.top = y + (Math.random() * 40 - 20) + "px";
  document.body.appendChild(number);
  setTimeout(() => number.remove(), 1000);
}

function createLaserBeam(x, y) {
  const beam = document.createElement("div");
  beam.className = "laser-beam";
  beam.style.left = x + "px";
  beam.style.top = y + "px";
  document.body.appendChild(beam);
  setTimeout(() => beam.remove(), 300);
}

function createFlameParticles(x, y) {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const particle = document.createElement("div");
      particle.className = "flame-particle";
      particle.style.left = x + "px";
      particle.style.top = y + "px";
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 800);
    }, i * 20);
  }
}

function createPlasmaEffect(x, y) {
  const effect = document.createElement("div");
  effect.className = "plasma-effect";
  effect.style.left = x + "px";
  effect.style.top = y + "px";
  document.body.appendChild(effect);
  setTimeout(() => effect.remove(), 500);
}

function createShotgunBuckshot(x, y) {
  for (let i = 0; i < 8; i++) {
    const buck = document.createElement("div");
    buck.className = "buckshot";
    buck.style.left = x + "px";
    buck.style.top = y + "px";
    const angle = (Math.PI * 2 * i) / 8 + (Math.random() - 0.5);
    const dist = 100 + Math.random() * 100;
    buck.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
    buck.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
    document.body.appendChild(buck);
    setTimeout(() => buck.remove(), 600);
  }
}

// ===============================
// COMBO & HEALTH
// ===============================
function incrementCombo() {
  comboCount++;
  updateComboUI();
  playSound("combo", comboCount);
  if (comboTimer) clearTimeout(comboTimer);
  comboTimer = setTimeout(() => {
    comboCount = 0;
    updateComboUI();
  }, COMBO_TIMEOUT);
  if (comboCount >= 10) unlockAchievement("comboKing");
}

function updateComboUI() {
  let comboUI = document.getElementById("combo-counter");
  if (comboCount > 0) {
    if (!comboUI) {
      comboUI = document.createElement("div");
      comboUI.id = "combo-counter";
      comboUI.className = "combo-counter";
      document.body.appendChild(comboUI);
    }
    const multiplier = Math.max(1, Math.floor(comboCount / 5));
    comboUI.innerHTML = `
      <span class="combo-number">${comboCount}</span>
      <div class="combo-label">COMBO</div>
      ${multiplier > 1 ? `<div class="combo-multiplier">x${multiplier} DAMAGE!</div>` : ""}
    `;
    comboUI.classList.add("active");
    setTimeout(() => comboUI.classList.remove("active"), 100);
  } else if (comboUI) {
    comboUI.remove();
  }
}

function spawnHealthPickup() {
  if (godMode || isInfected) return;
  const pickup = document.createElement("div");
  pickup.className = "health-pickup";
  const x = 100 + Math.random() * (window.innerWidth - 200);
  const y = 150 + Math.random() * (window.innerHeight - 300);
  pickup.style.left = x + "px";
  pickup.style.top = y + "px";
  pickup.addEventListener("click", (e) => {
    e.stopPropagation();
    // FIX #4: Use the pickup's getBoundingClientRect center for accurate
    //         heal text position instead of the raw left/top + 20 offset.
    const rect = pickup.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    collectHealthPickup(pickup, cx, cy);
  });
  document.body.appendChild(pickup);
  setTimeout(() => {
    if (pickup.parentElement) pickup.remove();
  }, 8000);
}

function collectHealthPickup(pickup, x, y) {
  const healAmount = 5;
  damageCount = Math.max(0, damageCount - healAmount);
  updateDamageCounter();
  playSound("heal");
  const healText = document.createElement("div");
  healText.className = "heal-text";
  healText.textContent = `+${healAmount} HP`;
  healText.style.left = x + "px";
  healText.style.top = y + "px";
  document.body.appendChild(healText);
  setTimeout(() => healText.remove(), 1500);
  unlockAchievement("healSeeker");
  pickup.remove();
  const flash = document.createElement("div");
  flash.style.cssText = `
    position: fixed; inset: 0;
    background: radial-gradient(circle at center, rgba(0, 255, 65, 0.3) 0%, transparent 70%);
    pointer-events: none; z-index: 9997;
    animation: flashFade 0.3s ease-out forwards;
  `;
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 300);
}

setInterval(checkHealthPickupSpawn, 5000);
function checkHealthPickupSpawn() {
  if (isInfected || godMode) return;
  const healthPercent = ((MAX_DAMAGE - damageCount) / MAX_DAMAGE) * 100;
  if (healthPercent < 50 && healthPercent > 0 && Math.random() < 0.3)
    spawnHealthPickup();
}

// ===============================
// GOD MODE
// ===============================
function activateGodMode() {
  if (godMode) return;
  godMode = true;
  document.body.classList.add("god-mode");
  playSound("godMode");
  const indicator = document.createElement("div");
  indicator.className = "god-mode-indicator";
  indicator.innerHTML = "⚡ GOD MODE ACTIVE ⚡";
  document.body.appendChild(indicator);
  damageCount = 0;
  updateDamageCounter();
  unlockAchievement("konami");
  createGodModeEffect();
}

function createGodModeEffect() {
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const particle = document.createElement("div");
      particle.style.cssText = `
        position: fixed; width: 10px; height: 10px;
        background: #ff00ff; border-radius: 50%;
        left: 50%; top: 50%;
        pointer-events: none; z-index: 9999;
        box-shadow: 0 0 20px #ff00ff;
      `;
      const angle = (Math.PI * 2 * i) / 50;
      const distance = 300;
      particle.style.animation = `particleFly 1s ease-out forwards`;
      particle.style.setProperty("--endX", `${Math.cos(angle) * distance}px`);
      particle.style.setProperty("--endY", `${Math.sin(angle) * distance}px`);
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 1000);
    }, i * 10);
  }
}

// ===============================
// ACHIEVEMENTS
// ===============================
function unlockAchievement(key) {
  if (!achievements[key] || achievements[key].unlocked) return;
  achievements[key].unlocked = true;
  playSound("achievement");
  const toast = document.createElement("div");
  toast.className = "achievement-toast";
  toast.innerHTML = `
    <div class="achievement-header">
      <span class="achievement-icon">🏆</span>
      <span>ACHIEVEMENT UNLOCKED</span>
    </div>
    <div class="achievement-title">${achievements[key].title}</div>
    <div class="achievement-desc">${achievements[key].desc}</div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

// ===============================
// WEAPON SYSTEM
// ===============================
const weapons = {
  pistol: { name: "PISTOL", damage: 1, icon: "🔫" },
  shotgun: { name: "SHOTGUN", damage: 3, icon: "💥" },
  laser: { name: "LASER", damage: 2, icon: "⚡" },
  flamethrower: { name: "FLAMETHROWER", damage: 2, icon: "🔥" },
  plasma: { name: "PLASMA", damage: 2, icon: "⚡" },
};
let currentWeapon = "pistol";

function switchWeapon(weaponName) {
  if (weapons[weaponName]) {
    currentWeapon = weaponName;
    updateWeaponUI();
    playSound("weaponSwitch");
  }
}

function updateWeaponUI() {
  let weaponUI = document.getElementById("weapon-ui");
  if (!weaponUI) {
    weaponUI = document.createElement("div");
    weaponUI.id = "weapon-ui";
    weaponUI.className = "weapon-ui";
    const nav = document.querySelector(".nav");
    if (nav) {
      nav.insertBefore(weaponUI, nav.querySelector(".resume-btn"));
    }
  }
  const weapon = weapons[currentWeapon];
  weaponUI.innerHTML = `<div class="weapon-icon">${weapon.icon}</div><div class="weapon-name">${weapon.name}</div>`;
}

// ===============================
// WEAPON SWITCHING VIA KEYBOARD
// FIX #2: Bubbling-phase listener (no capture flag) — runs after the
//         Konami capture listener so weapon keys don't reset konamiIndex.
// ===============================
const weaponKeys = {
  1: "pistol",
  2: "shotgun",
  3: "laser",
  4: "flamethrower",
  5: "plasma",
};

document.addEventListener("keydown", (e) => {
  if (weaponKeys[e.key]) {
    switchWeapon(weaponKeys[e.key]);
  }
  // NOTE: no capture:true here — this runs in bubbling phase
});

// ===============================
// MAIN CLICK HANDLER
// ===============================
function triggerBloodEffect(e) {
  if (isInfected) return;
  const x = e.clientX;
  const y = e.clientY;
  const weapon = weapons[currentWeapon];
  const weaponType = currentWeapon;

  if (weaponType === "laser") createLaserBeam(x, y);
  else if (weaponType === "flamethrower") createFlameParticles(x, y);
  else if (weaponType === "plasma") createPlasmaEffect(x, y);
  else if (weaponType === "shotgun") {
    createShotgunBuckshot(x, y);
    createBloodSplatter(x, y);
    createBloodParticles(x, y);
  } else {
    createBloodSplatter(x, y);
    createBloodParticles(x, y);
  }

  damageFlash();
  createHitText(x, y, weaponType);
  createDamageNumber(x, y, weapon.damage, weaponType);
  playSound("hit");

  totalClicks++;
  if (totalClicks === 1) unlockAchievement("firstBlood");
  if (totalClicks === 50) unlockAchievement("buttonMasher");

  incrementCombo();

  if (!godMode) {
    shakeScreen();
    damageCount += weapon.damage;
    playSound("damage");
    updateDamageCounter();
    const healthPercent = ((MAX_DAMAGE - damageCount) / MAX_DAMAGE) * 100;
    if (healthPercent <= 10 && healthPercent > 0) unlockAchievement("survivor");
    if (damageCount >= MAX_DAMAGE) systemBreakdown();
  } else {
    shakeScreen();
  }
}

// ===============================
// IMAGE GALLERY SYSTEM
// ===============================
const galleryModal = document.getElementById("image-gallery-modal");
const galleryImage = document.getElementById("gallery-image");
const currentImageEl = document.getElementById("current-image");
const totalImagesEl = document.getElementById("total-images");
const prevBtn = document.getElementById("prev-image");
const nextBtn = document.getElementById("next-image");
const closeGalleryBtn = document.getElementById("close-gallery");

let currentImageIndex = 0;
let galleryImages = [];
const TOTAL_IMAGES = 10;

function loadGalleryImages() {
  galleryImages = [];
  for (let i = 1; i <= TOTAL_IMAGES; i++) {
    galleryImages.push(`Content/MainProject1Zombie/MissionNest1 (${i}).png`);
  }
  if (totalImagesEl) totalImagesEl.textContent = TOTAL_IMAGES;
}

function openGallery() {
  loadGalleryImages();
  currentImageIndex = 0;
  updateGalleryImage();
  if (galleryModal) galleryModal.classList.add("active");
}

function closeGallery() {
  if (galleryModal) galleryModal.classList.remove("active");
  if (galleryImage) galleryImage.src = "";
}

function updateGalleryImage() {
  if (galleryImage) galleryImage.src = galleryImages[currentImageIndex];
  if (currentImageEl) currentImageEl.textContent = currentImageIndex + 1;
  if (prevBtn) prevBtn.disabled = currentImageIndex === 0;
  if (nextBtn)
    nextBtn.disabled = currentImageIndex === galleryImages.length - 1;
}

function showPrevImage() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    updateGalleryImage();
  }
}

function showNextImage() {
  if (currentImageIndex < galleryImages.length - 1) {
    currentImageIndex++;
    updateGalleryImage();
  }
}

if (prevBtn) prevBtn.addEventListener("click", showPrevImage);
if (nextBtn) nextBtn.addEventListener("click", showNextImage);
if (closeGalleryBtn) closeGalleryBtn.addEventListener("click", closeGallery);

if (galleryModal) {
  galleryModal.addEventListener("click", (e) => {
    if (e.target === galleryModal) closeGallery();
  });
}

// ===============================
// MINI PROJECT POPUP
// ===============================
let miniPopup, miniPopupTitle, miniPopupDesc, miniPopupEngine;

function openMiniPopup(title, engine, desc) {
  if (miniPopupTitle) miniPopupTitle.textContent = title;
  if (miniPopupDesc) miniPopupDesc.textContent = desc;
  if (miniPopupEngine) miniPopupEngine.textContent = engine;
  if (miniPopup) miniPopup.classList.add("active");
}

function closeMiniPopupFn() {
  if (miniPopup) miniPopup.classList.remove("active");
}

// ===============================
// INITIALIZATION & EVENT HANDLERS
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize mini popup elements
  miniPopup = document.getElementById("mini-popup");
  miniPopupTitle = document.getElementById("mini-popup-title");
  miniPopupDesc = document.getElementById("mini-popup-desc");
  miniPopupEngine = document.getElementById("mini-popup-engine");
  const closeMiniBtn = document.getElementById("close-mini-popup");

  if (closeMiniBtn) {
    closeMiniBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeMiniPopupFn();
    });
  }

  if (miniPopup) {
    miniPopup.addEventListener("click", (e) => {
      if (e.target === miniPopup) closeMiniPopupFn();
    });
  }

  // Initialize UI
  updateDamageCounter();
  updateWeaponUI();

  // FIX #3: Resume AudioContext on first interaction (belt-and-suspenders
  //         in case the browser suspends it even after lazy creation).
  document.body.addEventListener(
    "click",
    () => {
      if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
    },
    { once: true },
  );

  // Project cards interaction
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      e.stopPropagation();

      // Mini projects always open the popup
      if (card.classList.contains("small")) {
        const title = card.querySelector(".overlay h3")?.textContent || "";
        const engine =
          card.querySelector(".project-engine")?.textContent || "UE5";
        const desc = card.querySelector(".project-desc")?.textContent || "";
        openMiniPopup(title, engine, desc);
        return;
      }

      // FIX #1: Gallery trigger is now data-type="gallery" — no fragile title string match
      if (card.dataset.type === "gallery") {
        openGallery();
        return;
      }

      // Other main projects → YouTube modal
      const modal = document.getElementById("video-modal");
      const iframe = document.getElementById("youtube-frame");
      const youtubeURL = card.dataset.youtube;

      if (modal && iframe && youtubeURL) {
        iframe.src = youtubeURL + "?autoplay=1";
        modal.classList.add("active");
      }
    });
  });

  // Close video modal
  const closeModalBtn = document.getElementById("close-modal");
  const videoModal = document.getElementById("video-modal");
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (videoModal) {
        videoModal.classList.remove("active");
        const iframe = document.getElementById("youtube-frame");
        if (iframe) iframe.src = "";
      }
    });
  }

  if (videoModal) {
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) {
        videoModal.classList.remove("active");
        const iframe = document.getElementById("youtube-frame");
        if (iframe) iframe.src = "";
      }
    });
  }

  // Global click handler for damage effects
  document.addEventListener("click", (e) => {
    // Ignore modals and special elements
    if (
      e.target.closest("#mini-popup") ||
      e.target.closest("#video-modal") ||
      e.target.closest("#image-gallery-modal") ||
      e.target.closest("a") ||
      e.target.closest("button") ||
      e.target.closest(".project-card") ||
      e.target.closest(".health-pickup") ||
      e.target.closest(".nav") ||
      e.target.closest(".damage-counter") ||
      e.target.closest(".weapon-ui")
    )
      return;

    triggerBloodEffect(e);
  });
});
