import News from "src/Entities/News";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(News)
class NewsRepository extends Repository<News> {
    public BuscarTodos(): Promise<News[]> {
        const query = this.createQueryBuilder('n');
        return query.getMany();
        
    }

    public PegarPorId(id) {

        return this.findOne({id}, {relations: ['category']});

        // const query = this.createQueryBuilder('n');
        // query.where({id})
        // return query.getOne()
    }
}

export default NewsRepository;

let email = "email@email.com";
{
    email
}