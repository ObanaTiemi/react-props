function BtnAdicionar({ aoClicar, setAoClicar }) {

  function handleClick() {
    if (aoClicar < 10) {
      setAoClicar(aoClicar + 1);
    } else {
      alert("Não dá para clicar mais");
    }
  }

  return (
    <button className="btn btn-primary"
      onClick={handleClick}>
      Adiciona 1
    </button>
  )
}

export default BtnAdicionar;
