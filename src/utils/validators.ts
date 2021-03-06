export const requiredField = (value: string) => {
    if (value)  {
        return undefined;
    }else {
        return 'Field is required';
    }
}

export const maxLength = (maxLength: number) => (value: string) => {
    if (value && value.length > maxLength) {
        return `Max length must be length ${maxLength} symbols`;
    } else {
        return  undefined;
    }
}