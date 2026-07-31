<script>
  const botao = document.getElementById("galeria");
  const submenu = document.getElementById("submenu");

  botao.addEventListener("click", function() {
    if (submenu.style.display === "none" || submenu.style.display === "") {
      submenu.style.display = "block";
    } else {
      submenu.style.display = "none";
    }
  });
</script>