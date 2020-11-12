<?php 
    $navigation = array(
      "#" => "Home",
      "#services" => "Dienstleistungen",
      "#portfolio" => "Portfolio",
      "#aboutus" => "Über uns",
      "#team" => "Team",
      "#contact" => "Kontakt",
      "admin/index.php" => "Admin"

    );
?>
<header class="page-header">
        <div class="container">
            <nav class="navbar navbar-expand-md navbar-dark">
                <a class="navbar-brand" href="#">Golden</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav text-center">
                        <?php foreach($navigation AS $key => $value): ?>
                            <li class="nav-item<?php if($key == "#"): ?> active<?php endif;?>">
                            <a class="nav-link" href="<?php echo e($key); ?>">
                                <?php echo e($value); ?>
                                <?php if($key == "#"): ?>
                                    <span class="sr-only">(current)</span>
                                <?php endif;?>  
                            </a></li>
                        <?php endforeach;?> 
                    </ul>
                </div>
            </nav>
            <div class="jumbotron header-jumbotron text-center d-flex flex-column justify-content-center align-items-center">
                <h2 class="display-6">Wir entwickeln Webseiten</h2>
                <h1 class="display-5"><span>Golden</span> Websolutions</h1>
                <a class="btn btn-primary" href="#services" role="button">Weitere Informationen</a>
            </div>
        </div>
    </header>