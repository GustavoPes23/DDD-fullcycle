import Product from "../entity/product";
import RepositoryInterface from "../../@shared/repository/repository-interface";

//O t do repositoryInterface recebe minha entidade
export default interface ProductRepositoryInterface extends RepositoryInterface<Product> {
    // findByName(name: string): Promise<Product>;
}