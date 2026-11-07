
import { useState, type FormEvent } from 'react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      email === 'admin@test.com' &&
      password === '123456'
    ) {
      setMessage('Bienvenido al sistema');
    } else {
      setMessage('Credenciales incorrectas');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>

      <div>
        <label htmlFor="email">Correo electrónico</label>

        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Contraseña</label>

        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <button type="submit">
        Iniciar sesión
      </button>

      {message && <p role="status">{message}</p>}
    </form>
  );
}
