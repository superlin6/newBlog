function parse(str:string) {
    let value
    try {
      value = JSON.parse(str)
    } catch {
      value = null
    }
    return value
  }
   
  function stringify(obj:JSON) {
    let value
    try {
      value = JSON.stringify(obj)
    } catch {
      value = null
    }
    return value
  }
   
  export default function useLocalStorage() {
    function setItem(key:string, value:any) {
      value = stringify(value)
      window.localStorage.setItem(key, value)
    }
    function getItem(key:string) {
      let value = window.localStorage.getItem(key)
      if(value) {
        value = parse(value)
      }
      return value
    }
    return {
      setItem,
      getItem
    }
  }