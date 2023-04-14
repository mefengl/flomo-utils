function getInputArea() {
  return document.querySelector(".input-box");
};

function getPinLeft() {
  const inputArea = getInputArea();
  if (!inputArea) return null;
  return inputArea.querySelector('.pin-left');
}

function getPinRight() {
  const inputArea = getInputArea();
  if (!inputArea) return null;
  return inputArea.querySelector('.pin-right');
}

function getSubmitButton() {
  const pinRight = getPinRight();
  if (!pinRight) return null;
  const saveBtn = pinRight.querySelector('.saveBtn');
  if (!saveBtn) return null;
  if (saveBtn.style.display === 'none') return null;
  return saveBtn;
};

function getTextarea() {
  const inputArea = getInputArea();
  if (!inputArea) return null;
  return inputArea.querySelector('.ProseMirror');
};

function getNewChatButton() {
};

function getLastResponse() {
};

function getLastResponseText() {
};

function getLastPrompt() {
};

function getLastPromptText() {
};

async function send(text) {
  const textarea = getTextarea();
  if (!textarea) return;
  const originalContent = textarea.innerHTML;
  const lines = text.split('\n');
  textarea.innerHTML = '';
  for (const line of lines) {
    const p = document.createElement('p');
    p.textContent = line;
    textarea.appendChild(p);
  }
  await new Promise(resolve => setTimeout(resolve, 100));
  const submitButton = getSubmitButton();
  if (!submitButton) return;
  submitButton.dispatchEvent(new Event('click'));
  await new Promise(resolve => setTimeout(resolve, 100));
  textarea.innerHTML = originalContent;
};
