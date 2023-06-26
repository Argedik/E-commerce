import { Request, Response } from 'express';
import axios from 'axios';
import express from 'express';

const router = express.Router();

router.get('/all-images', async (req: Request, res: Response) => {
  try {
    const repoOwner = "Argedik"; // Repo sahibinin kullanıcı adı
    const repoName = "system"; // Repo adı
    const response = await axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/vanilla/fundamentals/e-commerce/MealBox/front-end/assets/mealbox-folders`);

    const fileUrls = response.data.map((file: any) => file.download_url);

    res.send(fileUrls);
    console.log('all-images calisti');
  } catch (error) {
    res.status(500).send('Unable to get images: ' + error);
  }
});

export default router;