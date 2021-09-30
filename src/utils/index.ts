import format from "date-fns/format";

/* Date and Time */
export function formatISODate(isoDate: any) {
    if (isoDate === undefined) {
        return "N/A";
    }
    return format(new Date(isoDate), "dd MMM yyyy");
}


/* URL Search Params */

// Get URL param in page url
export function getSearchParam(key: string) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}

// Get URL param in page url
export function setSearchParam(key: string, value: string) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.append(key, value);
}