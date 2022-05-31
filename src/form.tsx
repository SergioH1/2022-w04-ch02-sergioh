import React from 'react';
export function Form() {
  const data = {};

  return (
    <>
      <div className="container">
        <form action="">
          <div>
            <label htmlFor="name"></label>
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div>
            <label htmlFor="lastName"></label>
            <input type="text" name="lastName" placeholder="Last name" />
          </div>
          <div>
            <label htmlFor="birthday"></label>
            <input type="date" name="birthday" placeholder="Year of birth" />
          </div>
          <div>
            <label htmlFor="">Male</label>
            <input type="radio" name="gender" id="" />
            <label htmlFor="">Female</label>
            <input type="radio" name="gender" id="" />
            <label htmlFor="">Other</label>
            <input type="radio" name="gender" id="" />
            <label htmlFor="">prefer not to mention</label>
            <input type="radio" name="gender" id="" />
          </div>
          <div>
            <input type="email" name="" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="newsLet">
              Desea recibir información de nuestra newsletter?
            </label>
            <input type="checkbox" name="newsLet" id="" />
          </div>
        </form>
      </div>
    </>
  );
}
