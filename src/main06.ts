// GENERICS

const addId = <T extends object> (obj: T) => {
    const id = Math.random().toString(16)
    return {
        ...obj,
        id
    };
};

interface IUser7<T> {
    name: string;
    data: T;
}
    const user7: IUser7 <{meta: string}> = {
        name: "Jack",
        data: {
            meta: "foo",
        },
    };

    const user8: IUser7<string[]> = {
        name: "John",
        data: ['foo', 'bar', 'baz'],
    };

