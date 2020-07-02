const getColors = () => {
    return ['red', 'green', 'blue'];
}

interface Colors {
    color: string,
    Width: number,
    childColor?: VoidFunction
}

const getJsonColors = () => {
    const JsonColor: Colors = {
        color: 'red',
        Width: 200,       
    }
    return JsonColor;
}

interface Employee {
    name: string,
    loc: number,
    details?: VoidFunction 
}

const employee: Employee = {
    name: 'Madhu',
    loc: 77067,
    details: () => {

    }
}

export {getColors, getJsonColors, employee};