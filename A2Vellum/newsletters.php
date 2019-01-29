<?php

if (isset($_POST["submit"])) {
    $email = $_POST["email"];
    $subject = "Thank you for subscribing!";
    $message = "You are now subscribed to receive newsletters from A2Vellum.";
    mail($email, $subject, $message);
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="apple-touch-icon" sizes="76x76" href="./assets/img/a2.png">
    <link rel="icon" type="image/png" href="./assets/img/a2.png">

    <title>A2Vellum: Newsletters</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800" rel="stylesheet">
    <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">

    <!-- Icons -->
    <link href="./assets/css/nucleo-icons.css" rel="stylesheet">

    <!-- BLK• CSS -->
    <link type="text/css" href="./assets/css/blk-design-system.css" rel="stylesheet">

    <!-- Custom CSS overrides -->
    <link type="text/css" href="./assets/css/style.css" rel="stylesheet">
</head>

<body class="index-page">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg fixed-top navbar-transparent bg-black" color-on-scroll="100">
        <div class="container">
            <div class="navbar-translate">
                <a href="./" class="navbar-brand">
                    <span>A2</span>Vellum
                </a>

                <!-- Hamburger dropdown menu for mobile -->
                <button class="navbar-toggler navbar-toggler" aria-expanded="false" aria-controls="navigation-index" aria-label="Toggle navigation" type="button" data-target="#navigation" data-toggle="collapse">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                </button>

            </div>

            <!-- Opened navbar menu for small screens -->
            <div class="navbar-collapse justify-content-end collapse bg-black" id="navigation">
                <div class="navbar-collapse-header">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <a>A2Vellum</a>
                        </div>
                        <div class="col-6 collapse-close text-right">
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="tim-icons icon-simple-remove"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Navbar links -->
                <ul class="navbar-nav">
                    <li class="nav-item p-0">
                        <a href="tew-b.html" class="nav-link">
                            TEW-B
                        </a>
                    </li>
                    <li class="nav-item p-0">
                        <a href="nyne-s.html" class="nav-link">
                            NYNE-S
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-warning d-none d-lg-block">
                            Coming 2050
                        </a>
                    </li>
                </ul>

            </div>

        </div>
    </nav>
    <!-- End Navbar -->

    <div class="wrapper">
        <div class="main page-header header-filter">
            <div class="squares square1"></div>
            <div class="squares square2"></div>
            <div class="squares square3"></div>
            <div class="squares square4"></div>
            <div class="squares square5"></div>
            <div class="squares square6"></div>
            <div class="squares square7"></div>

            <div class="section newsletters">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- Sign up description -->
                        <div class="col-lg-5 mb-md">
                            <hr class="line-primary">
                            <h1 class="display-1 text-primary">Newsletters</h1>
                            <h3 class="description">
                                After signing up, you will receive weekly newsletters to stay up-to-date with our latest news. You will also be notified immediately when our products go on sale so you don't miss a single opportunity. In addition, our newsletters will contain exclusive sneak peeks to all of our future products when they are announced.
                            </h3>
                        </div>

                        <!-- Sign up form -->
                        <div class="col-lg-6">
                            <div class="card card-register mb-auto">
                                <div class="card-header">
                                    <img src="./assets/img/square-purple-1.png" alt="Card image" class="card-img">
                                    <h4 class="card-title">Sign Up</h4>
                                </div>

                                <div class="card-body">
                                    <!-- PHP prompt -->
                                    <div class="<?php if (!empty($_POST["email"])) {
                                        echo 'h6 text-success';
                                    } else {
                                        echo 'h6 text-muted';
                                    } ?>">
                                        <?php
                                            if (!empty($_POST["email"])) {
                                                echo "Thank you! " . $_POST["email"] . " is now registered to receive newsletters.";
                                            } else {
                                                echo "Please fill out the form";
                                            }
                                        ?>
                                    </div>

                                    <form role="form" action="newsletters.php" method="POST">
                                        <!-- Full name text field -->
                                        <div class="form-group mb-2">
                                            <div class="input-group input-group-alternative">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="tim-icons icon-single-02"></i>
                                                    </span>
                                                </div>
                                                <input type="text" class="form-control" name="name" value="<?php echo $name;?>" placeholder="Full Name" required>
                                            </div>
                                        </div>
        
                                        <!-- Email text field -->
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="tim-icons icon-email-85"></i>
                                                    </span>
                                                </div>
                                                <input type="email" class="form-control" name="email" value="<?php echo $email;?>" placeholder="Email Address" required>
                                            </div>
                                        </div>

                                        <!-- Terms and conditions checkbox -->
                                        <div class="form-check text-left">
                                            <label class="form-check-label required">
                                                <input type="checkbox" class="form-check-input" onchange="document.getElementById('terms').disabled = !this.checked;" required>
                                                <span class="form-check-sign required">
                                                    I agree to the <a href="terms.html" target="_blank">terms and conditions</a> and <a href="privacy.html" target="_blank">privacy policy</a>.
                                                </span>
                                            </label>
                                        </div>
        
                                        <!-- Submit button -->
                                        <div class="text-center float-left">
                                            <input class="btn btn-primary btn-lg mt-md" type="submit" name="submit" value="Sign Up" id="terms" disabled>
                                        </div>
        
                                    </form>

                                </div>

                            </div>
                        </div>
                        <!-- End sign up form -->

                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <div class="row">

                    <!-- Company Logo -->
                    <div class="col-md-3">
                        <h1 class="title"><strong>A2</strong>Vellum</h1>
                    </div>

                    <!-- First nav column -->
                    <div class="col-md-3">
                        <ul class="nav">
                            <li class="nav-item">
                                <a href="./" class="nav-link">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="./#about" class="nav-link">About</a>
                            </li>
                            <li class="nav-item">
                                <a href="./#contact" class="nav-link">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a href="newsletters.php" class="nav-link">Newsletters</a>
                            </li>
                        </ul>
                    </div>

                    <!-- Second nav column -->
                    <div class="col-md-3">
                        <ul class="nav">
                            <li class="nav-item">
                                <a href="tew-b.html" class="nav-link">TEW-B</a>
                            </li>
                            <li class="nav-item">
                                <a href="nyne-s.html" class="nav-link">NYNE-S</a>
                            </li>
                            <li class="nav-item">
                                <a href="terms.html" class="nav-link">Terms and Conditions</a>
                            </li>
                            <li class="nav-item">
                                <a href="privacy.html" class="nav-link">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>

                    <!-- Media links -->
                    <div class="col-md-3">
                        <h3 class="title">Media</h3>
                        <div class="btm-wrapper profile">
                            <a href="https://www.facebook.com/A2Vellum" target="_blank" class="btn btn-icon btn-neutral btn-round btn-simple">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="https://twitter.com/A2Vellum" target="_blank" class="btn btn-icon btn-neutral btn-round btn-simple">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/a2vellum" target="_blank" class="btn btn-icon btn-neutral btn-round btn-simple">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
        <!-- End footer -->

    </div>
    <!-- End wrapper -->

    <!-- Javascript junk dump -->
    <!-- Core -->
    <script src="./assets/js/core/jquery.min.js" type="text/javascript"></script>
    <script src="./assets/js/core/popper.min.js" type="text/javascript"></script>
    <script src="./assets/js/core/bootstrap.min.js" type="text/javascript"></script>
    <script src="./assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
    
    <!-- Optional plugins -->
    <script src="./assets/js/plugins/bootstrap-switch.js"></script>
    <!-- BLK• JS -->
    <script src="./assets/js/blk-design-system.js" type="text/javascript"></script>

    <script>
        $(document).ready(function(){
            // Add smooth scrolling to all links
            $("a").on('click', function(event) {
                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {
                    // Prevent default anchor click behavior
                    event.preventDefault();
                    // Store hash
                    var hash = this.hash;
                    // Using jQuery's animate() method to add smooth page scroll
                    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function(){
                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                    });
                } // End if
            });
        });
    </script>
</body>

</html>