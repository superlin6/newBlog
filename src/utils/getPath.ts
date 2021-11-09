
export function getPath(url: String) {
    const path = `/src/static/${url}.svg`;
    const modules = import.meta.globEager("/static/icon/*.svg");
    return modules[path].default;
}