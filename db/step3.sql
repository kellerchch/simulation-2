UPDATE properties 
SET image_url = $2
WHERE property_id = $1 

-- insert into properties (property_name, description, address, city, state, zip, image_url, loan_amt, mortgage, rent, user_id)
-- values(3, 'pink house', 'mediocre', 1234, 'Riverton', 'UT', 84343,'http', 150000, 1500, 800, 1)

-- INSERT INTO properties ( name, description, price, image_url )
-- VALUES ($1, $2, $3, $4);