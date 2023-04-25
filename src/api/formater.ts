export default <T>(collection: Array<any>, formater:(object: any) => T) => {
    return collection.map(formater);
}