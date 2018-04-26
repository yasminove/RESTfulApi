BEGIN;

DROP TABLE IF EXISTS books CASCADE;

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    genre VARCHAR(300),
    description TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    publisher VARCHAR(100) NOT NULL,
    pages INTEGER NOT NULL,
    image_url VARCHAR(2083) NOT NULL,
    buy_url VARCHAR(2083) NOT NULL
);
DROP TABLE IF EXISTS genres CASCADE;
CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);


INSERT INTO books (title, genre, description, author, publisher, pages, image_url, buy_url) VALUES
('The Murder House','Suspense','No. 7 Ocean Drive is a gorgeous, multi-million-dollar beachfront estate in the Hamptons, where money and privilege know no bounds. But its beautiful gothic exterior hides a horrific past', 'James Patterson', 'Brown and Company', 480, 'https://prodimage.images-bn.com/pimages/9781455589906_p0_v1_s550x406.jpg', 'https://www.barnesandnoble.com/w/the-murder-house-james-patterson/1120873479?ean=9781455589906#/');



INSERT INTO genres (name) VALUES
  ('suspense'),
  ('Self Help');

COMMIT;
