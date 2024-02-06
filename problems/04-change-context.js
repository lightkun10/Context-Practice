function changeContext(func, obj) {
  let funcBound = func.bind(obj);
  return funcBound();
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
