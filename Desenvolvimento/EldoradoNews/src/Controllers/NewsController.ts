import { Request, Response } from 'express';
import News from 'src/Entities/News';
import NewsRepository from 'src/Repository/NewsRepository';
import { getCustomRepository } from 'typeorm';



class NewsController {
    async index(request: Request, response: Response) {

        const newsRepository = getCustomRepository(NewsRepository);
        const news = await newsRepository.BuscarTodos();

        response.json(news)
    }

    async create(request: Request, response: Response) {

        const newsRepository = getCustomRepository(NewsRepository);

        const {
            title,
            news_body,
            cover,
            posted_by,
            is_actived,
            category
        } = request.body

        let news = new News();
        news.title = title
        news.news_body = news_body;
        news.cover = cover;
        news.is_actived = is_actived;
        news.posted_by = posted_by;
        news.category = category
        news = await newsRepository.save(news);

        return response.json(news);
    }

    public async view(request: Request, response: Response) {
        const newsRepository = getCustomRepository(NewsRepository);
        const { id } = request.params;
        const news = await newsRepository.PegarPorId(id);

        return response.json(news);
    }
}

export default new NewsController();