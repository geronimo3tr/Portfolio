function Form() {
  return (
    <>
      <form className="form-container">
        <div>
          <label>Nom</label>
          <input type="text" id="name" placeholder="Nom" required />
        </div>
        <div>
          <label>E-mail</label>
          <input type="email" id="email" placeholder="Adresse E-mail" required />
        </div>
        <div>
          <textarea className="message-form" type="text" id="message" placeholder="message" required />
        </div>
      </form>
    </>
  );
}

export default Form;
