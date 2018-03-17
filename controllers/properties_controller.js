module.exports = {
    step1: ( req, res, next ) => {
      const dbInstance = req.app.get('db');

      dbInstance.step1([req.body.property_name, req.body.description])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
    },
  
    step2: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      
      dbInstance.step2([req.body.property_id, req.body.address, req.body.city, req.body.state, req.body.zip])
      .then( () => res.status(200).send() )
      .catch( (error) => res.status(500).send(error) );
    },
  
    step3: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        console.log(req.body)
        dbInstance.step3([req.body.image_url])
        .then( () => res.status(200).send() )
        .catch( (error) => res.status(500).send(error) );
      },

    step4: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      
      dbInstance.step4([req.body.property_id, req.body.loan_amt, req.body.mortgage])
      .then( () => res.status(200).send() )
      .catch( (error) => res.status(500).send(error) );
    },
  
    step5: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      
      dbInstance.step5([req.body.property_id, req.body.rent])
      .then( () => res.status(200).send() )
      .catch( (error) => res.status(500).send(error) );
    },
  
    delete: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      console.log(req.query)
      dbInstance.delete(req.query.property_id)
      .then( () => res.status(200).send() )
      .catch( (error) => res.status(500).send(error) );
    },

    filter: ( req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.filter(req.query.rent)
        .then( property => res.status(200).send( property ) )
        .catch( () => res.status(500).send() );
      },

    reset: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

        dbInstance.reset()
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },

    select_all: ( req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.select_all()
        .then( properties => res.status(200).send( properties ) )
        .catch( () => res.status(500).send() );
        }
  };