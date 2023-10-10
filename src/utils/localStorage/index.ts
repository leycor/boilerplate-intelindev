/**
 * Utility that allows the application to use the Local Storage facility to save data
 * that needs to be persisted locally
 */

const window = global.window && global.window

// Reference the Local Storage from the Web Browser

/**
 * Saves the given data to the underlying data-storage using the given key
 * @param {*} key
 * @param {*} data
 */
export const saveData = <T>(key: string, data: T) => {
  window.localStorage.setItem(key, JSON.stringify(data))
}

/**
 * Retrieves the data associated to the given key from the underlying data-storage. If
 * no data is found for the given key null will be returned.
 * @param {*} key
 */
export const getData = <T>(key: string): T | null => {
  const data = window.localStorage.getItem(key)
  if (data) {
    return JSON.parse(data)
  }
  return null
}

/**
 * Deletes the data associated to the given key from the underlying data-storage
 * @param {*} key
 */
export const deleteData = (key: string) => {
  window.localStorage.removeItem(key)
}
