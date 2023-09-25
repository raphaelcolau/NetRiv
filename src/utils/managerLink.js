export function managerLink(path, format) {
    const url = "https://manager.netriv.fr/";

    if (!path.endsWith(".php")) {
        path += ".php";
    }

    if (format === "full") {
        return url + path;
    } else {
        return path;
    }
}