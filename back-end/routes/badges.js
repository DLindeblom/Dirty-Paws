const router = require('express').Router();

module.exports = (db) => {
  
  router.get('/:id', (req, res) => {

    const queryString = `
    SELECT badges.* 
    FROM badges 
    JOIN user_badges ON badges.id = user_badges.badge_id
    JOIN users ON user_badges.user_id = users.id
    WHERE users.id = $1
    `
    const queryParams = [req.params.id]

    db.query(queryString, queryParams).then(data => {
      res.json(data.rows);
    })
    
  });

  return router;
}
