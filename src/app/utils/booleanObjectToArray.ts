export default (obj: { [key: string]: boolean })=>{
    return Object.keys(obj)
        .filter((key) => obj[key])
        .map((key) => parseInt(key));
}