document.getElementById("navbar").innerHTML = `
      <nav class="navbar navbar-expand-lg fixed-top navbar-scroll">
        <div class="container">
          <img src="Images/Logo.png" height="80" alt="Logo" loading="lazy" />
  
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse" id="navbarExample01">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="burgers.html">Burgers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="submarines.html">Submarines</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="fries.html">Fries</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pasta.html">Pasta</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="chicken.html">Chicken</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="beverages.html">Beverages</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="cart.html">| Cart</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="login.html">| Signup/Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
`;
