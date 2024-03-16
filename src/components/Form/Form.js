function Form() {
  return (
    <>
      <form className="form-container" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="ef0ecb0b-67fe-405f-bef7-4c1b55055ff0" />
        <div>
          <label>Nom</label>
          <input type="text" id="name" name="name" placeholder="Nom" required />
        </div>
        <div>
          <label>E-mail</label>
          <input type="email" id="email" name="email" placeholder="Adresse E-mail" required />
        </div>
        <div>
          <textarea className="message-form" type="text" id="message" name="message" placeholder="message" required />
        </div>
        <button type="submit" className="send-button">
          Envoyer
        </button>
      </form>
    </>
  );
}

export default Form;
