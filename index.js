var recipes = {
  
}
    
 function updateObjectWithKeyAndValue (object, key, value) {
   return Object.assign({}, object, {[key]: value})
 }


function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value
  return object
}

function deleteObjectByKey (obj, key) {
  var objNew = Object.assign({}, obj)
  delete objNew[key]
  return objNew
}
