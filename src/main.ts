import './style.css';
import { homePage } from './core_programs';

const terminalElement = document.getElementById('terminal') as HTMLDivElement;
const outputElement = document.getElementById('output') as HTMLDivElement;
const inputElement = document.getElementById('command-input') as HTMLInputElement;

let activeCleanup: (() => void) | null = null;

let currentPrompt = 'C:\\>';

function appendOutput(text: string): void {
  const line = document.createElement('div');
  line.className = 'output-line';
  line.textContent = text;
  outputElement.appendChild(line);
  terminalElement.scrollTop = terminalElement.scrollHeight;
}


function runProgram(programFn: (container: HTMLElement) => void | (() => void)) {
  if (activeCleanup) {
    activeCleanup();
    activeCleanup = null;
  }

  const line = document.createElement('div');
  line.className = 'output-line';
  outputElement.appendChild(line);

  const cleanup = programFn(line);
  if (cleanup) {
    activeCleanup = cleanup;
  }
}


function processCommand(rawInput: string): void {
  const trimmed = rawInput.trim();
  if (!trimmed) return;

  const parts = trimmed.split(/\s+/);
  const command = parts[0].toUpperCase();

  switch (command) {
    case 'HOME':
      runProgram(homePage);
      break;
    
    case 'HELLO':
      appendOutput("hello world! :D");
      break;

    case 'CLS':
      if (activeCleanup) activeCleanup();
      outputElement.innerHTML = '';
      break;

    default:
      const line = document.createElement('div');
      line.className = 'output-line';
      line.textContent = `Unknown command or program name: "${rawInput}"`;
      outputElement.appendChild(line);
      break;
  }
}


inputElement.addEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    const rawInput = inputElement.value;
    
    appendOutput(`${currentPrompt} ${rawInput}`);
    inputElement.value = '';
    processCommand(rawInput);
  }
});


outputElement.addEventListener('click', (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const command = target.closest('[data-command]')?.getAttribute('data-command');

  if (command) {
    appendOutput(`${currentPrompt} ${command}`);
    processCommand(command);
    inputElement.focus();
  }
});


document.addEventListener('click', () => {
  inputElement.focus();
});


//Starting program
runProgram(homePage);