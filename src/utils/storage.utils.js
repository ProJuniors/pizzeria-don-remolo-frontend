const storageKey = "don-remolo-cart";

function createStorage(data) {
  if (!storageExists()) {
    localStorage.setItem(storageKey, JSON.stringify(data))
  }
}

function readStorage() {
  if (storageExists()) {
    return JSON.parse(localStorage.getItem(storageKey))
  }

  initStorage()
  return []
}

function updateStorage(data) {
  if (storageExists()) {
    localStorage.setItem(storageKey, JSON.stringify(data))
  }
}

function storageExists() {
  let storage = localStorage.getItem(storageKey)
  if (storage) return true
  return false
}

function initStorage() {
  let storageEmpty = [] 
  createStorage(storageEmpty)
}

export { createStorage, readStorage, updateStorage, initStorage }