<?php ob_start(); ?>
<form action="" method="post">
  <div class="row">
    <div class="form-group col-12 col-sm-6">
      
      <span id="erreur1">
        
      </span>
      <br>
      <label for="">Login</label>
      <input type="text" name="login" class="form-control" value="<?= $_COOKIE['login'] ?? "" ?>" id="login">
    </div>
    <div class="form-group col-12 col-sm-6">
      <span id="erreur2">
        
      </span>
      <br>
      <label for="">Password</label>
      <input type="password" name="mdp" class="form-control" id="pwd">
    </div>
  </div>
  <input type="submit" class="btn btn-primary mt-3" id="btn1">
</form>
<?php $content = ob_get_clean();
include 'template.phtml';




