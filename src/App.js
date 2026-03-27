import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";

const artworks = [
  {
    id: 1,

    title: "Mona Lisa",
    author: "Leonardo da Vinci",
    category: "Portret",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg",
    link: "https://pl.wikipedia.org/wiki/Mona_Lisa",
  },
  {
    id: 2,
    title: "Gwiaździsta noc",
    author: "Vincent van Gogh",
    category: "Krajobraz",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/The_Starry_Night.jpg",
    link: "https://pl.wikipedia.org/wiki/Gwia%C5%BAdzista_noc",
  },
  {
    id: 3,
    title: "Krzyk",
    author: "Edvard Munch",
    category: "Abstrakcja",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg",
    link: "https://pl.wikipedia.org/wiki/Krzyk",
  },
  {
    id: 4,
    title: "Ostatnia Wieczerza",
    author: "Leonardo da Vinci",
    category: "Religia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Leonardo_da_Vinci_-_The_Last_Supper.jpg",
    link: "https://pl.wikipedia.org/wiki/Ostatnia_Wieczerza_(Leonardo_da_Vinci)",
  },
  {
    id: 5,
    title: "Słoneczniki",
    author: "Vincent van Gogh",
    category: "Krajobraz",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/40/Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg",
    link: "https://pl.wikipedia.org/wiki/S%C5%82oneczniki_(obraz_Vincenta_van_Gogha)",
  },
  {
    id: 6,
    title: "Narodziny Wenus",
    author: "Sandro Botticelli",
    category: "Religia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1c/Birth_of_Venus_Botticelli.jpg",
    link: "https://pl.wikipedia.org/wiki/Narodziny_Wenus",
  },
  {
    id: 7,
    title: "Guernica",
    author: "Pablo Picasso",
    category: "Abstrakcja",
    image: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg",
    link: "https://pl.wikipedia.org/wiki/Guernica",
  },
  {
    id: 8,
    title: "Impresja, wschód słońca",
    author: "Claude Monet",
    category: "Krajobraz",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5a/Claude_Monet%2C_Impression%2C_soleil_levant.jpg",
    link: "https://pl.wikipedia.org/wiki/Impresja,_wsch%C3%B3d_s%C5%82o%C5%84ca",
  },
];

function App() {
  const [category, setCategory] = React.useState("Wszystkie");
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#root">
            Galeria sztuki
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="btn"
                  onClick={() => setCategory("Wszystkie")}
                >
                  Wszystkie
                </button>
              </li>
              <li className="nav-item">
                <button className="btn" onClick={() => setCategory("Portret")}>
                  Portret
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn"
                  onClick={() => setCategory("Krajobraz")}
                >
                  Krajobraz
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn"
                  onClick={() => setCategory("Abstrakcja")}
                >
                  Abstrakcja
                </button>
              </li>
              <li className="nav-item">
                <button className="btn" onClick={() => setCategory("Religia")}>
                  Religia
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="d-flex flex-wrap justify-content-center">
        {artworks
          .filter(
            (artwork) =>
              category === "Wszystkie" || artwork.category === category,
          )
          .map((artwork) => (
            <div
              key={artwork.id}
              className="card bg-body-tertiary"
              style={{ width: "18rem", margin: "1rem" }}
            >
              <img
                src={artwork.image}
                className="card-img-top"
                alt={artwork.title}
              />
              <div className="card-body">
                <h5 className="card-title">{artwork.title}</h5>
                <p className="card-text">Autor: {artwork.author}</p>
                <p className="card-text">Kategoria: {artwork.category}</p>
                <a
                  href={artwork.link}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Więcej informacji
                </a>
              </div>
            </div>
          ))}
      </main>
    </>
  );
}

export default App;
