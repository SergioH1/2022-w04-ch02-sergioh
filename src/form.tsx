import React, { ChangeEvent, FormEvent, useState } from 'react';

export function Form() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    birthday: '',
    gender: '',
    email: '',
    newsletter: false,
  });
  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    console.log('Guardando', formData);
  }

  function handleChange(ev: ChangeEvent) {
    const eventTarget = ev.target as HTMLFormElement;
    const value =
      eventTarget.type === 'checkbox' ? eventTarget.checked : eventTarget.value;
    setFormData({ ...formData, [eventTarget.name]: value });
  }
  const form1 = (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="surname"></label>
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="birthday"></label>
          <input
            type="date"
            name="birthday"
            placeholder="Year of birth"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Male</label>
          <input type="radio" name="gender" id="male" value="male" />
          <label htmlFor="">Female</label>
          <input type="radio" name="gender" id="female" value="female" />
          <label htmlFor="">Other</label>
          <input type="radio" name="gender" id="other" value="other" />
          <label htmlFor="">prefer not to mention</label>
          <input type="radio" name="gender" id="prefer" value="prefer" />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="newsletter">
            Desea recibir información de nuestra newsletter?
          </label>
          <input
            type="checkbox"
            name="newsletter"
            id=""
            onChange={handleChange}
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
  //   const form2 = <div className="container"></div>;

  return form1;
}
