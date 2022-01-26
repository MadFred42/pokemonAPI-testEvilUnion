export const useFirstCapitalLetter = (name: string) => {

    if (!name) {
        return;
    }

    const firstCapitalName = name[0].toUpperCase() + name.slice(1);

    return firstCapitalName;
}