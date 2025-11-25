class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = String(initialValue);
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value += String(str);
  }
  padStart(str) {
    this.#value = String(str) + this.#value;
  }
  padBoth(str) {
    this.#value = String(str) + this.#value + String(str);
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
