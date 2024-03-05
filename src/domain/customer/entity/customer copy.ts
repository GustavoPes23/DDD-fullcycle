//Entidade é algo único -> tem id, mas os outros atributos podem ir mudando com o tempo, contém regras de negócios (modelagem de domínios ricos)
//entidade anêmica -> apenas armazena os dados
//DTO -> Data transfer object -> semelhante a entidade anêmica
//ORM -> Criando o software orientado ao banco de dados
class Customer1 {
    protected _id: string;
    protected _name: string;
    protected _address: string;

    constructor(id: string, name: string, address: string) {
        this._id = id;
        this._name = name;
        this._address = address;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get address(): string {
        return this._address;
    }

    set name(name: string) {
        this._name = name;
    }

    set address(address: string) {
        this._address = address;
    }
}