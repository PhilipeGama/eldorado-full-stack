import { Request, Response, Router } from "express";
import NewsController from "src/Controllers/NewsController";



const router = Router();

router.get('/news', NewsController.index);
router.get('/news/:id', NewsController.view);
router.post('/news', NewsController.create);

export default router;