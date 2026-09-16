function TxfNome({ valor = '', aoMudar }){
  return (
    <div className="col">
    <label htmlFor="txfName" className="form-label">Nome:</label>
    <input 
      type="text" 
      className="form-control" 
      id="txfName"
      name="txfName"
      placeholder="Seu Nome"
      value={ valor }
      onChange={ (e) => aoMudar && aoMudar(e.target.value) }
      />
  </div>
  )
}

export default TxfNome;