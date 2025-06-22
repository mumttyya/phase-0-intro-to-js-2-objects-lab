const employee = {}; // An empty object to be used by the tests' beforeEach and the destructive functions

/**
 * Creates a new employee object with an additional key-value pair.
 * Does not modify the original employee object.
 *
 * @param {object} employee The original employee object.
 * @param {string} key The key to add or update.
 * @param {*} value The value to associate with the key.
 * @returns {object} A new employee object with the updated data.
 */
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee,
    [key]: value
  };
}

/**
 * Updates the original employee object with a new key-value pair.
 * This operation is destructive.
 *
 * @param {object} employee The employee object to modify.
 * @param {string} key The key to add or update.
 * @param {*} value The value to associate with the key.
 * @returns {object} The modified original employee object.
 */
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

/**
 * Creates a new employee object with a specified key deleted.
 * Does not modify the original employee object.
 *
 * @param {object} employee The original employee object.
 * @param {string} key The key to delete.
 * @returns {object} A new employee object with the key removed.
 */
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee
  };
  delete newEmployee[key];
  return newEmployee;
}

/**
 * Deletes a specified key from the original employee object.
 * This operation is destructive.
 *
 * @param {object} employee The employee object to modify.
 * @param {string} key The key to delete.
 * @returns {object} The modified original employee object.
 */
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
