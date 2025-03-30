document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("footer").innerHTML = `
      <div class="container my-">
      <footer
        class="text-center text-lg-start border border-white mt-xl-5 pt-4"
      >
        <!-- Grid container -->
        <div class="container p-4">
          <!--Grid row-->
          <div class="row">
            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div id="footer-logo">
                <img src="Images/Logo.png" alt="logo" />
              </div>

              <ul class="list-unstyled mb-4">
                <li>
                  <p class="text-white">
                    No.251, Galwalagoda, Dekatana, SriLanka
                  </p>
                </li>
                <li>
                  <p class="text-white">+94112476362 <br />+94710510517</p>
                </li>
                <li>
                  <p class="text-white">Opening hours : 9.00 am - 10.00 pm</p>
                </li>
              </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 class="text-uppercase mb-4 text-white">Quick Links</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!" class="text-white">Home</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Burgers</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Submarines</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Fries</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Pasta</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Chicken</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Berverages</a>
                </li>
              </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 class="text-uppercase mb-4 text-white">Useful Links</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!" class="text-white">Privacy Notice</a>
                </li>
                <li>
                  <a href="#!" class="text-white">FAQ</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Terms and Conditions</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Contact us</a>
                </li>
                <li>
                  <a href="#!" class="text-white">About us</a>
                </li>
              </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 class="text-uppercase mb-4 text-white">Subscribe</h5>
              <label class="form-label text-white" for="form5Example2"
                >Email address</label
              >

              <div class="form-outline form-white mb-4">
                <input type="email" id="form5Example2" class="form-control" />

                <button type="submit" class="btn btn-subscribe">
                  Subscribe
                </button>
              </div>
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3 border-top border-white">
          © 2020 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/"
            >MDBootstrap.com</a
          >
        </div>
        <!-- Copyright -->
      </footer>
    </div>
      `;
});
