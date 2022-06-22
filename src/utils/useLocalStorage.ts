
function parse(str: string | null) {
    let value
    if (str) {
        value = JSON.parse(str)
    } else {
        value = null
    }
    return value
}

function stringify(obj: JSON) {
    let value
    try {
        value = JSON.stringify(obj)
    } catch {
        value = null
    }
    return value
}

export default function useLocalStorage() {
    function setItem(key: string, value: any) {
        value = stringify(value)
        window.localStorage.setItem(key, value)
    }
    function getItem(key: string) {
        let value = parse(window.localStorage.getItem(key))
        return value
    }
    return {
        setItem,
        getItem
    }
}