//arquitetura hexagonal
export default interface RepositoryInterface<T> {
    create(entity: T): Promise<void>; //não é uma boa prática quando for criar, atualizar ... retornar o próprio o objeto quando vc já tem ele
    update(entity: T): Promise<void>;
    find(id: string): Promise<T>;
    findAll(): Promise<T[]>; //recomenda-se retornar um metadata como o total de registros, páginação ... ao invés de apenas retornar todooos os itens
}