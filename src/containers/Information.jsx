import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

const Information = () => {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext);
  const { handleSubmit, register, errors } = useForm();
  const history = useHistory();

  const onSubmit = (values) => {
    console.log(values);
    addToBuyer(values);
    history.push('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="information-content">
        <div className="Information-head">
          <h2>Informacion de contacto</h2>
        </div>
        <div className="Information-form">
          <form>
            <input
              type="text"
              {...register('name')}
              placeholder="Nombre completo"
              name="name"
            />
            <input
              type="email"
              {...register('email')}
              placeholder="Correo electronico"
              name="email"
            />
            <input
              type="text"
              {...register('address')}
              placeholder="Direccion"
              name="address"
            />
            <input
              type="text"
              {...register('apto')}
              placeholder="Apto"
              name="apto"
            />
            <input
              type="text"
              {...register('city')}
              placeholder="Cuidad"
              name="city"
            />
            <input
              type="text"
              {...register('country')}
              placeholder="Pais"
              name="country"
            />
            <input
              type="text"
              {...register('state')}
              placeholder="Estado"
              name="state"
            />
            <input
              type="text"
              {...register('cp')}
              placeholder="Codigo postal"
              name="cp"
            />
            <input
              type="text"
              {...register('phone')}
              placeholder="Telefono"
              name="phone"
            />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back" onClick={() => history.goBack()}>
            Regresar
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit(onSubmit)}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido: </h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
