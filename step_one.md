### Paso 1

En este apartado solo re-emplazaremos el contenido en nuestro componente App la siguiente estructura (JSX):

```jsx
...
return (
    <>
    {/* Navigation*/}
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container px-5">
        <a className="navbar-brand" href="#page-top">
            Start Bootstrap
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a className="nav-link" href="#!">
                Sign Up
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#!">
                Log In
                </a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    {/* Header*/}
    <header className="masthead text-center text-white">
        <div className="masthead-content">
        <div className="container px-5">
            <h1 className="masthead-heading mb-0">One Page Wonder</h1>
            <h2 className="masthead-subheading mb-0">Will Rock Your Socks Off</h2>
            <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">
            Learn More
            </a>
        </div>
        </div>
        <div className="bg-circle-1 bg-circle" />
        <div className="bg-circle-2 bg-circle" />
        <div className="bg-circle-3 bg-circle" />
        <div className="bg-circle-4 bg-circle" />
    </header>
    {/* Content section 1*/}
    <section id="scroll">
        <div className="container px-5">
        <div className="row gx-5 align-items-center">
            <div className="col-lg-6 order-lg-2">
            <div className="p-5">
                <img
                className="img-fluid rounded-circle"
                src="https://picsum.photos/id/767/800/800"
                alt="..."
                />
            </div>
            </div>
            <div className="col-lg-6 order-lg-1">
            <div className="p-5">
                <h2 className="display-4">For those about to rock...</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam
                exercitationem, ea animi blanditiis recusandae! Ratione voluptatum
                molestiae adipisci, beatae obcaecati.
                </p>
            </div>
            </div>
        </div>
        </div>
    </section>
    {/* Content section 2*/}
    <section>
        <div className="container px-5">
        <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
            <div className="p-5">
                <img
                className="img-fluid rounded-circle"
                src="https://picsum.photos/id/666/800/800"
                alt="..."
                />
            </div>
            </div>
            <div className="col-lg-6">
            <div className="p-5">
                <h2 className="display-4">We salute you!</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam
                exercitationem, ea animi blanditiis recusandae! Ratione voluptatum
                molestiae adipisci, beatae obcaecati.
                </p>
            </div>
            </div>
        </div>
        </div>
    </section>
    {/* Content section 3*/}
    <section>
        <div className="container px-5">
        <div className="row gx-5 align-items-center">
            <div className="col-lg-6 order-lg-2">
            <div className="p-5">
                <img
                className="img-fluid rounded-circle"
                src="https://picsum.photos/id/444/800/800"
                alt="..."
                />
            </div>
            </div>
            <div className="col-lg-6 order-lg-1">
            <div className="p-5">
                <h2 className="display-4">Let there be rock!</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam
                exercitationem, ea animi blanditiis recusandae! Ratione voluptatum
                molestiae adipisci, beatae obcaecati.
                </p>
            </div>
            </div>
        </div>
        </div>
    </section>
    {/* Footer*/}
    <footer className="py-5 bg-black">
        <div className="container px-5">
        <p className="m-0 text-center text-white small">
            Copyright © Your Website 2023
        </p>
        </div>
    </footer>
    </>
)
...
```

Agregar un archivo llamado **_./src/index.css_** con el siguiente contenido 

```css
html {
  scroll-padding-top: 67px;
}

.btn-xl {
  text-transform: uppercase;
  padding: 1.5rem 3rem;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
}

.navbar-custom {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
}
.navbar-custom .navbar-brand {
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  font-weight: 700;
}
.navbar-custom .navbar-nav .nav-item .nav-link {
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
}

header.masthead {
  position: relative;
  overflow: hidden;
  padding-top: calc(7rem + 72px);
  padding-bottom: 7rem;
  background: linear-gradient(0deg, #ff6a00 0%, #ee0979 100%);
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: scroll;
  background-size: cover;
}
header.masthead .masthead-content {
  z-index: 1;
  position: relative;
}
header.masthead .masthead-content .masthead-heading {
  font-size: 4rem;
}
header.masthead .masthead-content .masthead-subheading {
  font-size: 2rem;
}
header.masthead .bg-circle {
  z-index: 0;
  position: absolute;
  border-radius: 100%;
  background: linear-gradient(0deg, #ee0979 0%, #ff6a00 100%);
}
header.masthead .bg-circle-1 {
  height: 90rem;
  width: 90rem;
  bottom: -55rem;
  left: -55rem;
}
header.masthead .bg-circle-2 {
  height: 50rem;
  width: 50rem;
  top: -25rem;
  right: -25rem;
}
header.masthead .bg-circle-3 {
  height: 20rem;
  width: 20rem;
  bottom: -10rem;
  right: 5%;
}
header.masthead .bg-circle-4 {
  height: 30rem;
  width: 30rem;
  top: -5rem;
  right: 35%;
}

@media (min-width: 992px) {
  header.masthead {
    padding-top: calc(10rem + 55px);
    padding-bottom: 10rem;
  }
  header.masthead .masthead-content .masthead-heading {
    font-size: 6rem;
  }
  header.masthead .masthead-content .masthead-subheading {
    font-size: 4rem;
  }
}
```

Luego en el archivo **_./src/index.js_** incluir el siguiente codigo despues de los import de boostrap:

```javascript
...
import './index.css';
...
```
Una vez finalizado podremos observar el resultado.

[regresar](README.md)
