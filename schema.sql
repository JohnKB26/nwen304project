CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(40) UNIQUE CONSTRAINT notemptyusername CHECK(length(username)>0),
  password VARCHAR(40) CONSTRAINT notemptypassword CHECK(length(password)>0),
  loggedon BOOLEAN
);

CREATE TABLE collections(
  item_id SERIAL PRIMARY KEY,
  item_name VARCHAR(40),
  item_colour VARCHAR(40),
  item_quantity INTEGER,
  item_price INTEGER,
  item_category VARCHAR(30),
  url VARCHAR(300)
);

INSERT INTO users(username, password) VALUES('test', 'test1');

INSERT INTO collections(item_name, item_colour, item_quantity, item_price, item_category, url)
VALUES('Blue Pinafore', 'blue', 5, 16, 'kids', 'https://s-media-cache-ak0.pinimg.com/736x/2c/9f/06/2c9f0662571728016c474d38a6331777.jpg');
INSERT INTO collections(item_name, item_colour, item_quantity, item_price, item_category, url)
VALUES('Boys Jeans', 'blue', 5, 21, 'kids', 'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=26887786');
INSERT INTO collections(item_name, item_colour, item_quantity, item_price, item_category, url)
VALUES('Girls Leather Jacket', 'black', 5, 59, 'kids', 'https://static.zara.net/photos///2017/V/0/3/p/3791/605/800/2/w/560/3791605800_1_1_1.jpg?ts=1498586493000');
INSERT INTO collections(item_name, item_colour, item_quantity, item_price, item_category, url)
VALUES('Womens Black Leather Jacket', 'black', 5, 70, 'womens', 'http://g.nordstromimage.com/ImageGallery/store/product/Zoom/17/_12148937.jpg');
INSERT INTO collections(item_name, item_colour, item_quantity, item_price, item_category, url)
VALUES('Red Floral Dress', 'red', 5, 90, 'womens', 'http://g.nordstromimage.com/ImageGallery/store/product/Zoom/18/_12648878.jpg');
INSERT INTO collections(item_name, item_colour, item_quantity, item_price, item_category, url)
VALUES('Boyfriend Jeans', 'blue', 5, 70, 'womens', 'http://g.nordstromimage.com/ImageGallery/store/product/Zoom/11/_12338551.jpg');
INSERT INTO collections(item_name, item_colour, item_quantity, item_price, item_category, url)
VALUES('Blue Bomber Jacket', 'blue', 5, 59, 'mens', 'http://g.nordstromimage.com/ImageGallery/store/product/Zoom/15/_10169695.jpg');
INSERT INTO collections(item_name, item_colour, item_quantity, item_price, item_category, url)
VALUES('Black Ripped Skinny Jeans', 'black', 5, 100, 'mens', 'http://g.nordstromimage.com/ImageGallery/store/product/Zoom/13/_10340493.jpg');
INSERT INTO collections(item_name, item_colour, item_quantity, item_price, item_category, url)
VALUES('Plain White Button Up Shirt', 'white', 5, 46, 'mens', 'http://nord.imgix.net/Zoom/0/_11360460.jpg');
