import express from 'express';

const routes = express.Router();

routes.post('/certifications', async (req, res) => {
  //chamar micro serviço
  await producer.send({
    topic: 'issue-certificate',
    messages: [
      { 
        user: { id: 1, name: 'André Wronscki'},
        course: 'Kafka com Node.js',
        grade: 5,
      },
    ],
  });

  console.log(req.producer);
  return res.json({ ok: true});
});

export default routes;
